import { ArrowUp, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div>
                <Image
                  src="/logoblack.jfif"
                  alt="RecipeHub Logo"
                  width={60}
                  height={60}
                />
              </div>

              <span className="text-2xl font-bold tracking-tight">
                RecipeHub
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">
              Discover delicious recipes, explore different cuisines, and bring
              something special to your kitchen every day.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#c93632] hover:bg-[#c93632] hover:text-white"
              ></a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#c93632] hover:bg-[#c93632] hover:text-white"
              ></a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#c93632] hover:bg-[#c93632] hover:text-white"
              ></a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
              Explore
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/recipes"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  All Recipes
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  href="/cuisines"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Cuisines
                </Link>
              </li>

              <li>
                <Link
                  href="/popular"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Popular Recipes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
              RecipeHub
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
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
                  href="/contact"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
              Stay Inspired
            </h3>

            <p className="mb-4 text-sm leading-6 text-gray-400">
              Get new recipes and cooking inspiration delivered to your inbox.
            </p>

            <div className="flex overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-gray-500"
              />

              <button
                type="button"
                className="flex items-center justify-center bg-[#c93632] px-4 transition hover:bg-[#ad302d]"
                aria-label="Subscribe"
              >
                <Mail size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} RecipeHub. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-gray-500 transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#c93632] hover:bg-[#c93632] hover:text-white"
              aria-label="Back to top"
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
