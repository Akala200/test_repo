"use client";

import { ArrowLeft, CreditCard, Home, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import type { JSX } from "react/jsx-runtime";

export default function AddCardPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-white px-6 py-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={() => router.back()} className="p-2">
          <ArrowLeft className="size-6 text-gray-600" />
        </button>
        <h1 className="text-xl font-semibold">Link a New Card</h1>
      </div>

      {/* Subtitle */}
      <p className="mt-2 text-sm text-gray-500">Fund your wallet with your debit card</p>

      {/* Form */}
      <form className="mt-16 flex flex-col space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name on card</label>
          <input
            type="text"
            placeholder="John Doe"
            className="mt-2 w-full rounded-lg border border-gray-300 p-4 text-sm text-gray-700 focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            className="mt-2 w-full rounded-lg border border-gray-300 p-4 text-sm text-gray-700 focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div className="flex gap-6">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Exp</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="mt-2 w-full rounded-lg border border-gray-300 p-4 text-sm text-gray-700 focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">CVV</label>
            <input
              type="password"
              placeholder="***"
              className="mt-2 w-full rounded-lg border border-gray-300 p-4 text-sm text-gray-700 focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>
      </form>
              {/* Add Card Button */}
              <button
          type="submit"
          className="mt-[30%] w-full rounded-lg bg-green-500 px-6 py-4 text-base font-medium text-white shadow-md transition hover:bg-green-600 active:scale-95"
        >
          Add Card
        </button>
    </div>
  );
}