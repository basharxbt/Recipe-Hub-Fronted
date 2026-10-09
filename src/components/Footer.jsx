import Image from "next/image";
import Link from "next/link";

import { ArrowUp, ChefHat, Mail } from "lucide-react";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c93632] text-white">
                <ChefHat size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight">RecipeHub</h2>

                <p className="text-[11px] text-gray-500">
                  Cook. Discover. Share.
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
              Discover delicious recipes, explore world cuisines, and bring
              something special to your kitchen every day.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#c93632] hover:bg-[#c93632] hover:text-white"
              >
                <FaInstagram size={16} />
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#c93632] hover:bg-[#c93632] hover:text-white"
              >
                <FaFacebookF size={15} />
              </Link>

              <Link
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#c93632] hover:bg-[#c93632] hover:text-white"
              >
                <FaYoutube size={17} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold">Explore</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/all-recipe"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  All Recipes
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Cuisines
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Popular Recipes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold">RecipeHub</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Food Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/add-recipe"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Add a Recipe
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-bold">Stay Inspired</h3>

            <p className="mb-5 text-sm leading-6 text-gray-400">
              Get fresh recipes and cooking inspiration straight to your inbox.
            </p>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-1">
              <div className="flex items-center">
                <Mail size={17} className="ml-3 shrink-0 text-gray-500" />

                <input
                  type="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-gray-500"
                />

                <button
                  type="button"
                  className="rounded-lg bg-[#c93632] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#ad302d]"
                >
                  Join
                </button>
              </div>
            </div>

            <p className="mt-3 text-[11px] text-gray-500">
              No spam. Just delicious ideas.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} RecipeHub. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="text-xs text-gray-500 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="text-xs text-gray-500 transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="#"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#c93632] hover:bg-[#c93632] hover:text-white"
            >
              <ArrowUp size={15} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
