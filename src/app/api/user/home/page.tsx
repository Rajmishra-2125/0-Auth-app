import Link from "next/link";

export default function UserHomePage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/25 via-sky-500/20 to-fuchsia-500/25 blur-3xl dark:from-indigo-500/20 dark:via-sky-500/15 dark:to-fuchsia-500/20" />
        <div className="absolute -bottom-28 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-emerald-500/15 via-cyan-500/15 to-indigo-500/15 blur-3xl dark:from-emerald-500/10 dark:via-cyan-500/10 dark:to-indigo-500/10" />
      </div>

      <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/75 backdrop-blur dark:border-zinc-800/70 dark:bg-black/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/api/user/home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900">
              O
            </span>
            <span className="text-sm font-semibold tracking-tight">O-Auth App</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-zinc-600 dark:text-zinc-300 md:flex">
            <a className="hover:text-zinc-900 dark:hover:text-white" href="#features">
              Features
            </a>
            <a className="hover:text-zinc-900 dark:hover:text-white" href="#security">
              Security
            </a>
            <a className="hover:text-zinc-900 dark:hover:text-white" href="#developers">
              Developers
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/api/user/login"
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900 sm:inline-flex"
            >
              Sign in
            </Link>
            <Link
              href="/api/user/signup"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6">
        <section className="pt-16 pb-14 sm:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-700 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-black/40 dark:text-zinc-200 dark:shadow-black/30">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Modern auth starter
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                Authentication your users actually trust.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
                Ship login, social sign-in, and secure sessions with a clean UI and a
                developer-friendly flow. Designed like a classic auth provider landing page,
                but tailored to your app.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/api/user/signup"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Get started
                </Link>
                <Link
                  href="/api/user/login"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
                >
                  View login
                </Link>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 sm:ml-2">
                  Google + Facebook buttons included.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-500" />
                  OAuth-ready routes
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-500" />
                  Tailwind UI
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  Dark mode
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-xl shadow-zinc-200/40 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60 dark:shadow-black/30">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
                    Sign-in preview
                  </p>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Ready
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <div className="h-4 w-20 rounded bg-zinc-200/80 dark:bg-zinc-800" />
                    <div className="h-11 w-full rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-24 rounded bg-zinc-200/80 dark:bg-zinc-800" />
                    <div className="h-11 w-full rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-28 rounded bg-zinc-200/80 dark:bg-zinc-800" />
                    <div className="h-4 w-24 rounded bg-zinc-200/60 dark:bg-zinc-800/80" />
                  </div>
                  <div className="h-11 w-full rounded-xl bg-zinc-900 dark:bg-white" />
                  <div className="relative py-3">
                    <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
                      Or continue with
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="h-11 rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900" />
                    <div className="h-11 rounded-xl bg-[#1877F2]" />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 hidden h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl lg:block" />
            </div>
          </div>

          <div className="mt-14 border-t border-zinc-200/70 pt-10 dark:border-zinc-800/70">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Trusted patterns
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400 sm:grid-cols-4">
              {["Teams", "Startups", "Students", "Enterprises"].map((label) => (
                <div
                  key={label}
                  className="flex items-center justify-center rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950/40"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                Everything you need to start
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                A clean UI, social buttons, and routes to kick off OAuth. Extend it with
                token exchange + session cookies when you’re ready.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950/40 dark:shadow-black/20">
              <p className="text-sm font-semibold">Social login</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Google and Facebook OAuth buttons wired to your API routes.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                `/api/auth/*`
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950/40 dark:shadow-black/20">
              <p className="text-sm font-semibold">Classic forms</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Login + signup pages styled like a modern identity platform.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-fuchsia-500" />
                Tailwind + dark mode
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950/40 dark:shadow-black/20">
              <p className="text-sm font-semibold">App Router friendly</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Works with Next.js App Router routing and server routes.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Next.js 16
              </div>
            </div>
          </div>
        </section>

        <section id="security" className="pb-20">
          <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-8 dark:border-zinc-800 dark:from-zinc-950 dark:to-black sm:p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                  Security-first defaults
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  You already have redirect-based OAuth routes. Next steps are token
                  exchange and setting secure, HTTP-only session cookies.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Redirect URIs", desc: "Explicit callback endpoints." },
                  { title: "Environment vars", desc: "Client IDs live in `.env`." },
                  { title: "Scoped access", desc: "Request only needed scopes." },
                  { title: "Extensible", desc: "Add PKCE + sessions next." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-zinc-200 bg-white/70 p-5 dark:border-zinc-800 dark:bg-zinc-950/40"
                  >
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="developers" className="pb-24">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-zinc-200 bg-white/70 p-8 dark:border-zinc-800 dark:bg-zinc-950/40 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                Ready to try it?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Jump into signup, or head straight to the login page to test Google/Facebook
                redirects.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/api/user/signup"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 sm:w-auto"
              >
                Create account
              </Link>
              <Link
                href="/api/user/login"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900 sm:w-auto"
              >
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200/70 py-10 text-sm text-zinc-500 dark:border-zinc-800/70 dark:text-zinc-400">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">© {new Date().getFullYear()} O-Auth App</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link className="hover:text-zinc-900 dark:hover:text-white" href="/api/user/home">
              Home
            </Link>
            <Link className="hover:text-zinc-900 dark:hover:text-white" href="/api/user/login">
              Login
            </Link>
            <Link className="hover:text-zinc-900 dark:hover:text-white" href="/api/user/signup">
              Signup
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
