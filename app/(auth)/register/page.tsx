"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

const CreateAccount = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
  
    try {
      const response = await axios.post(
        "https://api-sandbox.getyoba.com/api/v1/auth/register",
        formData
      );
      setSuccess("Account created successfully!");
      setTimeout(() => {
        router.push(`/confirm-email?email=${encodeURIComponent(formData.email)}`);
      }, 2000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };  

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

      <div className="mt-[20px] flex min-h-screen justify-center bg-white px-6">
        <div className="w-full max-w-md">
          <h1 className="my-2 text-start text-xl font-bold text-[#021C02]">
            Create your Yoba account
          </h1>
          <p className="mb-6 text-start text-[#70747E]">
            Welcome to Yoba! Let&apos;s get started on your journey to borderless spending.
          </p>

          <div className="mt-16">
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <form  onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="johndoe@email.com"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mt-8">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1 flex items-center overflow-hidden rounded-lg border border-gray-300">
                  <span className="bg-gray-100 px-4 py-2">+234</span>
                  <input
                    id="phone"
                    type="tel"
                    className="flex-1 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:border-green-500 focus:ring-green-500"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="mt-[130px]">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#1AAD1A] py-3 font-medium text-[#062D08] shadow-[4px_4px_8px_rgba(0,0,0,0.2)] hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Next"}
                </button>
              </div>
            </form>
          </div>

          <p className="mt-[100px] text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-[#1AAD1A] hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
