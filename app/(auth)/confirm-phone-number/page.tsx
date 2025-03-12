import React from "react";

const ConfirmPhone = () => {
  return (
    <div>
      {/* Progress Bar */}
      <div className="px-6 pt-10">
        <div className="mb-4 flex w-full justify-start">
          <div className="h-1 w-[22px] rounded-full bg-green-500"></div>
          <div className="mx-1 h-1 w-[22px] rounded-full bg-gray-300"></div>
          <div className="mx-1 h-1 w-[22px] rounded-full bg-gray-300"></div>
          <div className="h-1 w-[22px] rounded-full bg-gray-300"></div>
        </div>
      </div>
      <div className="flex min-h-screen justify-center bg-white px-6">
        <div className="w-full max-w-md">
          {/* Header */}
          <h1 className="mb-2 mt-2 text-start text-xl font-bold text-[#021C02]">
            Confirm your phone number
          </h1>
          <p className="mb-6 text-start text-[#70747E]">
            To verify your phone number, we&apos;ve sent a one-time code (OTP)
            to [phone number]. Enter the code to complete your Yoba sign up.
          </p>
          {/* Form */}
          <div className="mt-16">
            {/* OTP Input */}
            <div className="mb-4 flex justify-start space-x-2">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="h-12 w-12 rounded-lg border border-gray-300 text-center text-lg focus:border-green-500 focus:ring-green-500"
                />
              ))}
            </div>
            {/* Resend Timer */}
            <p className="mb-6 text-start text-gray-600">
              Didn&apos;t get a code?{" "}
              <span className="text-green-500">Resend in 3:00</span>
            </p>
            <div className="mt-[100px]">
              <button
                type="submit"
                className="w-full rounded-lg bg-green-500 py-3 font-medium text-white shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPhone;
