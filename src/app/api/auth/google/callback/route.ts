import axios from "axios";
import jwt from "jsonwebtoken";
import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/userModels";

import { NextResponse } from "next/server";
import { URL } from "url";
export async function GET(req: Request) {
  await connect();

  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  try {
    // 1. Exchange code for tokens
    const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      grant_type: "authorization_code",
    });

    const { access_token, refresh_token } = tokenRes.data;

    // 2. Get user info
    const userInfo = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    const { email, name, id, picture } = userInfo.data;

    // 3. Find or create user
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        email,
        username: name,
        role: "OWNER",
        provider: "GOOGLE",
        googleid: id,
        profilePic: picture,
      });
    }

    // 4. Save tokens (important for YouTube)
    user.accesstoken = access_token;
    if (refresh_token) {
      user.refreshtoken = refresh_token;
    }
    await user.save();

    // 5. Create JWT session (SAME as editor)
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.TOKEN_SECRET!,
      { expiresIn: "7d" },
    );

    const response = NextResponse.redirect(new URL("/profile", req.url));
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Google login failed" },
      { status: 500 },
    );
  }
}
