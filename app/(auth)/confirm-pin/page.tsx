"use client";

import { ArrowLeft } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const ConfirmPin = () => {
  const router = useRouter();
  const [pin, setPin] = useState<string[]>(Array(4).fill(""));
  const [storedPin, setStoredPin] = useState<string | null>(null);

  useEffect(() => {
    setStoredPin(sessionStorage.getItem("pin"));
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Allow only numbers
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Auto-focus next input
    if (value && index < 5) {
      document.getElementById(`pin-${index + 1}`)?.focus();
    }
  };

  const handleSubmit = async () => {
    const pinCode = pin.join("");
    if (pinCode.length !== 4) return;
  
    if (pinCode !== storedPin) {
      alert("PINs do not match. Please try again.");
      return;
    }
  
    try {
      const response = await axios.post("https://api-sandbox.getyoba.com/api/v1/auth/create-pin", {
        pin: pinCode,
      });
  
      console.log("Success:", response.data);
      alert("PIN successfully set!");
  
      // Remove stored PIN after successful confirmation
      sessionStorage.removeItem("pin");
  
      router.push("/dashboard"); // Redirect after successful submission
    } catch (error) {
      console.error("Error creating PIN:", error);
      alert("Failed to set PIN. Please try again.");
    }
  };
  

  return (
    <div>
      {/* Back Button */}
      <div className="flex items-center px-6 pt-10">
        <ArrowLeft
          size={24}
          className="cursor-pointer text-gray-700 hover:text-black"
          onClick={() => (window.history.length > 1 ? router.back() : router.push("/"))}
        />
      </div>

      {/* Progress Bar */}
      <div className="px-6 pt-10">
        <div className="mb-4 flex w-full justify-start">
          <div className="h-1 w-[22px] rounded-full bg-green-500"></div>
          <div className="mx-1 h-1 w-[22px] rounded-full bg-green-500"></div>
          <div className="mx-1 h-1 w-[22px] rounded-full bg-green-500"></div>
          <div className="h-1 w-[22px] rounded-full bg-green-500"></div>
        </div>
      </div>

      <div className="flex min-h-screen justify-center bg-white px-6">
        <div className="w-full max-w-md">
          {/* Header */}
          <h1 className="my-2 text-start text-xl font-bold text-[#021C02]">Confirm your PIN</h1>
          <p className="mb-6 text-start text-[#70747E]">
            You’re almost there, re-enter your PIN to confirm. This PIN will be used to complete your transactions.
          </p>

          {/* PIN Input */}
          <div className="mt-16">
            <div className="mb-4 flex justify-start space-x-5">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  id={`pin-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="size-12 rounded-lg border border-gray-300 text-center text-lg focus:border-green-500 focus:ring-green-500"
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-[100px]">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={pin.join("").length !== 4} // Disable if not 6 digits
              className={`w-full rounded-lg py-3 font-medium shadow-[4px_4px_8px_rgba(0,0,0,0.2)]
                ${pin.join("").length === 4 ? "bg-[#1AAD1A] text-[#062D08] hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2" 
                : "cursor-not-allowed bg-gray-300 text-gray-600"}
              `}
            >
              Confirm PIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPin;
