"use client";

import { ChevronDown, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LinkBankAccountPage() {
  const router = useRouter();
  const [accountNumber, setAccountNumber] = useState("");
  const [bank, setBank] = useState("");

  return (
    <div className="flex min-h-screen flex-col bg-white px-4 pt-4">
      {/* Header */}
      <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-900">
        <ArrowLeft className="size-5" />
        <h1 className="text-lg font-semibold">Link a Bank Account</h1>
      </button>

      <p className="mt-[10%] text-sm text-gray-500">
        Please link a bank account that matches the name on your Yooba profile
      </p>

      {/* Account Number Input */}
      <div className="mt-[20%]">
        <label className="mb-1 block text-sm font-medium text-black">Account Number</label>
        <div className="relative">
          <input
            type="text"
            maxLength={10}
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Enter account number"
          />
          <span className="absolute right-3 top-3 text-sm text-gray-400">{accountNumber.length}/10</span>
        </div>
      </div>

      {/* Bank Selection */}
      <div className="mt-[5%]">
        <label className="mb-1 block text-sm font-medium text-black">Bank</label>
        <div className="relative">
          <select
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="w-full appearance-none rounded-lg border bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="" disabled>
              Select your bank
            </option>
            <option value="access">Access Bank</option>
            <option value="gtb">GTBank</option>
            <option value="zenith">Zenith Bank</option>
          </select>
          <ChevronDown className="absolute right-3 top-3 size-5 text-gray-500" />
        </div>
      </div>

      {/* Link Account Button */}
      <button
        disabled={!accountNumber || !bank}
        className="mt-[50%] w-full rounded-lg bg-[#6DE96D] px-4 py-3 text-sm font-medium text-gray-900 shadow-md transition hover:bg-green-500"
      >
        Link Account
      </button>
    </div>
  );
}
