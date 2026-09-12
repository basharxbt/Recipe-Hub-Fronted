import Image from "next/image";
import Link from "next/link";
import { Heart, Clock, BookmarkX } from "lucide-react";
import { favoriteRecipe } from "@/lib/data";
import UnsaveBtn from "@/components/favoriteSection/UnsaveBtn";

const FavouritePage = async () => {
  const savedRecipes = await favoriteRecipe();
  console.log(savedRecipes);
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      <section className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-5 py-14 lg:px-8">
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0ef]">
              <Heart size={28} className="fill-[#c93632] text-[#c93632]" />
            </div>

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#c93632]">
              Your collection
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              Favourite Recipes
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500">
              Your favourite recipes are all saved here. Cook something
              delicious whenever you want.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 py-12 lg:px-8">
        {savedRecipes?.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {savedRecipes.map((recipe) => (
              <div
                key={recipe._id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                    <Heart
                      size={18}
                      className="fill-[#c93632] text-[#c93632]"
                    />
                  </div>

                  <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-gray-700 shadow-sm">
                    {recipe.category}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {recipe.cuisine}
                  </p>

                  <h2 className="mt-2 line-clamp-1 text-lg font-bold text-gray-900">
                    {recipe.title}
                  </h2>

                  {/* Recipe info */}
                  <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Clock size={15} />
                      <span>{recipe.time} min</span>
                    </div>

                    <span className="rounded-lg bg-gray-50 px-2.5 py-1 text-xs font-semibold">
                      {recipe.difficulty}
                    </span>
                  </div>

                  <div className="mt-5 flex gap-2">
                    <Link
                      href={`/recipe-details/${recipe._id}`}
                      className="flex h-11 flex-1 items-center justify-center rounded-xl bg-[#c93632] text-sm font-bold text-white transition hover:bg-[#a92d29]"
                    >
                      View Recipe
                    </Link>

                    <UnsaveBtn recipe={recipe}></UnsaveBtn>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-white text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff0ef]">
              <Heart size={28} className="text-[#c93632]" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900">
              No favourite recipes yet
            </h2>

            <p className="mt-2 max-w-md text-sm text-gray-500">
              Save your favourite recipes and they will appear here.
            </p>

            <Link
              href="/all-recipe"
              className="mt-6 rounded-xl bg-[#c93632] px-6 py-3 text-sm font-bold text-white hover:bg-[#a92d29]"
            >
              Explore Recipes
            </Link>
          </div>
        )}
      </section>
    </main>
  );
};

export default FavouritePage;
