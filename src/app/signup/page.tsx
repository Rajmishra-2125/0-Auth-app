"use client";

import Link from "next/link";

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

export default function SignupPage() {
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
            Join with a social account.
          </p>
        </div>

        <div className="px-8 py-8">
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
          </div>

          <p className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
            Already have an account?{" "}
            <Link
              href="/login"
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
