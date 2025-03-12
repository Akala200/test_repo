"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function USSDPage() {
  const router = useRouter();
  const [amount, setAmount] = useState("NGN 10,000.00");

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={() => router.back()} className="p-2">
          <ArrowLeft className="size-5 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold">USSD</h1>
      </div>

      {/* Subtitle */}
      <p className="text-md mt-12 text-gray-500">
        Enter the amount you’d like to fund your Yooba wallet with
      </p>

      {/* Input Section */}
      <div className="mt-6">
        <label className="text-sm font-medium text-black">Enter amount here</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-2 w-full rounded-lg border px-4 py-3 text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Next Button */}
      <button
        className="mt-12 w-full rounded-lg bg-green-400 py-3 text-lg font-semibold text-white shadow-md hover:bg-green-500"
        onClick={() => alert("Proceeding with USSD funding")}
      >
        Next
      </button>
    </div>
  );
}