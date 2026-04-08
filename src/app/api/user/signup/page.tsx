"use client";

import Link from "next/link";
import { FormEvent } from "react";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 533.5 544.3" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M533.5 278.4c0-18.2-1.5-36-4.3-53.2H272.1v100.7h147.1c-6.3 34-25.5 62.8-54.4 82.1v68.2h87.8c51.4-47.4 81-117.3 81-197.8z"
      />
      <path
        fill="#34A853"
        d="M272.1 544.3c73.7 0 135.5-24.4 180.7-66.3l-87.8-68.2c-24.4 16.3-55.7 26-92.9 26-71.5 0-132.2-48.3-153.9-113.2H27.6v71.1c45.5 90.8 139.5 150.6 244.5 150.6z"
      />
      <path
        fill="#FBBC05"
        d="M118.2 322.4c-10.2-30.6-10.2-63.5 0-94.1V157.2H27.6c-39.4 78.9-39.4 172 0 250.9l90.6-85.7z"
      />
      <path
        fill="#EA4335"
        d="M272.1 107.7c39.9-.6 78.3 14.2 107.4 40.8l80.5-80.5C407.4 24.7 344.9-0.2 272.1 0 166.2 0 72.2 59.8 27.6 150.6l90.6 71.1c21.7-64.9 82.4-113.2 153.9-113.2z"
      />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

export default function SignupPage() {
  function handleSignup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-100 to-zinc-200 px-4 py-12 text-zinc-950 dark:from-zinc-950 dark:to-black dark:text-zinc-50 sm:px-6">
      <div className="mx-auto w-full max-w-100 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-xl shadow-zinc-300/40 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/40">
        <div className="border-b border-zinc-100 bg-zinc-50/80 px-8 py-8 text-center dark:border-zinc-800 dark:bg-zinc-900/80">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            O-Auth App
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Create account
          </h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Join with email or sign up with a social account.
          </p>
        </div>

        <div className="px-8 py-8">
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-sm outline-none ring-zinc-400 placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-400/30 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-500/30"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-sm outline-none ring-zinc-400 placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-400/30 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-500/30"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="••••••••"
                minLength={8}
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-sm outline-none ring-zinc-400 placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-400/30 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-500/30"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                placeholder="••••••••"
                minLength={8}
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-sm outline-none ring-zinc-400 placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-400/30 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-500/30"
              />
            </div>
            <label className="flex cursor-pointer items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <input
                type="checkbox"
                name="terms"
                required
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-400 dark:border-zinc-600 dark:bg-zinc-950 dark:focus:ring-zinc-500"
              />
              <span>
                I agree to the{" "}
                <a
                  href="#"
                  className="font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-white"
                >
                  Terms
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-white"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>
            <button
              type="submit"
              className="w-full rounded-lg bg-zinc-900 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              Create account
            </button>
          </form>

          <div className="relative my-8">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden
            >
              <div className="w-full border-t border-zinc-200 dark:border-zinc-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 font-medium text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <a
              href="/api/auth/google"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white dark:bg-zinc-900">
                <GoogleIcon className="h-5 w-5" />
              </span>
              Continue with Google
            </a>
            <a
              href="/api/auth/facebook"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-200 bg-[#1877F2] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#166FE5] dark:border-[#1877F2]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
                <FacebookIcon className="h-5 w-5" />
              </span>
              Continue with Facebook
            </a>
          </div>

          <p className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
            Already have an account?{" "}
            <Link
              href="/api/user/login"
              className="font-semibold text-zinc-900 underline underline-offset-2 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-200"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
