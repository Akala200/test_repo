"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post("https://api-sandbox.getyoba.com/api/v1/auth/forgot-password", { email });

      // Redirect to OTP page with email as a query param
      sessionStorage.setItem("email", email);
      router.push(`/otp`);
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 flex min-h-screen justify-center bg-white px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <h1 className="my-2 text-start text-xl font-bold text-[#021C02]">Forgot Password</h1>
        <p className="mb-6 text-start text-[#70747E]">
          Please enter the email address associated with your account, and we&apos;ll send an OTP to reset your password.
        </p>

        {/* Form */}
        <div className="mt-16">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@email.com"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Next Button */}
            <div className="mt-[70px]">
              <button
                type="submit"
                className={`w-full rounded-lg py-3 font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  loading ? "cursor-not-allowed bg-gray-400" : "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500"
                }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Next"}
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <p className="mt-[300px] text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-green-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
