"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin() {
    setLoading(true);

    const res = await fetch(
      "/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    setLoading(false);

    if (res.ok) {
      router.push("/admin-blog");
      router.refresh();
      return;
    }

    alert("Username atau password salah");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-center mb-6">
          GARMENTO Login
        </h1>

        <div className="space-y-4">
          <input
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            placeholder="Username"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="
              w-full
              py-3
              rounded-xl
              bg-slate-900
              text-white
            "
          >
            {loading
              ? "Loading..."
              : "Login"}
          </button>
        </div>
      </div>
    </main>
  );
}