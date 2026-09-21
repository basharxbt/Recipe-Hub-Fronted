import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Pencil,
  Trash2,
  Eye,
  Heart,
  ChefHat,
  Clock3,
} from "lucide-react";
import { recipeDataByAuthor } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import DeleteRecipebtn from "@/components/dashboard/DeleteRecipebtn";

const MyRecipes = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session);
  const email = session?.user?.email;

  const myRecipes = await recipeDataByAuthor(email);
  console.log(myRecipes);
  return (
    <div className="min-h-screen bg-[#faf9f7] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold text-[#c93632]">Your Kitchen</p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
              My Recipes
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage and keep track of the recipes you have created.
            </p>
          </div>

          <Link
            href="/add-recipe"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#c93632] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#ad302d]"
          >
            <Plus size={18} />
            Add Recipe
          </Link>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Total Recipes</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {myRecipes.length}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Total Likes</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {myRecipes.reduce(
                (total, recipe) => total + Number(recipe.likes || 0),
                0,
              )}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Published</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {myRecipes.length}
            </p>
          </div>
        </div>

        {/* Recipe List */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="border-b border-gray-100 px-5 py-4">
            <h2 className="font-semibold text-gray-900">Your Recipes</h2>
          </div>

          <div className="divide-y divide-gray-100">
            {myRecipes.map((recipe) => (
              <div
                key={recipe._id}
                className="flex flex-col gap-5 p-5 transition hover:bg-gray-50/70 md:flex-row md:items-center"
              >
                {/* Image */}
                <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl md:h-24 md:w-32">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Recipe Info */}
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-600">
                      {recipe.status}
                    </span>

                    <span className="text-xs text-gray-400">
                      {recipe.category}
                    </span>
                  </div>

                  <h3 className="truncate text-lg font-bold text-gray-900">
                    {recipe.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock3 size={14} />
                      {recipe.time} min
                    </span>

                    <span className="flex items-center gap-1">
                      <ChefHat size={14} />
                      {recipe.level}
                    </span>

                    <span className="flex items-center gap-1">
                      <Heart size={14} />
                      {recipe.likes} likes
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Link
                    href={`/recipe-details/${recipe._id}`}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                    title="View Recipe"
                  >
                    <Eye size={17} />
                  </Link>

                  <DeleteRecipebtn recipe={recipe}></DeleteRecipebtn>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {myRecipes.length === 0 && (
            <div className="flex min-h-[350px] flex-col items-center justify-center px-5 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
                <ChefHat size={28} className="text-[#c93632]" />
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                No recipes yet
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                You haven't created any recipes yet. Start sharing your favorite
                recipes with the community.
              </p>

              <Link
                href="/add-recipe"
                className="mt-5 rounded-xl bg-[#c93632] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ad302d]"
              >
                Create Your First Recipe
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRecipes;
