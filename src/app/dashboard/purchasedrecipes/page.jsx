import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChefHat,
  ShoppingBag,
} from "lucide-react";

import { myPurchasedRecipes } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Purchasedrecipes = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userEmail = session.user.email;
  const purchasedRecipes = await myPurchasedRecipes(userEmail);

  console.log(
    purchasedRecipes,
    "this is purchased recipes from purchased page",
  );

  return (
    <div className="min-h-screen bg-[#faf8f6] p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c93632] text-white">
                <ShoppingBag size={21} />
              </div>

              <span className="text-sm font-semibold uppercase tracking-wider text-[#c93632]">
                My Library
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Purchased Recipes
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Your collection of premium recipes. Everything you purchase
              appears here.
            </p>
          </div>

          <Link
            href="/all-recipe"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-[#c93632] hover:text-[#c93632]"
          >
            Explore Recipes
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Summary */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c93632]/10 text-[#c93632]">
                <BookOpen size={20} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Purchased
                </p>

                <p className="mt-1 text-2xl font-bold text-gray-900">
                  {purchasedRecipes.length}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c93632]/10 text-[#c93632]">
                <ChefHat size={20} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Collection
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  Premium Recipes
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c93632]/10 text-[#c93632]">
                <CalendarDays size={20} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Access
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  Lifetime
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recipes */}
        {purchasedRecipes.length > 0 ? (
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Your Collection
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {purchasedRecipes.length} premium{" "}
                  {purchasedRecipes.length === 1 ? "recipe" : "recipes"}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              {purchasedRecipes.map((recipe, index) => (
                <div
                  key={recipe._id}
                  className={`group flex flex-col gap-5 p-5 transition hover:bg-[#faf8f6] md:flex-row md:items-center md:p-6 ${
                    index !== purchasedRecipes.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl md:h-24 md:w-36">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 144px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Recipe info */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#c93632]/10 px-2.5 py-1 text-xs font-semibold text-[#c93632]">
                        {recipe.category}
                      </span>

                      <span className="text-xs text-gray-300">•</span>

                      <span className="text-xs font-medium text-gray-500">
                        {recipe.cuisine}
                      </span>
                    </div>

                    <h3 className="truncate text-lg font-bold text-gray-900">
                      {recipe.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 max-w-2xl text-sm leading-5 text-gray-500">
                      {recipe.description}
                    </p>
                  </div>

                  {/* Purchased status */}
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={17} className="text-green-600" />

                    <span className="font-medium text-gray-600">Purchased</span>
                  </div>

                  {/* Button */}
                  <Link
                    href={`/recipe-details/${recipe._id}`}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#c93632] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ae2e2a]"
                  >
                    View Recipe
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Empty state */
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#c93632]/10 text-[#c93632]">
              <BookOpen size={28} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900">
              Your library is empty
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              You have not purchased any premium recipes yet. Explore the recipe
              collection and start building your library.
            </p>

            <Link
              href="/all-recipe"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#c93632] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ae2e2a]"
            >
              Browse Recipes
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Purchasedrecipes;
