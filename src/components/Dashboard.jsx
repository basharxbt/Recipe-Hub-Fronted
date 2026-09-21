import Link from "next/link";
import {
  LayoutDashboard,
  ChefHat,
  Plus,
  Bookmark,
  Flag,
  Settings,
  Bell,
  Search,
  ChevronDown,
  Heart,
  ArrowUpRight,
} from "lucide-react";

import Stats from "./dashboard/Stats";
import { favoriteRecipe, recipeData, recipeDataByAuthor } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const UserDashboard = async () => {
  const allRecipes = recipeData();
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token, "this is token from dashboard");

  const userEmail = session?.user?.email;
  const savedRecipes = await favoriteRecipe(userEmail, token);
  console.log(savedRecipes, "this is from dasgbhoarrd");
  console.log(savedRecipes.length, "this is from dashboard");

  const totalRecipeByMe = await recipeDataByAuthor(userEmail);

  console.log(totalRecipeByMe, "this is total recipe by me");

  const recentRecipes = [
    {
      name: "Creamy Garlic Pasta",
      category: "Dinner",
      likes: 248,
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    },
    {
      name: "Chicken Biryani",
      category: "Main Course",
      likes: 194,
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
    },
    {
      name: "Classic Pancakes",
      category: "Breakfast",
      likes: 156,
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f7f5] text-gray-900">
      <div className="flex">
        {/* Sidebar */}

        <main className="min-w-0 flex-1">
          <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-5 sm:px-8">
            <div>
              <p className="text-xs font-medium text-gray-400">Workspace</p>
              <h2 className="text-xl font-bold">Dashboard</h2>
            </div>
          </header>

          <div className="p-5 sm:p-8">
            <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-sm font-medium text-[#c93632]">
                  Tuesday, September 1
                </p>

                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Good evening, Chef 👋
                </h1>

                <p className="mt-2 max-w-xl text-sm text-gray-500">
                  Here's what's happening with your recipes today.
                </p>
              </div>

              <Link
                href="/dashboard/add-recipe"
                className="flex w-fit items-center gap-2 rounded-xl bg-[#c93632] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-100 transition hover:-translate-y-0.5 hover:bg-[#b82f2b]"
              >
                <Plus size={18} />
                Create Recipe
              </Link>
            </section>

            <Stats
              savedRecipes={savedRecipes}
              totalRecipeByMe={totalRecipeByMe}
            ></Stats>

            {/* Bottom content */}
            <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_360px]">
              {/* Recent Recipes */}
              <div className="rounded-2xl border border-gray-200 bg-white">
                <div className="flex items-center justify-between border-b border-gray-100 p-5">
                  <div>
                    <h2 className="font-bold">Recent Recipes</h2>
                    <p className="mt-1 text-xs text-gray-400">
                      Your latest recipe activity
                    </p>
                  </div>

                  <Link
                    href="/dashboard/recipes"
                    className="flex items-center gap-1 text-xs font-semibold text-[#c93632]"
                  >
                    View all
                    <ArrowUpRight size={14} />
                  </Link>
                </div>

                <div className="divide-y divide-gray-100">
                  {recentRecipes.map((recipe) => (
                    <div
                      key={recipe.name}
                      className="flex items-center gap-4 p-5 transition hover:bg-gray-50"
                    >
                      <Image
                        width={150}
                        height={150}
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-16 w-16 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-semibold">
                          {recipe.name}
                        </h3>

                        <p className="mt-1 text-xs text-gray-400">
                          {recipe.category}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 text-sm font-semibold text-gray-600">
                        <Heart
                          size={15}
                          className="fill-[#c93632] text-[#c93632]"
                        />
                        {recipe.likes}
                      </div>

                      <button className="hidden rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold transition hover:bg-gray-50 sm:block">
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="mb-5">
                  <h2 className="font-bold">Quick Actions</h2>
                  <p className="mt-1 text-xs text-gray-400">
                    Manage your recipe workspace
                  </p>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/dashboard/add-recipe"
                    className="group flex items-center gap-4 rounded-xl border border-gray-100 p-4 transition hover:border-red-100 hover:bg-red-50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-[#c93632]">
                      <Plus size={19} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-semibold">Add New Recipe</p>
                      <p className="mt-0.5 text-xs text-gray-400">
                        Share something delicious
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-gray-300 transition group-hover:text-[#c93632]"
                    />
                  </Link>

                  <Link
                    href="/dashboard/saved"
                    className="group flex items-center gap-4 rounded-xl border border-gray-100 p-4 transition hover:border-red-100 hover:bg-red-50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                      <Bookmark size={19} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-semibold">Saved Recipes</p>
                      <p className="mt-0.5 text-xs text-gray-400">
                        Continue your favorites
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-gray-300 transition group-hover:text-[#c93632]"
                    />
                  </Link>

                  <Link
                    href="/dashboard/settings"
                    className="group flex items-center gap-4 rounded-xl border border-gray-100 p-4 transition hover:border-red-100 hover:bg-red-50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                      <Settings size={19} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-semibold">Account Settings</p>
                      <p className="mt-0.5 text-xs text-gray-400">
                        Manage your profile
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-gray-300 transition group-hover:text-[#c93632]"
                    />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
