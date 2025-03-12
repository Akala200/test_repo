"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AccountLinkedSuccess() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      {/* Success Icon */}
      <div className="mt[40%]">
        <Image src="/check.png" alt="Wallet" width={128} height={128} />
      </div>

      {/* Success Message */}
      <h1 className="mt-4 text-lg font-semibold text-gray-900">Account Linked successfully</h1>
      <p className="mt-2 text-sm text-gray-500">
        You&lsquo;ve successfully linked a bank account card to your Yoba account. Would you like to make a withdrawal now?
      </p>

      {/* Buttons */}
      <div className="mt-6 w-full max-w-xs space-y-3">
        <button
          onClick={() => router.push("/withdraw")}
          className="w-full rounded-lg bg-green-400 px-4 py-3 text-sm font-medium text-gray-900 shadow-md transition hover:bg-green-500"
        >
          Yes, make a withdrawal
        </button>

        <button
          onClick={() => router.push("/home")}
          className="mt-[10%] w-full text-sm font-medium text-gray-500"
        >
          No, try later
        </button>
      </div>
    </div>
  );
}