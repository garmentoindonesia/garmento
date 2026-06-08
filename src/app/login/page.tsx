"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  async function handleLogin() {
    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (res.ok) {
        router.push("/admin-blog");
        router.refresh();
        return;
      }

      alert("Username atau password salah");
    } catch {
      alert("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center px-5">
      <div
        className="
          w-full
          max-w-md
          bg-white
          rounded-3xl
          border
          border-slate-200
          shadow-sm
          p-8
        "
      >
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/logoheadernavy.png"
              alt="GARMENTO"
              width={220}
              height={60}
              priority
            />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Login untuk mengakses dashboard blog.
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            placeholder="Username"
            autoComplete="username"
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              px-4
              py-3
              outline-none
              transition
              focus:border-slate-900
              focus:ring-4
              focus:ring-slate-200
            "
          />

          <div className="relative">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Password"
              autoComplete="current-password"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleLogin();
                }
              }}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                py-3
                pr-12
                outline-none
                transition
                focus:border-slate-900
                focus:ring-4
                focus:ring-slate-200
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                cursor-pointer
                opacity-70
                hover:opacity-100
                transition
              "
            >
              <Image
                src={
                  showPassword
                    ? "/matatutup.svg"
                    : "/matabuka.svg"
                }
                alt="Toggle Password"
                width={20}
                height={20}
              />
            </button>
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="
              w-full
              py-3
              rounded-xl
              bg-slate-900
              text-white
              font-medium
              cursor-pointer
              transition
              hover:bg-slate-800
              disabled:opacity-60
              disabled:cursor-not-allowed
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