"use client";

import Link from "next/link";
import {
  ChevronDown,
  Bookmark,
  UserRound,
  
  Menu,
  X,
} from "lucide-react";


import Image from "next/image";
import { useSession } from "@/lib/auth-client";

import { useState } from "react";

import logo from "../../public/logo.jpg";
import { authClient } from "@/lib/auth-client";
import ProfileDropdown from "./ProfileNavbar";

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const { data: userInfo, isPending } = useSession();

  // console.log("Session Data:", { userInfo, isPending });

  const [mobileMenu, setMobileMenu] = useState(false);

  const signoutUser = async () => {
    await authClient.signOut();
  };

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Recipes",
      path: "/all-recipe",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Categories",
      path: "/categories",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Features",
      path: "/features",
    },
  ];
  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <nav className="mx-auto flex container  items-center justify-between px-5 py-4 lg:py-5">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[8px] bg-[#c93632] text-white">
            <Image src={logo} alt="RecipeHub Logo" />
          </div>

          <span className="text-[26px] font-bold tracking-[-1px] text-[#c93632]">
            RecipeHub
          </span>
        </Link>

        <div className="hidden items-center gap-[34px] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item?.name}
              href={item.path}
              className="flex items-center gap-2 text-[15px] font-semibold text-[#111]"
            >
              {item.name}

              {item.dropdown && (
                <ChevronDown size={15} strokeWidth={2} className="mt-[1px]" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-[20px] lg:flex">
          <Link
            href="/favoriterecipe"
            aria-label="Bookmarks"
            className="text-black transition hover:text-[#c93632]"
          >
            <Bookmark size={21} strokeWidth={1.8} />
          </Link>
          {userInfo ? (
            <ProfileDropdown></ProfileDropdown>
          ) : (
            <Link
              href={"/signin"}
              aria-label="Profile"
              className="text-black transition hover:text-[#c93632]"
            >
              <UserRound size={21} strokeWidth={1.8} />
            </Link>
          )}

          <Link
            href="/add-recipe"
            className="ml-1 rounded-[7px] bg-[#c93632] px-[21px] py-[13px] text-[14px] font-bold text-white transition hover:bg-[#a92d29]"
          >
            Add Recipe
          </Link>
        </div>

    
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X size={27} /> : <Menu size={27} />}
        </button>
      </nav>

  
      {mobileMenu && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item?.name}
                href={item.path}
                onClick={() => setMobileMenu(false)}
                className="flex items-center justify-between border-b border-gray-100 py-4 text-[15px] font-semibold"
              >
                {item.name}
                <ChevronDown size={16} />
              </Link>
            ))}

            <Link
              href="/add-recipe"
              className="mt-5 rounded-[7px] bg-[#c93632] py-3 text-center text-sm font-bold text-white"
            >
              Add Recipe
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
