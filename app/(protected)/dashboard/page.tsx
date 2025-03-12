import { TransactionItem } from "@/components/transaction/transactionItem";
import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import { Bell } from 'lucide-react';

export const metadata = constructMetadata({
  title: "Dashboard – Next Template",
  description: "Create and manage content.",
});

export default async function DashboardPage() {
  const user = await getCurrentUser();

  return (
    <>
        <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <div className="mt-11 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-full border border-red-300 text-sm">
            A
          </div>
          <div>
            <p className="text-sm font-medium">Hi Titilope,</p>
            <p className="text-xs text-gray-500">Welcome back to Yooba</p>
          </div>
        </div>
        <Bell className="size-12 rounded-full border border-gray-300 bg-[#FFCECC] p-2 text-gray-500" />
        </div>
      
      {/* Balance */}
      <div className="mt-11">
        <p className="text-sm text-gray-500">Naira Balance:</p>
        <p className="text-2xl font-bold">NGN 123,000.00</p>
      </div>

      {/* Fund Wallet Button */}
      <button className="mt-4 w-full rounded-lg bg-green-500 py-3 font-medium text-white shadow-md">
        + Fund wallet
      </button>
      
      {/* Quick Actions */}
      <div className="mt-6">
        <p className="font-medium">Quick Actions</p>
        <div className="mt-3 flex gap-4">
          <div className="flex-1 rounded-lg bg-pink-100 p-4 shadow-sm">
            <p className="font-medium">Card Top Up</p>
            <p className="text-sm text-gray-500">Fund your virtual dollar card</p>
          </div>
          <div className="flex-1 rounded-lg bg-blue-100 p-4 shadow-sm">
            <p className="font-medium">Withdraw Funds</p>
            <p className="text-sm text-gray-500">Send funds to your bank</p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <p className="font-medium">Recent Transactions</p>
          <p className="text-sm font-medium text-green-500">See all</p>
        </div>
        <div className="mt-4 space-y-4">
          <TransactionItem title="Naira Wallet Funding" amount="+NGN 3,000,000.00" date="05 Feb, 09:35 PM" status="Successful" />
          <TransactionItem title="Dollar card Funding" amount="+USD 3,000,000.00" date="05 Feb, 09:00 AM" status="Successful" />
          <TransactionItem title="Spotify Payment" amount="-USD 25.00" date="03 Feb, 01:15 AM" status="Successful" />
          <TransactionItem title="Zara" amount="-USD 3,500.00" date="" status="" />
        </div>
      </div>
    </div>
    </>
  );
}
