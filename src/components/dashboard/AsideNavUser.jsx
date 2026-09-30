"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  ChefHat,
  Plus,
  Bookmark,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

const AsideNavUser = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "My Recipes",
      href: "/dashboard/myrecipes",
      icon: ChefHat,
    },
    {
      name: "Add Recipe",
      href: "/add-recipe",
      icon: Plus,
    },
    {
      name: "Favorite Recipes",
      href: "/dashboard/favoriterecipe",
      icon: Bookmark,
    },
  ];

  return (
    <>
      <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-widest text-gray-400">
        Workspace
      </p>

      <div className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-[#c93632] font-semibold text-white shadow-md shadow-red-100"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon size={19} />
              {item.name}
            </Link>
          );
        })}
      </div>

      <p className="mb-3 mt-10 px-3 text-[11px] font-bold uppercase tracking-widest text-gray-400">
        Account
      </p>

      <Link
        href="/dashboard/profile"
        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
          pathname === "/dashboard/profile"
            ? "bg-[#c93632] font-semibold text-white shadow-md shadow-red-100"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        }`}
      >
        <Settings size={19} />
        Settings
      </Link>
    </>
  );
};

export default AsideNavUser;
