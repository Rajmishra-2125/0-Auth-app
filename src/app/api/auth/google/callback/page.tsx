interface CallbackPageProps {
  searchParams: {
    code?: string;
    error?: string;
    error_description?: string;
  };
}

export default function GoogleCallbackPage({ searchParams }: CallbackPageProps) {
  const { code, error, error_description } = searchParams;

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-50">
      <div className="mx-auto w-full max-w-xl rounded-3xl border border-zinc-800 bg-zinc-900 p-10 shadow-xl shadow-black/30">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-semibold">Google OAuth Response</h1>
          {error ? (
            <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-6 text-left text-sm text-rose-100">
              <p className="font-semibold text-rose-200">Authentication failed</p>
              <p>{error}</p>
              {error_description ? <p>{error_description}</p> : null}
            </div>
          ) : code ? (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-left text-sm text-emerald-100">
              <p className="font-semibold text-emerald-200">OAuth code received</p>
              <p className="wrap-break-word text-xs text-zinc-200">{code}</p>
              <p className="mt-4 text-zinc-400">
                This app currently shows the authorization code returned by Google. Add a server-side token exchange to finish sign-in.
              </p>
            </div>
          ) : (
            <p className="rounded-2xl border border-zinc-700 bg-zinc-950 p-6 text-sm text-zinc-300">
              Waiting for Google to return an authorization code.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
