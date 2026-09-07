import Image from "next/image";
import Link from "next/link";
import { Heart, Clock, ArrowRight, Flame } from "lucide-react";
import { recipeData } from "@/lib/data";

const PopularRecipe = async () => {
  const allRecipes = await recipeData();

  const popularRecipes = allRecipes
    .filter((recipe) => {
      if (recipe.likes > 80) return recipe;
    })
    .sort((a, b) => b.likes - a.likes);
  console.log(popularRecipes);
  return (
    <section className="  w-full container mx-auto py-20">
      <div className="mx-auto">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Flame size={18} className="text-[#c93632]" />

              <span className="text-sm font-semibold uppercase tracking-wider text-[#c93632]">
                Trending Now
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Popular Recipes
            </h2>

            <p className="mt-3  text-gray-500">
              Discover the recipes everyone is loving right now.
            </p>
          </div>

          <Link
            href="/recipes"
            className="hidden items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-[#c93632] hover:text-[#c93632] md:flex"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularRecipes.map((recipe, index) => (
            <Link
              href={`/recipes/${recipe._id}`}
              key={recipe._id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-sm font-bold text-gray-900 shadow-sm">
                  #{index + 1}
                </div>

                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-[#c93632] shadow-sm">
                  <Heart size={15} className="fill-[#c93632]" />
                  {recipe.likes}
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-[#c93632]">
                    {recipe.category}
                  </span>

                  <span className="text-xs font-medium text-gray-400">
                    {recipe.difficulty}
                  </span>
                </div>

                <h3 className="line-clamp-1 text-lg font-bold text-gray-900 transition group-hover:text-[#c93632]">
                  {recipe.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <Clock size={15} />
                  <span>{recipe.time}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/recipes"
            className="flex items-center gap-2 rounded-full bg-[#c93632] px-6 py-3 text-sm font-semibold text-white"
          >
            View all recipes
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularRecipe;
