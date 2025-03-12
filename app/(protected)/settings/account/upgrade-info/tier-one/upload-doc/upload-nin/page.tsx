"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function UploadNINPage() {
  const router = useRouter();
  const [nin, setNin] = useState("");

  const handleSubmit = () => {
    if (nin.length === 11) {
      alert("NIN Submitted Successfully!"); // Replace with actual API call
      router.push("/account/upgrade/tier-1"); // Redirect after submission
    } else {
      alert("Please enter a valid 11-digit NIN.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 border-b px-4 py-3">
        <button onClick={() => router.back()} className="text-black">
          <ArrowLeft className="size-5" />
        </button>
        <h1 className="text-lg font-semibold">Step 2 - NIN</h1>
      </div>

      {/* Description */}
      <div className="p-4 text-sm text-gray-700">
        Verifying your identity helps us protect your account from unauthorized
        access and ensure the safety of your funds.
      </div>

      {/* NIN Input */}
      <div className="space-y-2 px-4">
        <label htmlFor="nin" className="text-sm font-medium text-gray-800">
          National Identity Number (NIN)
        </label>
        <input
          id="nin"
          type="number"
          value={nin}
          onChange={(e) => setNin(e.target.value.slice(0, 11))}
          className="w-full rounded-lg border p-3 focus:ring focus:ring-green-500"
          placeholder="Enter your NIN"
        />
        <p className="text-xs text-gray-500">{nin.length}/11</p>

        <a href="#" className="text-sm text-green-600 underline">
          Why do we need your NIN?
        </a>
      </div>

      {/* Submit Button */}
      <div className="mt-6 px-4">
        <button
          onClick={handleSubmit}
          disabled={nin.length !== 11}
          className={`w-full rounded-lg p-4 text-lg font-semibold text-white ${
            nin.length === 11 ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
