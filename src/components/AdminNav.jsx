"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  ChefHat,
  Flag,
  CreditCard,
} from "lucide-react";

const AdminNav = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      name: "Manage Users",
      href: "/dashboard/admin/manageusers",
      icon: Users,
    },
    {
      name: "Manage Recipes",
      href: "/dashboard/admin/managerecipe",
      icon: ChefHat,
    },
    {
      name: "Reports",
      href: "/dashboard/admin/reports",
      icon: Flag,
    },
    {
      name: "Transactions",
      href: "/dashboard/admin/transactions",
      icon: CreditCard,
    },
  ];

  return (
    <nav className="flex-1 px-4 py-7">
      <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-widest text-gray-400">
        Administration
      </p>

      <div className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

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
    </nav>
  );
};

export default AdminNav;
