"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  LoaderCircle,
  Github,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const passwordValid = password.length >= 8;

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading("register");

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Unable to create your account.");
        return;
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        router.push("/login?registered=true");
        return;
      }

      router.push("/shop");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading("");
    }
  }

  async function handleOAuth(provider) {
    setError("");
    setLoading(provider);

    try {
      await signIn(provider, {
        callbackUrl: "/shop",
      });
    } catch {
      setError("Unable to connect. Please try again.");
      setLoading("");
    }
  }

  const busy = Boolean(loading);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-12 sm:px-6">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-red-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gray-100 blur-3xl"
      />

      <div className="relative w-full max-w-xl">
        {/* Brand */}
        <Link href="/" className="mb-8 flex items-center justify-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-200">
            <ShoppingBag size={28} strokeWidth={2.2} />
          </span>
          <span className="text-2xl font-bold tracking-tight text-black">
            YourStore
          </span>
        </Link>

        {/* Registration card */}
        <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-2xl shadow-gray-200/60 sm:p-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Create your account
            </h1>
            <p className="mt-3 text-base leading-6 text-gray-600">
              Join us and get started today.
            </p>
          </div>

          {/* Social sign-up */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              disabled={busy}
              onClick={() => handleOAuth("google")}
              className="flex h-14 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white text-base font-semibold text-black transition hover:border-red-500 hover:bg-red-50 disabled:opacity-50"
            >
              <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6C44.4 38.03 46.98 31.89 46.98 24.55z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.2A23.8 23.8 0 0 0 0 24c0 3.87.93 7.51 2.56 10.78z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.17 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                />
              </svg>
              Google
            </button>

            <button
              type="button"
              disabled={busy}
              onClick={() => handleOAuth("github")}
              className="flex h-14 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white text-base font-semibold text-black transition hover:border-red-500 hover:bg-red-50 disabled:opacity-50"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.02 3.14 1.54.1-.72.39-1.22.7-1.5-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.22-5.08 5.5.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              GitHub
            </button>
          </div>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs font-semibold tracking-wider text-red-600">
              OR SIGN UP WITH EMAIL
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full name */}
            <div>
              <label
                htmlFor="name"
                className="mb-3 block text-base font-semibold text-black"
              >
                Full name
              </label>
              <div className="relative">
                <UserRound
                  size={21}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600"
                />
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  autoComplete="name"
                  minLength={2}
                  maxLength={80}
                  required
                  disabled={busy}
                  className="h-14 w-full rounded-xl border border-gray-300 bg-white pl-12 pr-4 text-base text-black outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100 disabled:bg-gray-50"
                />
              </div>
            </div>

            {/* Email */}
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  disabled={busy}
                  className="h-14 w-full rounded-xl border border-gray-300 bg-white pl-12 pr-4 text-base text-black outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100 disabled:bg-gray-50"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-3 block text-base font-semibold text-black"
              >
                Password
              </label>
              <div className="relative">
                <LockKeyhole
                  size={21}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600"
                />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  minLength={8}
                  maxLength={128}
                  required
                  disabled={busy}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-14 w-full rounded-xl border border-gray-300 bg-white pl-12 pr-14 text-base text-black outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100 disabled:bg-gray-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  disabled={busy}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-red-600"
                >
                  {showPassword ? <EyeOff size={21} /> : <Eye size={21} />}
                </button>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <div className="flex flex-1 gap-1.5">
                  {[1, 2, 3, 4].map((bar) => (
                    <div
                      key={bar}
                      className={`h-1.5 flex-1 rounded-full ${
                        password.length >= 8
                          ? "bg-red-600"
                          : password.length > 0
                            ? "bg-red-300"
                            : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span
                  className={`text-xs ${passwordValid ? "font-semibold text-red-600" : "text-gray-500"}`}
                >
                  {passwordValid
                    ? "Password meets minimum"
                    : "At least 8 characters"}
                </span>
              </div>
            </div>

            {/* Error */}
            {error && (
              <p
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
              >
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={busy || !passwordValid}
              className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-4 text-base font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading === "register" ? (
                <>
                  <LoaderCircle size={21} className="animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  Create account
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-base text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-red-600 transition hover:text-red-800"
            >
              Sign in
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
