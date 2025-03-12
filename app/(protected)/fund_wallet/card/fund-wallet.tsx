"use client";

import { ArrowLeft, CreditCard, Home, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CardFundingPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-white px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={() => router.back()} className="p-2">
          <ArrowLeft className="size-5 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold">Card</h1>
      </div>

      {/* Subtitle */}
      <p className="mt-1 text-sm text-gray-500">Fund your wallet with your debit card</p>

      {/* Card Info */}
      <div className="mt-[20%] rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <img src="/master.png" alt="Card" className="size-8" />
          <div>
            <p className="text-sm font-medium text-gray-700">From: <span className="font-semibold">xxxxxxxxxxxx9013</span></p>
            <p className="text-xs text-gray-500">Debit Card</p>
          </div>
        </div>

        <div className="ml-4 mt-3 border-l-2 border-gray-300 pl-4">
          <div className="flex items-center gap-3">
            <img src="/yom.png" alt="Wallet" className="size-8" />
            <div>
              <p className="text-sm font-medium text-gray-700">To: <span className="font-semibold text-green-600">Yoba Naira Wallet</span></p>
              <p className="text-xs text-gray-500">Balance: NGN 289,397.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Amount Input */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <div className="relative mt-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">NGN</span>
          <input
            type="text"
            placeholder="0.00"
            className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 text-sm text-gray-700 focus:border-green-500 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Processing Fee */}
      <p className="mt-2 text-xs text-gray-500">Processing fee: <span className="font-semibold">NGN 50.00</span></p>

      {/* Add NGN Button */}
      <button
        type="submit"
        className="mt-[80%] w-full rounded-lg bg-green-300 px-4 py-3 text-sm font-medium text-gray-700 shadow-md transition disabled:cursor-not-allowed disabled:opacity-50"
        disabled
      >
        Add NGN
      </button>
    </div>
  );
}