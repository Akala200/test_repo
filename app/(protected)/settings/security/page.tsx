"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";

export default function SecuritySettingsPage() {
  const router = useRouter();
  const [isBiometricEnabled, setBiometricEnabled] = useState(true);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 border-b px-4 py-3">
        <button onClick={() => router.back()} className="text-black">
          <ArrowLeft className="size-5" />
        </button>
        <h1 className="text-lg font-semibold">Security</h1>
      </div>

      {/* Security Options */}
      <div className="divide-y px-4">
        {/* Change Password */}
        <div
          className="flex cursor-pointer items-center justify-between py-4"
          onClick={() => router.push("/settings/security/change-password")}
        >
          <span className="text-sm font-medium text-gray-800">
            Change Password
          </span>
          <ChevronRight className="size-4 text-gray-500" />
        </div>

        {/* Change PIN */}
        <div
          className="flex cursor-pointer items-center justify-between py-4"
          onClick={() => router.push("/settings/security/change-pin")}
        >
          <span className="text-sm font-medium text-gray-800">Change PIN</span>
          <ChevronRight className="size-4 text-gray-500" />
        </div>

        {/* Enable Face ID / Fingerprint */}
        <div className="flex items-center justify-between py-4">
          <span className="text-sm font-medium text-gray-800">
            Enable Face ID / Fingerprint
          </span>
          <input
            type="checkbox"
            checked={isBiometricEnabled}
            onChange={() => setBiometricEnabled(!isBiometricEnabled)}
            className="size-6 accent-green-500"
          />
        </div>
      </div>
    </div>
  );
}
