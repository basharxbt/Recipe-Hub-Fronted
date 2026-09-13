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
import { favoriteRecipe, recipeData } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const Dashboard = async () => {
  const allRecipes = recipeData();
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userEmail = session?.user?.email;
  const savedRecipes = await favoriteRecipe(userEmail);
  console.log(savedRecipes.length, "this is from dashboard");

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
        <aside className="hidden min-h-screen w-72 border-r border-gray-200 bg-white lg:flex lg:flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center gap-3 border-b border-gray-100 px-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c93632] text-white shadow-lg shadow-red-100">
              <ChefHat size={23} />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">RecipeHub</h1>
              <p className="text-xs text-gray-400">Your kitchen, your story</p>
            </div>
          </div>

          <nav className="flex-1 px-4 py-7">
            <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-widest text-gray-400">
              Workspace
            </p>

            <div className="space-y-1">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-xl bg-[#c93632] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-red-100"
              >
                <LayoutDashboard size={19} />
                Dashboard
              </Link>

              <Link
                href="/dashboard/recipes"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
              >
                <ChefHat size={19} />
                My Recipes
              </Link>

              <Link
                href="/dashboard/add-recipe"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
              >
                <Plus size={19} />
                Add Recipe
              </Link>

              <Link
                href="/dashboard/saved"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
              >
                <Bookmark size={19} />
                Saved Recipes
              </Link>

              <Link
                href="/dashboard/reports"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
              >
                <Flag size={19} />
                Reports
              </Link>
            </div>

            <p className="mb-3 mt-10 px-3 text-[11px] font-bold uppercase tracking-widest text-gray-400">
              Account
            </p>

            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <Settings size={19} />
              Settings
            </Link>
          </nav>

          <div className="border-t border-gray-100 p-5">
            <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
              <Image
                src={session?.user?.image}
                alt={session?.user?.name}
                width={50}
                height={50}
                className="rounded-full"
              ></Image>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">
                  {" "}
                  {session?.user?.name}
                </p>
                <p className="truncate text-xs text-gray-400">
                  {session?.user?.email}
                </p>
              </div>

              <button className="text-gray-400 hover:text-gray-700 cursor-pointer">
                {/* <LogOut onClick={() => authClient.signOut()} size={17} /> */}
              </button>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-5 sm:px-8">
            <div>
              <p className="text-xs font-medium text-gray-400">Workspace</p>
              <h2 className="text-xl font-bold">Dashboard</h2>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden h-10 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-400 transition hover:bg-white sm:flex">
                <Search size={17} />
                Search
                <span className="ml-5 rounded-md border bg-white px-1.5 py-0.5 text-[10px]">
                  ⌘ K
                </span>
              </button>

              <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition hover:bg-gray-50">
                <Bell size={18} />

                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#c93632]" />
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-1.5 pr-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-sm font-bold text-[#c93632]">
                  S
                </div>

                <ChevronDown size={15} className="text-gray-400" />
              </button>
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

            <Stats savedRecipes={savedRecipes}></Stats>

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
                      <img
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

export default Dashboard;
