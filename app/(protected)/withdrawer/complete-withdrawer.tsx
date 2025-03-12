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

      {/* Success Message 7076670019 */}
      <h1 className="mt-4 text-lg font-semibold text-gray-900">Withdrawal Successful</h1>
      <p className="mt-2 text-sm text-gray-500">
      You’ve successfully withdrawn NGN 20,000.00 to your bank account
      </p>

      {/* Buttons */}
      <div className="mt-[20%] w-full max-w-xs space-y-3">
        <button
          onClick={() => router.push("/withdraw")}
          className="w-full rounded-lg bg-green-400 px-4 py-3 text-sm font-medium text-gray-900 shadow-md transition hover:bg-green-500"
        >
          Okay
        </button>
      </div>
    </div>
  );
}