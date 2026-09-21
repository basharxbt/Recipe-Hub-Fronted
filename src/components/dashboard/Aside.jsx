import Link from "next/link";
import {
  LayoutDashboard,
  ChefHat,
  Plus,
  Bookmark,
  Flag,
  Settings,
} from "lucide-react";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

import AsideLogoutBtn from "./AsideLogoutBtn";

const Aside = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div>
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
              href="/dashboard/myrecipes"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <ChefHat size={19} />
              My Recipes
            </Link>

            <Link
              href="add-recipe"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <Plus size={19} />
              Add Recipe
            </Link>

            <Link
              href="/dashboard/favoriterecipe"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <Bookmark size={19} />
              Favorite Recipes
            </Link>
          </div>

          <p className="mb-3 mt-10 px-3 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            Account
          </p>

          <Link
            href="/dashboard/profile"
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

            <AsideLogoutBtn></AsideLogoutBtn>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
