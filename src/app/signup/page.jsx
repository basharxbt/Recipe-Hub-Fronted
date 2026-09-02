"use client";

import Link from "next/link";
import { User, Mail, Image as ImageIcon, Lock, Check } from "lucide-react";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const signUpUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData.entries());
    console.log(userInfo);

    const { data, error } = await authClient.signUp(userInfo);

    console.log("Sign Up Response:", { data, error });
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/singup.png')",
      }}
    >
      <div className="absolute   bg-black/45" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
        <div className="lg:min-w-lg">
          {/* Heading */}
          <div className="mb-6 text-center text-white">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c93632]">
              <span className="text-2xl">🍴</span>
            </div>

            <h1 className="text-3xl font-bold sm:text-4xl">
              Create Your Account
            </h1>

            <p className="mt-2 text-sm text-white/75">
              Join Platea and discover delicious recipes
            </p>
          </div>

          {/* Registration Card */}
          <div className="rounded-2xl bg-[#fffaf7] p-6 shadow-2xl sm:p-8">
            <form onSubmit={signUpUser} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#171717]"
                >
                  Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-[#e4ddd8] bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#171717]"
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
                    className="w-full rounded-lg border border-[#e4ddd8] bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label
                  htmlFor="image"
                  className="mb-2 block text-sm font-semibold text-[#171717]"
                >
                  Image URL
                </label>

                <div className="relative">
                  <ImageIcon
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="image"
                    name="image"
                    type="url"
                    placeholder="https://example.com/profile.jpg"
                    className="w-full rounded-lg border border-[#e4ddd8] bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-[#171717]"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    className="w-full rounded-lg border border-[#e4ddd8] bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                  />
                </div>
              </div>

              {/* Password Rules */}
              <div className="rounded-lg bg-[#f8f1ed] p-4">
                <p className="mb-2 text-sm font-semibold text-[#171717]">
                  Password must contain:
                </p>

                <div className="space-y-1.5">
                  <PasswordRule text="Minimum 6 characters" />
                  <PasswordRule text="One uppercase letter" />
                  <PasswordRule text="One lowercase letter" />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#c93632] py-3.5 text-sm font-bold text-white transition hover:bg-[#ad302d]"
              >
                Create Account
              </button>
            </form>
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

            {/* Login Link */}
            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-bold text-[#c93632] hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Bottom Text */}
          <p className="mt-5 text-center text-xs text-white/60">
            By creating an account, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};
const PasswordRule = ({ text }) => {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-500">
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white">
        <Check size={11} className="text-[#c93632]" />
      </span>
      {text}
    </div>
  );
};

export default SignUpPage;
