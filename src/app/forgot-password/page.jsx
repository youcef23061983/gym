"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  LockKeyhole,
  LoaderCircle,
  CheckCircle2,
} from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to process your request. Please try again.",
        );
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-14">
      <div className="w-full max-w-xl">
        <div className="mb-10 text-center">
          <Link
            href="/login"
            aria-label="Back to login"
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-200"
          >
            <LockKeyhole size={30} />
          </Link>

          <h1 className="text-4xl font-bold tracking-tight text-black">
            Forgot your password?
          </h1>

          <p className="mt-3 text-base leading-7 text-gray-600">
            No worries. Enter the email address associated with your account and
            we’ll send you instructions to reset your password.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-9 shadow-2xl shadow-gray-200/60 sm:p-12">
          {success ? (
            <div className="py-5 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-600">
                <CheckCircle2 size={34} />
              </div>

              <h2 className="text-2xl font-bold text-black">
                Check your inbox
              </h2>

              <p className="mt-4 text-base leading-7 text-gray-600">
                If an account exists for{" "}
                <span className="font-semibold text-black">{email}</span>,
                you’ll receive instructions to reset your password.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSuccess(false);
                  setError("");
                }}
                className="mt-7 text-base font-semibold text-red-600 transition hover:text-red-800"
              >
                Try another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-semibold text-black"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={21}
                    className="absolute left-4 top-4 text-red-600"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    autoComplete="email"
                    required
                    className="h-14 w-full rounded-xl border border-gray-300 bg-white pl-12 pr-4 text-base text-black outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                  />
                </div>
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-red-600 text-base font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <LoaderCircle size={21} className="animate-spin" />
                    Sending instructions...
                  </>
                ) : (
                  <>
                    Send reset instructions
                    <Mail size={20} />
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-9 border-t border-gray-200 pt-7">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 text-base font-semibold text-black transition hover:text-red-600"
            >
              <ArrowLeft size={19} />
              Back to sign in
            </Link>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Need help? Contact our support team.
        </p>
      </div>
    </main>
  );
}
