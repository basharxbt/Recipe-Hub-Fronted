"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  CalendarDays,
  ChefHat,
  Search,
  ShoppingBag,
} from "lucide-react";
import { useState } from "react";

const purchasedRecipes = [
  {
    id: "1",
    title: "Creamy Garlic Pasta",
    image: "https://i.ibb.co/example/pasta.jpg",
    category: "Dinner",
    cuisine: "Italian",
    price: 2.99,
    purchasedAt: "Sep 28, 2026",
  },
  {
    id: "2",
    title: "Chicken Biryani",
    image: "https://i.ibb.co/example/biryani.jpg",
    category: "Main Course",
    cuisine: "Indian",
    price: 3.99,
    purchasedAt: "Sep 25, 2026",
  },
];

const Purchasedrecipes = () => {
  const [search, setSearch] = useState("");

  const filteredRecipes = purchasedRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase()),
  );

  const totalSpent = purchasedRecipes.reduce(
    (total, recipe) => total + recipe.price,
    0,
  );
  return (
    <div className="min-h-screen bg-[#faf8f6] p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c93632] text-white">
              <ShoppingBag size={21} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Purchased Recipes
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                All the premium recipes you have purchased.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm text-gray-500">Total Purchased</p>

              <BookOpen size={20} className="text-[#c93632]" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              {purchasedRecipes.length}
            </h2>

            <p className="mt-1 text-xs text-gray-400">Premium recipes</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm text-gray-500">Latest Purchase</p>

              <CalendarDays size={20} className="text-[#c93632]" />
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              {purchasedRecipes[0]?.purchasedAt || "No purchases"}
            </h2>

            <p className="mt-1 text-xs text-gray-400">Most recent purchase</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm text-gray-500">Total Spent</p>

              <ChefHat size={20} className="text-[#c93632]" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              ${totalSpent.toFixed(2)}
            </h2>

            <p className="mt-1 text-xs text-gray-400">On premium recipes</p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search purchased recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
            />
          </div>

          <p className="text-sm text-gray-500">
            {filteredRecipes.length} recipe
            {filteredRecipes.length !== 1 && "s"}
          </p>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow">
                    Purchased
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs text-gray-500">
                    <span className="rounded-full bg-[#c93632]/10 px-2.5 py-1 text-[#c93632]">
                      {recipe.category}
                    </span>

                    <span>•</span>

                    <span>{recipe.cuisine}</span>
                  </div>

                  <h2 className="line-clamp-1 text-lg font-bold text-gray-900">
                    {recipe.title}
                  </h2>

                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                      <p className="text-xs text-gray-400">Purchased</p>

                      <p className="mt-1 text-sm font-medium text-gray-700">
                        {recipe.purchasedAt}
                      </p>
                    </div>

                    <p className="font-bold text-[#c93632]">
                      ${recipe.price.toFixed(2)}
                    </p>
                  </div>

                  <Link
                    href={`/recipe/${recipe.id}`}
                    className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#c93632] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#ae2e2a]"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#c93632]/10 text-[#c93632]">
              <BookOpen size={25} />
            </div>

            <h2 className="mt-4 text-lg font-bold text-gray-900">
              No purchased recipes found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              You haven't purchased any premium recipes yet, or your search
              didn't match any recipe.
            </p>

            <Link
              href="/all-recipe"
              className="mt-6 inline-flex rounded-xl bg-[#c93632] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ae2e2a]"
            >
              Explore Recipes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Purchasedrecipes;
