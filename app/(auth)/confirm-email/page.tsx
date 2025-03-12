"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";

const ConfirmEmail = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(180); // 3-minute timer
  const [resending, setResending] = useState(false);

  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  // Handle OTP input change
  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  // Handle OTP verification
  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      await axios.post("https://api-sandbox.getyoba.com/api/v1/auth/verify", {
        email,
        otp: otp.join(""),
      });
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Invalid OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Resend OTP
  const handleResendOtp = async () => {
    if (resendTimer > 0) return;

    setResending(true);
    setError("");

    try {
      await axios.post("https://api-sandbox.getyoba.com/api/v1/auth/resend-otp", { email });
      setResendTimer(180); // Reset timer to 3 minutes
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to resend OTP. Try again.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div>
      {/* Back Button */}
      <div className="flex items-center px-6 pt-10">
        <ArrowLeft
          size={24}
          className="cursor-pointer text-gray-700 hover:text-black"
          onClick={() => (window.history.length > 1 ? router.back() : router.push("/"))}
        />
      </div>

      {/* Progress Bar */}
      <div className="mt-5 px-6 pt-4">
        <div className="mb-4 flex w-full justify-start">
          <div className="h-1 w-[22px] rounded-full bg-green-500"></div>
          <div className="mx-1 h-1 w-[22px] rounded-full bg-green-500"></div>
          <div className="mx-1 h-1 w-[22px] rounded-full bg-gray-300"></div>
          <div className="h-1 w-[22px] rounded-full bg-gray-300"></div>
        </div>
      </div>

      <div className="flex min-h-screen justify-center bg-white px-6">
        <div className="w-full max-w-md">
          {/* Header */}
          <h1 className="my-2 text-start text-xl font-bold text-[#021C02]">
            Confirm your email address
          </h1>
          <p className="mb-6 text-start text-[#70747E]">
            We sent an OTP to your registered email. Enter the code to verify your account.
          </p>

          {/* Form */}
          <div className="mt-16">
            {error && <p className="mb-2 text-start text-red-500">{error}</p>}

            {/* OTP Input */}
            <div className="mb-4 flex justify-start space-x-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="size-12 rounded-lg border border-gray-300 text-center text-lg focus:border-green-500 focus:ring-green-500"
                />
              ))}
            </div>

            {/* Resend OTP Timer */}
            <p className="mb-6 text-start text-gray-600">
              Didn&apos;t get a code?{" "}
              {resendTimer > 0 ? (
                <span className="text-gray-500">Resend in {Math.floor(resendTimer / 60)}:{(resendTimer % 60).toString().padStart(2, "0")}</span>
              ) : (
                <span
                  onClick={handleResendOtp}
                  className="cursor-pointer text-green-500 hover:underline"
                >
                  {resending ? "Resending..." : "Resend OTP"}
                </span>
              )}
            </p>

            {/* Submit Button */}
            <div className="mt-[100px]">
            <button
  type="button"
  onClick={handleSubmit}
  className="w-full rounded-lg bg-[#1AAD1A] py-3 font-medium text-[#062D08] shadow-[4px_4px_8px_rgba(0,0,0,0.2)] hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
  disabled={loading}
>
  {loading ? "Verifying..." : "Next"}
</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
