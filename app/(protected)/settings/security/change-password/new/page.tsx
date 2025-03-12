"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isValid = newPassword.length > 0 && confirmPassword.length > 0 && newPassword === confirmPassword;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 border-b px-4 py-3">
        <button onClick={() => router.back()} className="text-black">
          <ArrowLeft className="size-5" />
        </button>
        <h1 className="text-lg font-semibold">Reset Password</h1>
      </div>

      {/* Form Section */}
      <div className="p-4">
        <p className="text-sm text-gray-600">Please enter your new password</p>

        {/* New Password */}
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-800">New Password</label>
          <div className="relative mt-2">
            <input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full rounded-lg border px-4 py-3 focus:ring focus:ring-green-300"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showNewPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-800">Confirm New Password</label>
          <div className="relative mt-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full rounded-lg border px-4 py-3 focus:ring focus:ring-green-300"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
            </button>
          </div>
        </div>

        {/* Change Password Button */}
        <button
          className={`mt-6 w-full rounded-lg py-3 font-medium text-white transition ${
            isValid ? "bg-green-500 hover:bg-green-600" : "cursor-not-allowed bg-gray-300"
          }`}
          disabled={!isValid}
          onClick={() => alert("Password changed successfully!")}
        >
          Change Password
        </button>
      </div>
    </div>
  );
}
