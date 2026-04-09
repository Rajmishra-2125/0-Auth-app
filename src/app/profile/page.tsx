"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Fetch the user data from the API
    axios.get("/api/user/me")
      .then(res => {
        if (res.data && res.data.data) {
          setUser(res.data.data);
        }
      })
      .catch(err => console.error("Error fetching user data:", err));
  }, []);

  const logout = async () => {
    try {
      await axios.get("/api/user/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-10 dark:bg-black">
      <main className="w-full max-w-lg rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-lg shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/20">
        <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">Profile</h1>
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          Welcome to your profile! You have successfully logged in.
        </p>
        
        {user ? (
           <div className="mb-8 rounded-lg bg-zinc-100 p-4 dark:bg-zinc-900">
             <p className="font-semibold text-zinc-800 dark:text-zinc-200">
               {user.username || user.name || "User"}
             </p>
             <p className="text-sm text-zinc-500 dark:text-zinc-400">
               {user.email}
             </p>
           </div>
        ) : (
          <div className="mb-8 text-sm text-zinc-500">Loading user info...</div>
        )}

        <button
          onClick={logout}
          className="rounded-lg bg-red-600 px-8 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500"
        >
          Logout
        </button>
      </main>
    </div>
  );
}
