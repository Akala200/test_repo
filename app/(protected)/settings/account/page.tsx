"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Home, CreditCard, Settings } from "lucide-react";

export default function AccountPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 border-b px-4 py-3">
        <button onClick={() => router.back()} className="text-black">
          <ArrowLeft className="size-5" />
        </button>
        <h1 className="text-lg font-semibold">Account</h1>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4 border-b px-4 py-6">
        <div className="flex size-12 items-center justify-center rounded-full bg-green-100 text-lg font-semibold text-green-700">
          TO
        </div>
        <div>
          <p className="text-lg font-medium">Titilope Ayobegbengaju</p>
          <p className="text-sm text-gray-500">Tier 1</p>
        </div>
      </div>

      {/* Account Options */}
      <div className="flex-1 space-y-6 p-4">
        {[
          { title: "Personal Information", desc: "View your profile information", href: "/profile" },
          { title: "Upgrade Account", desc: "Upgrade your tier on your Yoba account", href: "/upgrade" },
          { title: "Account Limits", desc: "Understand the account limit for each tier", href: "/limits" },
          { title: "Delete Account", desc: "Delete your Yoba account", href: "/delete", danger: true },
        ].map((item, index) => (
          <Link key={index} href={item.href} className="block space-y-1">
            <p className={`text-sm font-medium ${item.danger ? "text-red-600" : "text-gray-900"}`}>{item.title}</p>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
