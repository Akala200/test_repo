import Link from "next/link";
import Image from "next/image";

const settingsOptions = [
  { name: "Account", description: "Edit profile information and upgrade account", iconSrc: "/assets/icons/user.png" },
  { name: "Security", description: "Manage your password and PIN", iconSrc: "/assets/icons/shield-tick.png" },
  { name: "Payments", description: "Manage payment methods", iconSrc: "/assets/icons/wallet.png" },
  { name: "Notifications", description: "Customize and manage notification preferences", iconSrc: "/assets/icons/Vector.png" },
  { name: "Terms and Conditions", description: "Read our legal terms and conditions", iconSrc: "/assets/icons/document.png" },
  { name: "Support", description: "Chat with a customer care representative", iconSrc: "/assets/icons/message-question.png" },
  { name: "Sign Out", description: "Sign out of your Yoba account", iconSrc: "/assets/icons/logout.png", isDanger: true },
];

export default function Settings() {
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <h1 className="mb-6 text-lg font-semibold text-gray-900">Settings</h1>
      <div className="space-y-4">
        {settingsOptions.map((option, index) => (
          <Link
            key={index}
            href={option.name === "Sign Out" ? "/logout" : "#"}
            role={option.name === "Sign Out" ? "button" : undefined}
            className={`flex items-center gap-4 rounded-lg border p-4 shadow-sm transition ${
              option.isDanger ? "border-red-500 bg-red-50 hover:bg-red-100" : "border-gray-200 bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <div className="rounded-lg p-2">
              <Image src={option.iconSrc} alt={option.name} width={24} height={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{option.name}</p>
              <p className="text-xs text-gray-500">{option.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}