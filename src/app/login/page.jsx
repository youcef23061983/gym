"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ArrowRight,
  LoaderCircle,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading("credentials");

    const formData = new FormData(e.currentTarget);
    const callbackUrl =
      new URLSearchParams(window.location.search).get("callbackUrl") || "/";

    try {
      const result = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password.");
        return;
      }

      window.location.assign(callbackUrl);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading("");
    }
  }
  async function handleOAuth(provider) {
    setLoading(provider);
    setError("");

    const callbackUrl =
      new URLSearchParams(window.location.search).get("callbackUrl") || "/";

    await signIn(provider, { callbackUrl });
  }

  const isLoading = Boolean(loading);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-14">
      <div className="w-full max-w-xl">
        {/* Logo */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-200">
            <LockKeyhole size={30} />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-black">
            Welcome back
          </h1>
          <p className="mt-3 text-base text-gray-600">
            Enter your credentials to access your account
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-9 shadow-2xl shadow-gray-200/60 sm:p-12">
          {/* OAuth */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              disabled={isLoading}
              onClick={() => handleOAuth("google")}
              className="flex h-14 items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white text-base font-semibold text-black transition hover:border-red-500 hover:bg-red-50 disabled:opacity-50"
            >
              {/* Keep your existing Google SVG here */}
              <svg viewBox="0 0 48 48" className="h-6 w-6">
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
              disabled={isLoading}
              onClick={() => handleOAuth("github")}
              className="flex h-14 items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white text-base font-semibold text-black transition hover:border-red-500 hover:bg-red-50 disabled:opacity-50"
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

          <div className="my-9 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm font-semibold text-red-600">
              OR CONTINUE WITH EMAIL
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

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
                  placeholder="name@example.com"
                  autoComplete="email"
                  required
                  className="h-14 w-full rounded-xl border border-gray-300 bg-white pl-12 pr-4 text-base text-black outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                />
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="text-base font-semibold text-black"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm font-semibold text-red-600 transition hover:text-red-800"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <LockKeyhole
                  size={21}
                  className="absolute left-4 top-4 text-red-600"
                />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="h-14 w-full rounded-xl border border-gray-300 bg-white pl-12 pr-14 text-base text-black outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-4 text-gray-500 transition hover:text-red-600"
                >
                  {showPassword ? <EyeOff size={21} /> : <Eye size={21} />}
                </button>
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
              disabled={isLoading}
              className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-red-600 text-base font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading === "credentials" ? (
                <LoaderCircle size={21} className="animate-spin" />
              ) : (
                <>
                  Sign in to account
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <p className="mt-9 text-center text-base text-gray-700">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-bold text-red-600 transition hover:text-red-800"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
