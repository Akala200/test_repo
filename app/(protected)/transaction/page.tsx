import {
  Search,
  Calendar,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

const transactions = [
  {
    title: "Naira Wallet Funding",
    amount: "+NGN 3,000,000.00",
    date: "05 Feb, 09:35 PM",
    status: "Successful",
    type: "credit",
  },
  {
    title: "Dollar card Funding",
    amount: "+USD 3,000,000.00",
    date: "05 Feb, 09:00 AM",
    status: "Successful",
    type: "credit",
  },
  {
    title: "Spotify Payment",
    amount: "-USD 25.00",
    date: "03 Feb, 01:15 AM",
    status: "Successful",
    type: "debit",
  },
  {
    title: "Zara",
    amount: "-USD 3,500.00",
    date: "05 Feb, 01:00 AM",
    status: "Successful",
    type: "debit",
  },
  {
    title: "Dollar card Funding",
    amount: "+USD 3,000,000.00",
    date: "03 Feb, 12:42 AM",
    status: "Successful",
    type: "credit",
  },
  {
    title: "Dollar card Funding",
    amount: "+USD 3,000,000.00",
    date: "03 Feb, 12:42 AM",
    status: "Successful",
    type: "credit",
  },

  {
    title: "Dollar card Funding",
    amount: "+USD 3,000,000.00",
    date: "03 Feb, 12:42 AM",
    status: "Successful",
    type: "credit",
  },

  {
    title: "Dollar card Funding",
    amount: "+USD 3,000,000.00",
    date: "03 Feb, 12:42 AM",
    status: "Successful",
    type: "credit",
  },

  {
    title: "Dollar card Funding",
    amount: "+USD 3,000,000.00",
    date: "03 Feb, 12:42 AM",
    status: "Successful",
    type: "credit",
  },

  {
    title: "Dollar card Funding",
    amount: "+USD 3,000,000.00",
    date: "03 Feb, 12:42 AM",
    status: "Successful",
    type: "credit",
  },

  {
    title: "Dollar card Funding",
    amount: "+USD 3,000,000.00",
    date: "03 Feb, 12:42 AM",
    status: "Successful",
    type: "credit",
  },

  {
    title: "Dollar card Funding",
    amount: "+USD 3,000,000.00",
    date: "03 Feb, 12:42 AM",
    status: "Successful",
    type: "credit",
  },

  {
    title: "Dollar card Funding",
    amount: "+USD 3,000,000.00",
    date: "03 Feb, 12:42 AM",
    status: "Successful",
    type: "credit",
  },
];

export default function TransactionHistory() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="flex items-center gap-3 border-b bg-white p-4 shadow-sm">
        <Link href="/" className="rounded-full bg-gray-100 p-2">
          <ChevronLeft className="size-5 text-gray-600" />
        </Link>
        <h1 className="flex-1 text-lg font-semibold">Transaction History</h1>
      </header>

      {/* Search Input */}
      <div className="flex items-center gap-2 p-4">
        {/* Search Input: Takes more space */}
        <div className="flex flex-1 items-center rounded-lg border border-gray-300 p-2">
          <Search className="size-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search for a transaction here"
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Calendar Button: Smaller */}
        <button className="rounded-lg border border-gray-300 bg-gray-100 p-2">
          <Calendar className="size-5 text-gray-600" />
        </button>
      </div>

      {/* Transactions List */}
      <div className="flex-1 overflow-y-auto px-4">
        {transactions.map((tx, index) => (
          <div key={index} className="border-b p-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-medium">{tx.title}</h2>
                <p className="text-xs text-gray-500">{tx.date}</p>
              </div>
              <div className="w-full text-right">
                <p
                  className={`mt-1 font-semibold ${
                    tx.type === "credit" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tx.amount}
                </p>
                <p className="text-xs text-gray-400">{tx.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
