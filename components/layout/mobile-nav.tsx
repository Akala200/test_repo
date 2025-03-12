"use client"
import { Home, CreditCard, Settings } from "lucide-react";
import { useState } from "react";

const BottomNav = () => {
  const [active, setActive] = useState("settings");

  const navItems = [
    { name: "Home", icon: <Home size={24} />, key: "home" },
    { name: "Card", icon: <CreditCard size={24} />, key: "card" },
    { name: "Settings", icon: <Settings size={24} />, key: "settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white py-2 shadow-md">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <button
            key={item.key}
            className={`flex flex-col items-center text-sm ${
              active === item.key ? "text-green-600" : "text-gray-800"
            }`}
            onClick={() => setActive(item.key)}
          >
            <span
              className={`rounded-full p-2 ${
                active === item.key ? "bg-green-200" : "bg-transparent"
              }`}
            >
              {item.icon}
            </span>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
// 