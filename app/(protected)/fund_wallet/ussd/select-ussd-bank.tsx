"use client";

import { ArrowLeft, Search } from "lucide-react";
import Image  from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const banks = [
  { name: "Access Bank", code: "*901*10,000*129383930#", logo: "/access.png" },
  { name: "Fidelity Bank", code: "*770*10,000*129383930#", logo: "/fidelity.png" },
  { name: "First Bank", code: "*894*10,000*129383930#", logo: "/firstbank.png" },
  { name: "FCMB", code: "*329*10,000*129383930#", logo: "/fcmb.png" },
  { name: "GTB", code: "*737*2*10,000*129383930#", logo: "/gtb.png" },
  { name: "Keystone Bank", code: "*7111*10,000*129383930#", logo: "/keystone.png" },
  { name: "Polaris Bank", code: "*833*10,000*129383930#", logo: "/polaris.png" },
  { name: "Sterling Bank", code: "*822*10,000*129383930#", logo: "/sterling.png" },
  { name: "United Bank of Africa", code: "*919*10,000*129383930#", logo: "/uba.png" },
  { name: "Union Bank", code: "*826*10,000*129383930#", logo: "/union.png" },
  { name: "Unity Bank", code: "*7799*10,000*129383930#", logo: "/unity.png" },
  { name: "WEMA Bank", code: "*945*10,000*129383930#", logo: "/wema.png" },
  { name: "Zenith Bank", code: "*966*10,000*129383930#", logo: "/zenith.png" },
];

export default function USSDSelectionPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredBanks = banks.filter((bank) =>
    bank.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={() => router.back()} className="p-2">
          <ArrowLeft className="size-5 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold">USSD</h1>
      </div>

      {/* Subtitle */}
      <p className="mt-2 text-sm text-gray-500">
        Tap the right USSD Code for the appropriate bank to dial it
      </p>

      {/* Search Bar */}
      <div className="relative mt-4">
        <input
          type="text"
          placeholder="Search for a bank here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Search className="absolute right-3 top-3.5 size-5 text-gray-400" />
      </div>

      {/* Bank List */}
      <div className="mt-6 space-y-4">
        {filteredBanks.map((bank, index) => (
          <button
            key={index}
            className="flex w-full items-center gap-3 rounded-lg border-b p-3 pb-4 hover:bg-gray-100"
            onClick={() => alert(`Dialing ${bank.code}`)}
          >
              <Image src={bank.logo} alt={bank.name} width={32} height={32} className="rounded" />
            <div>
              <p className="text-start text-sm font-medium">{bank.name}</p>
              <p className="text-xs text-gray-500">{bank.code}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
