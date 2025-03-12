"use client";

import { ArrowLeft, Hash, Send, Banknote, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FundWallet() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={() => router.back()} className="p-2">
          <ArrowLeft className="size-5 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold">Fund Wallet</h1>
      </div>

      {/* Subtitle */}
      <p className="mt-2 text-sm text-gray-500">
        Choose a method to fund your Yoba account
      </p>

      {/* Funding Options */}
      <div className="mt-16 space-y-4">
        <FundingOption
          icon={<Hash className="size-6 text-indigo-500" />}
          title="USSD"
          description="Use a USSD Code to fund your wallet"
        />
        <FundingOption
          icon={<Send className="size-6 text-indigo-500" />}
          title="Request Payment"
          description="Send a payment link to request for money"
        />
        <FundingOption
          icon={<Banknote className="size-6 text-indigo-500" />}
          title="Bank Transfer"
          description="Fund your wallet through your bank app"
        />
        <FundingOption
          icon={<CreditCard className="size-6 text-indigo-500" />}
          title="Card"
          description="Fund your wallet with your debit card"
        />
      </div>

      {/* Bottom Navigation (Optional) */}
      <div className="fixed inset-x-0 bottom-0 flex items-center justify-around border-t bg-white p-4 shadow-md">
        <NavItem href="/" label="Home" />
        <NavItem href="/card" label="Card" />
        <NavItem href="/settings" label="Settings" />
      </div>
    </div>
  );
}

// Reusable Component for Funding Option
function FundingOption({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <div className="flex size-12 items-center justify-center rounded-lg bg-indigo-100">
        {icon}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

// Reusable Component for Navigation Item
function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="flex flex-col items-center text-sm text-gray-600 hover:text-black">
      {label}
    </a>
  );
}
