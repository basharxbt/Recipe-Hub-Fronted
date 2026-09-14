import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  ChefHat,
  Flag,
  CreditCard,
} from "lucide-react";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const AdminAside = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <aside className="hidden min-h-screen w-72 border-r border-gray-200 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-20 items-center gap-3 border-b border-gray-100 px-7">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c93632] text-white shadow-lg shadow-red-100">
          <ChefHat size={23} />
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight">RecipeHub</h1>
          <p className="text-xs text-gray-400">Admin Panel</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-7">
        <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-widest text-gray-400">
          Administration
        </p>

        <div className="space-y-1">
          {/* Dashboard */}
          <Link
            href="/admin"
            className="flex items-center gap-3 rounded-xl bg-[#c93632] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-red-100"
          >
            <LayoutDashboard size={19} />
            Dashboard
          </Link>

          {/* Manage Users */}
          <Link
            href="/admin/users"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            <Users size={19} />
            Manage Users
          </Link>

          {/* Manage Recipes */}
          <Link
            href="/admin/recipes"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            <ChefHat size={19} />
            Manage Recipes
          </Link>

          {/* Reports */}
          <Link
            href="/admin/reports"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            <Flag size={19} />
            Reports
          </Link>

          {/* Transactions */}
          <Link
            href="/admin/transactions"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            <CreditCard size={19} />
            Transactions
          </Link>
        </div>
      </nav>

      {/* Admin Profile */}
      <div className="border-t border-gray-100 p-5">
        <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name || "Admin"}
              width={42}
              height={42}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#c93632] text-sm font-bold text-white">
              {session?.user?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-gray-800">
              {session?.user?.name || "Admin"}
            </p>

            <p className="truncate text-xs text-gray-400">
              {session?.user?.email}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminAside;
