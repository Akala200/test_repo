"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BankTransferPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-white px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={() => router.back()} className="p-2">
          <ArrowLeft className="size-5 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold">Bank Transfer</h1>
      </div>

      {/* Content */}
      <div className="mt-32 flex flex-col items-center text-center">
        {/* Bank Icon */}
        <div className="flex items-center justify-center rounded p-6">
          <Image
            src="/house.png"
            alt="Bank Icon"
            width={144}
            height={144}
            className="rounded"
          />
        </div>

        {/* Title */}
        <h2 className="mt-6 text-lg font-bold text-gray-800">
          Ready to fund your Yoba wallet?
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-gray-500">
          Generate your unique account details now for <br /> quick and easy deposits.
        </p>

        {/* Generate Account Button */}
        <button className="mt-[30%] w-full rounded-lg bg-green-500 px-4 py-3 text-sm font-medium text-white shadow-md transition hover:bg-green-600 active:scale-95">
          Generate Account
        </button>
      </div>
    </div>
  );
}
