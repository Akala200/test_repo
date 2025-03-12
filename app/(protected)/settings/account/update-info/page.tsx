"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function PersonalInfoPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "Odusanya Tomiwa",
    email: "johndoe@email.com",
    phone: "09053210487",
  });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 border-b px-4 py-3">
        <button onClick={() => router.back()} className="text-black">
          <ArrowLeft className="size-5" />
        </button>
        <h1 className="text-lg font-semibold">Personal Information</h1>
      </div>

      {/* Form */}
      <div className="flex-1 space-y-4 px-4 py-6">
        {Object.entries(form).map(([key, value]) => (
          <div key={key} className="space-y-1">
            <label className="text-sm font-medium text-gray-900">{key.replace(/([A-Z])/g, " $1")}</label>
            <input
              type="text"
              name={key}
              value={value}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
