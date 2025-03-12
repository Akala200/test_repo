"use client";

import { ArrowLeft, CreditCard, Home, Settings } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LinkCardPage() {
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

      {/* Content */}
      <div className="mt-16 flex flex-col items-center text-center">
        {/* Card Icon */}
        <div className="mt-11 flex items-center justify-center rounded p-6">
          <Image
            src="/credit.png"
            alt="Bank Icon"
            width={154}
            height={154}
            className="rounded"
          />
        </div>

        {/* Title */}
        <h2 className="mt-12 text-lg font-medium text-gray-900">No linked cards yet</h2>

        {/* Subtitle */}
        <p className="mt-2 w-[300px] text-sm text-gray-500">
          Please verify your identity to start carrying out transactions.
        </p>

        {/* Link a Card Button */}
        <button className="mt-12 w-full rounded-lg bg-green-500 px-4 py-3 text-sm font-medium text-white shadow-md transition hover:bg-green-600 active:scale-95">
          Link a Card
        </button>
      </div>
    </div>
  );
}
