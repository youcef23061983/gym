import { NextResponse } from "next/server";
import { randomBytes, createHash } from "node:crypto";
import db from "../../../../lib/db";

const GENERIC_MESSAGE =
  "If an account exists for that email, reset instructions will be sent.";

export async function POST(request) {
  try {
    const body = await request.json();

    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Enter a valid email address." },
        { status: 400 },
      );
    }

    const user = await db.user.findUnique({
      where: { email },
      select: { id: true, email: true, password: true },
    });

    // Keep the response generic to avoid revealing registered accounts.
    if (!user?.password) {
      return NextResponse.json({ message: GENERIC_MESSAGE });
    }

    const rawToken = randomBytes(32).toString("hex");
    const tokenHash = createHash("sha256").update(rawToken).digest("hex");

    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await db.$transaction([
      db.passwordResetToken.deleteMany({ where: { email } }),
      db.passwordResetToken.create({
        data: { email, tokenHash, expiresAt },
      }),
    ]);

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!baseUrl) {
      throw new Error("NEXT_PUBLIC_API_URL is not configured.");
    }

    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;

    if (!apiKey || !senderEmail) {
      throw new Error("BREVO_API_KEY or BREVO_SENDER_EMAIL is not configured.");
    }

    const resetUrl = new URL("/reset-password", baseUrl);
    resetUrl.searchParams.set("token", rawToken);

    const emailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:520px;margin:auto;padding:24px;color:#0f172a">
        <h1 style="font-size:24px">Reset your password</h1>
        <p>We received a request to reset your password.</p>
        <p style="margin:28px 0">
          <a
            href="${resetUrl.toString()}"
            style="background:#4f46e5;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;display:inline-block"
          >
            Reset password
          </a>
        </p>
        <p>This link expires in 15 minutes and can only be used once.</p>
        <p>If you did not request this, you can ignore this email.</p>
      </div>
    `;

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Gym App",
          email: senderEmail,
        },
        to: [{ email: user.email }],
        subject: "Reset your password",
        htmlContent: emailHtml,
        textContent: [
          "We received a request to reset your password.",
          `Open this link within 15 minutes: ${resetUrl.toString()}`,
          "If you did not request this, you can ignore this email.",
        ].join("\n\n"),
      }),
      signal: AbortSignal.timeout(10000),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Brevo API error:", {
        status: response.status,
        code: result.code,
        message: result.message,
      });

      throw new Error("Brevo failed to send the reset email.");
    }

    console.log("Brevo accepted reset email:", result.messageId);

    return NextResponse.json({ message: GENERIC_MESSAGE });
  } catch (error) {
    console.error("Forgot-password error:", error);

    return NextResponse.json(
      {
        error:
          "Unable to process your request right now. Please try again later.",
      },
      { status: 500 },
    );
  }
}
