"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TransactionCompletePage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      {/* Success Icon */}
      <div className="mt[40%]">
        <Image src="/check.png" alt="Wallet" width={128} height={128} />
      </div>

      {/* Title */}
      <h1 className="mt-12 text-lg font-semibold text-gray-900">
        Transaction Complete
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-center text-sm text-gray-500">
        You&lsquo;ve successfully added{" "}
        <span className="font-medium text-gray-800">NGN 123,000.00</span> to
        your Yobaa wallet
      </p>

      {/* Okay Button */}
      <button
        onClick={() => router.push("/")}
        className="mt-[60%] w-full rounded-lg bg-green-400 px-4 py-3 text-sm font-medium text-gray-900 shadow-md transition hover:bg-green-500"
      >
        Okay
      </button>
    </div>
  );
}
