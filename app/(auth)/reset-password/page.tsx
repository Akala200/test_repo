"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
  const router = useRouter();
  const storedEmail = sessionStorage.getItem("email") || "";
  const storedOtp = sessionStorage.getItem("otp") || "";
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError("Please enter both passwords.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(
        "https://api-sandbox.getyoba.com/api/v1/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Accept": "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: storedEmail,
            password,
            passwordConfirmation: confirmPassword,
            resetOtp: storedOtp,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        router.push("/login"); // Redirect to login page
      } else {
        setError(data.message || "Failed to reset password.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen justify-center bg-white px-6">
      <div className="mt-16 w-full max-w-md">
        {/* Header */}
        <h1 className="my-2 text-start text-xl font-bold text-[#021C02]">
          Reset Password
        </h1>
        <p className="mb-6 text-start text-[#70747E]">
          Please enter your new password.
        </p>

        {/* Form */}
        <form onSubmit={handleResetPassword} className="space-y-6">
          {/* New Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-sm text-red-500">{error}</p>}

          {/* Submit Button */}
          <div className="mt-[50px]">
            <button
              type="submit"
              className="w-full rounded-lg bg-green-500 py-3 font-medium text-white shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
