"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";

export default function UpgradeAccountPage() {
  const router = useRouter();

  const tiers = [
    {
      level: "Tier 1",
      description: "BVN, NIN",
      active: true,
    },
    {
      level: "Tier 2",
      description: "Valid National ID (International Passport & Voter’s Card)",
      active: false,
    },
    {
      level: "Tier 3",
      description: "Proof of address (bank statement, utility bill)",
      active: false,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 border-b px-4 py-3">
        <button onClick={() => router.back()} className="text-black">
          <ArrowLeft className="size-5" />
        </button>
        <h1 className="text-lg font-semibold">Upgrade Account</h1>
      </div>

      {/* Account Tiers */}
      <div className="flex-1 space-y-4 px-4 py-6">
        {tiers.map((tier, index) => (
          <div
            key={tier.level}
            className={`flex items-center justify-between rounded-lg p-4 ${
              tier.active
                ? "border border-gray-300 bg-white text-black"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            <div>
              <h2 className={`text-sm font-bold ${tier.active ? "text-black" : "text-gray-400"}`}>
                {tier.level}
              </h2>
              <p className="text-xs">{tier.description}</p>
            </div>
            {tier.active && <ChevronRight className="size-5 text-gray-600" />}
          </div>
        ))}
      </div>
    </div>
  );
}