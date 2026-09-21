import DeleteRecipebtn from "@/components/dashboard/DeleteRecipebtn";
import { recipeData } from "@/lib/data";
import { Eye, Search, SlidersHorizontal, ChefHat, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ManageRecipes = async () => {
  const recipes = await recipeData();
  const recipesLikes = recipes.reduce((sum, recipe) => sum + recipe.likes, [0]);
  console.log(recipesLikes, "this is recipes likes");
  console.log(recipes);

  return (
    <section className="min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="mb-1 text-sm font-medium text-[#c93632]">
              Recipe Management
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Manage Recipes
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Review, edit and manage all recipes on your platform.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c93632] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#ad302d]">
            <ChefHat size={18} />
            Add Recipe
          </button>
        </div>

        {/* Stats */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                <ChefHat size={21} className="text-[#c93632]" />
              </div>

              <span className="text-xs font-medium text-green-600">+12%</span>
            </div>

            <p className="text-sm text-gray-500">Total Recipes</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              {recipes.length}
            </h3>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
              <Eye size={21} className="text-green-600" />
            </div>

            <p className="text-sm text-gray-500">Published</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">1,180</h3>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
              <SlidersHorizontal size={21} className="text-orange-500" />
            </div>

            <p className="text-sm text-gray-500">Pending Review</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">68</h3>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50">
              <Heart size={21} className="text-pink-500" />
            </div>

            <p className="text-sm text-gray-500">Total Likes</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">24.8K</h3>
          </div>
        </div>

        {/* Table Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          {/* Toolbar */}
          <div className="flex flex-col gap-4 border-b border-gray-100 p-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-semibold text-gray-900">All Recipes</h2>
              <p className="mt-1 text-xs text-gray-400">
                {recipes.length} recipes available
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {/* Search */}
              <div className="flex h-10 w-full items-center rounded-xl border border-gray-200 bg-gray-50 px-3 sm:w-64">
                <Search size={17} className="text-gray-400" />

                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>

              {/* Filter */}
              <button className="flex h-10 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
                <SlidersHorizontal size={16} />
                Filter
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/70 text-left">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Recipe
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Category
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Cuisine
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Author
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Likes
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Status
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {recipes.map((recipe) => (
                  <tr
                    key={recipe._id}
                    className="transition hover:bg-gray-50/70"
                  >
                    {/* Recipe */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Image
                          width={70}
                          height={70}
                          alt={recipe?.title}
                          src={recipe?.image}
                          className="h-12 w-12 rounded-xl object-cover"
                        />

                        <div>
                          <p className="font-semibold text-gray-900">
                            {recipe.title}
                          </p>

                          <p className="mt-1 text-xs text-gray-400">
                            Recipe #{recipe._id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                        {recipe.category}
                      </span>
                    </td>

                    {/* Cuisine */}
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {recipe.cuisine}
                    </td>

                    {/* Author */}
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {recipe.author.authorName || "Unknown"}
                    </td>

                    {/* Likes */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
                        <Heart
                          size={15}
                          className="fill-red-500 text-red-500"
                        />
                        {recipe.likes}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                          recipe.status === "Published"
                            ? "bg-green-50 text-green-600"
                            : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {recipe.status || "Active"}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700">
                          <Link
                            className="cursor-pointer"
                            href={`/recipe-details/${recipe._id}`}
                          >
                            {" "}
                            <Eye size={21} className="text-green-600" />
                          </Link>
                        </button>

                        <DeleteRecipebtn recipe={recipe}></DeleteRecipebtn>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium text-gray-700">1–5</span> of{" "}
              <span className="font-medium text-gray-700">1,248</span> recipes
            </p>

            <div className="flex items-center gap-1">
              <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-400">
                Previous
              </button>

              <button className="rounded-lg bg-[#c93632] px-3 py-2 text-sm font-medium text-white">
                1
              </button>

              <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                2
              </button>

              <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                3
              </button>

              <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageRecipes;
