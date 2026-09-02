"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

import { Mail, Lock, Eye, EyeOff, Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "@heroui/react";

const LoginPage = () => {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('singin.png')",
      }}
    >
      <div className="flex justify-center  items-center gap-10">
        <div className="mx-auto flex min-w-lg flex-col items-center  rounded-2xl bg-[#FFF8F3] p-8 shadow-2xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c93632] text-white">
              <span className="text-2xl">🍴</span>
            </div>

            <h1 className="text-3xl font-bold text-[#171717]">Welcome Back</h1>

            <p className="mt-2 text-sm text-gray-500">
              Sign in to continue to RecipeHub
            </p>
          </div>

          {/* Login Card */}
          <div className="w-full rounded-2xl bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.07)] sm:p-8">
            {/* Google Login */}

            {/* Form */}
            <form className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Password
                  </label>
                </div>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white py-3.5 pl-11 pr-12 text-sm outline-none transition focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                  />

                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  ></button>
                </div>
              </div>

              {/* Login */}
              <button
                type="submit"
                className="flex cursor-pointer w-full transition items-center justify-center gap-2 rounded-lg bg-[#c93632] py-3.5 text-sm font-bold text-white shadow-2xl hover:bg-[#ad302d] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Continue With Email
              </button>
            </form>

            {/* Register */}
            <p className="mt-7 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-bold text-[#c93632] hover:underline"
              >
                Create account
              </Link>
            </p>
          </div>
          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-400">
              OR CONTINUE WITH GOOGLE
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <Button
            className="w-full rounded-lg bg-white border border-gray-100 hover:bg-gray-50 text-gray-700 py-3.5 text-sm font-bold transition flex items-center justify-center gap-2"
            variant="tertiary"
          >
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>

          {/* Bottom text */}
          <p className="mt-6 text-center text-xs text-gray-400">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
