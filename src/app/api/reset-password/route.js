import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import bcrypt from "bcryptjs";
import db from "../../../../lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { token, password } = body;

    if (
      typeof token !== "string" ||
      !/^[a-f0-9]{64}$/i.test(token) ||
      typeof password !== "string" ||
      password.length < 8 ||
      password.length > 128
    ) {
      return NextResponse.json(
        { error: "Invalid or expired reset link, or invalid password." },
        { status: 400 },
      );
    }

    const tokenHash = createHash("sha256").update(token).digest("hex");
    const now = new Date();

    const resetToken = await db.passwordResetToken.findUnique({
      where: { tokenHash },
    });

    if (!resetToken || resetToken.expiresAt <= now) {
      return NextResponse.json(
        {
          error:
            "This reset link is invalid or has expired. Request a new one.",
        },
        { status: 400 },
      );
    }

    const user = await db.user.findUnique({
      where: { email: resetToken.email },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json(
        {
          error:
            "This reset link is invalid or has expired. Request a new one.",
        },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // Consume the token and update the password atomically.
    const updated = await db.$transaction(async (tx) => {
      const consumed = await tx.passwordResetToken.deleteMany({
        where: {
          id: resetToken.id,
          tokenHash,
          expiresAt: { gt: now },
        },
      });

      if (consumed.count !== 1) {
        return false;
      }

      await tx.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
      });

      // Invalidate any other outstanding reset links for this account.
      await tx.passwordResetToken.deleteMany({
        where: { email: resetToken.email },
      });

      return true;
    });

    if (!updated) {
      return NextResponse.json(
        {
          error:
            "This reset link is invalid or has expired. Request a new one.",
        },
        { status: 400 },
      );
    }

    return NextResponse.json({
      message: "Your password has been reset. You can now sign in.",
    });
  } catch (error) {
    console.error("Reset-password error:", error);

    return NextResponse.json(
      { error: "Unable to reset your password right now. Please try again." },
      { status: 500 },
    );
  }
}
