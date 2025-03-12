"use client";

import { DetailRow } from "@/components/transaction/detailsRow";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TransactionDetail() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={() => router.back()} className="p-2">
          <ArrowLeft className="size-5 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold">Transaction Detail</h1>
      </div>

      {/* Amount */}
      <div className="mt-8 text-center">
        <p className="text-gray-500">Amount</p>
        <p className="mt-1 text-2xl font-bold text-green-800">+NGN 3,000.00</p>
      </div>

      {/* Status */}
      <div className="mt-12 flex items-center justify-between gap-2 border-b pb-6">
        <p className="text-gray-600">Status:</p>
        <span className="flex items-center gap-1 rounded-md bg-yellow-100 px-2 py-1 text-sm font-medium text-yellow-600">
          <AlertCircle className="size-4" />
          Pending
        </span>
      </div>

      {/* Transaction Details */}
      <div className="mt-6 space-y-4 text-sm text-gray-600">
        <DetailRow label="Transaction ID:" value="1928HJ8738MN" />
        <DetailRow label="To:" value="Yoba Naira Wallet" />
        <DetailRow label="Sender:" value="Titilope Ayobegbengaju" />
        <DetailRow label="Channel:" value="Payment Link" />
        <DetailRow label="Transaction Type:" value="Credit" />
        <DetailRow label="Date:" value="13 Jul 2023, 12:42 AM" />
      </div>

      {/* Dispute Button */}
      <button className="mt-[30%] w-full rounded-lg bg-red-100 py-3 text-sm font-medium text-red-600">
        Dispute Transaction
      </button>
    </div>
  );
}