"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state

    // Basic validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://api-sandbox.getyoba.com/api/v1/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      // Store token in session storage (or localStorage)
      sessionStorage.setItem("authToken", response?.data?.data?.accessToken);
      sessionStorage.setItem("user", response?.data?.data?.user);

      // Redirect to dashboard on success
      router.push("/dashboard");
    } catch (err: any) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || "Invalid email or password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Progress Bar */}
      <div className="mt-10 flex min-h-screen justify-center bg-white px-6">
        <div className="mt-4 w-full max-w-md">
          {/* Header */}
          <h1 className="my-2 text-start text-xl font-bold text-[#021C02]">
            Log In
          </h1>
          <p className="mb-6 text-start text-[#70747E]">
            Welcome back to Yoba! Let&apos;s get started on your journey to
            borderless spending.
          </p>

          {/* Form */}
          <div className="mt-16">
            <form onSubmit={handleSubmit}>
              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="johndoe@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>

              {/* Password */}
              <div className="mt-8">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="mt-5">
                  <a href="/forgot-password" className="mt-10 text-green-500 hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>

              {/* Error Message */}
              {error && <p className="text-sm text-red-500">{error}</p>}

              {/* Submit Button */}
              <div className="mt-[120px]">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full rounded-lg py-3 font-medium text-white shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                    ${loading ? "cursor-not-allowed bg-gray-400" : "bg-green-500 hover:bg-green-600"}
                  `}
                >
                  {loading ? "Logging in..." : "Log In"}
                </button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <p className="mt-[300px] text-center text-gray-600">
            New user?{" "}
            <a href="/register" className="text-green-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
