import Image from "next/image";
import Link from "next/link";
import { Heart, Clock, BookmarkX } from "lucide-react";
import { favoriteRecipe } from "@/lib/data";
import UnsaveBtn from "@/components/favoriteSection/UnsaveBtn";
import { authClient, useSession } from "@/lib/auth-client";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const FavouritePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userEmail = session?.user.email;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const savedRecipes = await favoriteRecipe(userEmail, token);

  console.log(token, "this is headers");

  console.log(savedRecipes, "thoissssssss");
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      <section className="mb-8">
        <div className="flex flex-col justify-between gap-5 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 md:flex-row md:items-center">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fff0ef]">
              <Heart size={26} className="fill-[#c93632] text-[#c93632]" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#c93632]">
                Your collection
              </p>

              <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Favourite Recipes
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Your saved recipes, all in one place.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-3">
            <Heart size={17} className="fill-[#c93632] text-[#c93632]" />

            <span className="text-sm font-semibold text-gray-700">
              {savedRecipes.length} Saved Recipes
            </span>
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
