"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function UploadBVNPage() {
  const router = useRouter();
  const [bvn, setBvn] = useState("");

  const handleSubmit = () => {
    if (bvn.length === 11) {
      alert("BVN Submitted Successfully!"); // Replace with actual API call
      router.push("/account/upgrade/tier-1"); // Redirect after submission
    } else {
      alert("Please enter a valid 11-digit BVN.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 border-b px-4 py-3">
        <button onClick={() => router.back()} className="text-black">
          <ArrowLeft className="size-5" />
        </button>
        <h1 className="text-lg font-semibold">Verify your Identity</h1>
      </div>

      {/* Description */}
      <div className="p-4 text-sm text-gray-700">
        Verifying your identity helps us protect your account from unauthorized
        access and ensure the safety of your funds.
      </div>

      {/* BVN Input */}
      <div className="space-y-2 px-4">
        <label htmlFor="bvn" className="text-sm font-medium text-gray-800">
          Bank Verification Number (BVN)
        </label>
        <input
          id="bvn"
          type="number"
          value={bvn}
          onChange={(e) => setBvn(e.target.value.slice(0, 11))}
          className="w-full rounded-lg border p-3 focus:ring focus:ring-green-500"
          placeholder="Enter your BVN"
        />
        <p className="text-xs text-gray-500">{bvn.length}/11</p>

        <a href="#" className="text-sm text-green-600 underline">
          Why do we need your BVN?
        </a>
      </div>

      {/* Submit Button */}
      <div className="mt-6 px-4">
        <button
          onClick={handleSubmit}
          disabled={bvn.length !== 11}
          className={`w-full rounded-lg p-4 text-lg font-semibold text-white ${
            bvn.length === 11 ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
