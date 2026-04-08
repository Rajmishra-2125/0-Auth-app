import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const clientId = process.env.FACEBOOK_APP_ID;
  if (!clientId) {
    return NextResponse.json(
      { error: "Missing FACEBOOK_APP_ID environment variable." },
      { status: 500 }
    );
  }

  const forwardedProto = request.headers.get("x-forwarded-proto") ?? "http";
  const host = request.headers.get("host") ?? "localhost:3000";
  const origin = process.env.NEXT_PUBLIC_APP_URL ?? `${forwardedProto}://${host}`;
  const redirectUri = `${origin}/api/auth/facebook/callback`;

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "email,public_profile",
  });

  return NextResponse.redirect(
    `https://www.facebook.com/v21.0/dialog/oauth?${params.toString()}`
  );
}
