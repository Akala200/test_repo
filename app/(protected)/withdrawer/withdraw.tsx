"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WithdrawPage() {
  const router = useRouter();
  const [amount, setAmount] = useState("20000.00");

  return (
    <div className="flex min-h-screen flex-col bg-white px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button onClick={() => router.back()}>
          <ArrowLeft className="size-5 text-gray-800" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Withdraw</h1>
      </div>

      {/* Subtitle */}
      <p className="mt-1 text-sm text-gray-500">Here’s a list of all your transactions made over time</p>

      {/* Transfer Details */}
      <div className="mt-[20%] rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
        {/* From Account */}
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-blue-600">
            <span className="text-sm font-semibold text-white">Y</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">From:</span>
            <span className="text-sm font-medium text-gray-900">Yoba Naira Wallet</span>
            <span className="text-xs text-gray-500">Balance: NGN 289,397.00</span>
          </div>
        </div>

        {/* Transfer Arrow */}
        <div className="my-2 h-6 border-l-2 border-gray-300"></div>

        {/* To Account */}
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-orange-600">
            <span className="text-sm font-semibold text-white">GTB</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">To:</span>
            <span className="text-sm font-medium text-gray-900">Guarantee Trust Bank</span>
            <span className="text-xs text-gray-500">023109928379</span>
          </div>
        </div>
      </div>

      {/* Amount Input */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="text"
          value={`NGN ${amount}`}
          onChange={(e) => setAmount(e.target.value.replace("NGN ", ""))}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-lg font-medium text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>

      {/* Processing Fee */}
      <p className="mt-2 text-xs text-gray-500">Processing fee: <span className="font-medium">NGN 50.00</span></p>

      {/* Withdraw Button */}
      <button
        onClick={() => alert("Withdrawal initiated")}
        className="mt-[80%] w-full rounded-lg bg-green-400 px-4 py-3 text-sm font-medium text-gray-900 shadow-md transition hover:bg-green-500"
      >
        Withdraw NGN {amount}
      </button>
    </div>
  );
}