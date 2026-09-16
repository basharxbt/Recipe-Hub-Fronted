import Link from "next/link";
import { ChefHat, Home, Search } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf9f7] px-6">
      <div className="w-full max-w-xl text-center">
        {/* Icon */}
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-[2rem] bg-red-100" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-[#c93632] shadow-xl shadow-red-200">
            <ChefHat size={38} strokeWidth={1.8} className="text-white" />
          </div>
        </div>

        {/* 404 */}
        <p className="text-8xl font-black tracking-tight text-[#c93632]">404</p>

        {/* Heading */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Recipe Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
          Looks like this page has gone missing from the kitchen. Let&apos;s get
          you back to some delicious recipes.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#c93632] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-100 transition hover:bg-[#ad302d] hover:shadow-xl"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            href="/all-recipe"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
          >
            <Search size={18} />
            Explore Recipes
          </Link>
        </div>

        {/* Bottom message */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-400">
            RecipeHub · Discover something delicious
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
