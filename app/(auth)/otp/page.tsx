"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const OTP = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState("");

  // Handle OTP input change
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  // Handle OTP form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    sessionStorage.setItem("otp", enteredOtp); // Save OTP in session storage
    router.push("/reset-password"); // Redirect to reset password page
  };

  return (
    <div className="flex min-h-screen justify-center bg-white px-6">
      <div className="mt-12 w-full max-w-md">
        {/* Header */}
        <h1 className="my-2 text-start text-xl font-bold text-[#021C02]">
          Enter OTP
        </h1>
        <p className="mb-6 text-start text-[#70747E]">
          Please enter the OTP sent to your mail below to proceed with
          resetting your password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-20">
          {/* OTP Input */}
          <div className="mb-4 flex justify-start space-x-2">
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

          {/* Error Message */}
          {error && <p className="text-sm text-red-500">{error}</p>}

          {/* Next Button */}
          <div className="mt-[150px]">
            <button
              type="submit"
              className="w-full rounded-lg bg-green-500 py-3 font-medium text-white shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Next
            </button>
          </div>
        </form>

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

export default OTP;
