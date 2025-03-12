"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function ChangePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 border-b px-4 py-3">
        <button onClick={() => router.back()} className="text-black">
          <ArrowLeft className="size-5" />
        </button>
        <h1 className="text-lg font-semibold">Change Password</h1>
      </div>

      {/* Form Section */}
      <div className="p-4">
        <p className="text-sm text-gray-600">Please enter your current password</p>

        <div className="relative mt-4">
          <label className="text-sm font-medium text-gray-800">Current Password</label>
          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border px-4 py-3 focus:ring focus:ring-green-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
            </button>
          </div>
        </div>

        {/* Next Button */}
        <button
          className={`mt-6 w-full rounded-lg py-3 font-medium text-white transition ${
            password.length > 0 ? "bg-green-500 hover:bg-green-600" : "cursor-not-allowed bg-gray-300"
          }`}
          disabled={password.length === 0}
          onClick={() => router.push("/settings/security/change-password/new")}
        >
          Next
        </button>
      </div>
    </div>
  );
}
