import {
  ArrowRight,
  ChefHat,
  Compass,
  Globe2,
  Search,
  Share2,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      className="min-h-[750px] w-full bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/herobg.png')",
      }}
    >
      <div className="flex justify-between">
        {/* left */}
        <div className="  px-25 py-20 flex flex-col items-start justify-start">
          <p className="mb-5 text-sm font-bold uppercase tracking-[5px] text-[#c93632]">
            Discover <span className="mx-2">•</span> Cook{" "}
            <span className="mx-2">•</span> Share
          </p>
          <h1 className="text-6xl font-bold">
            Good Food Starts
            <br />
            With a <span className="text-[#c93632]">Great Recipe.</span>
          </h1>
          <p className="mt-7 max-w-[570px] text-[17px] leading-8 text-gray-600">
            Discover delicious recipes, explore cuisines from around the world,
            and find inspiration for your next meal.
          </p>

          <div className="mt-8 flex max-w-[575px] items-center rounded-full bg-white p-2 shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
            <Search className="ml-4 text-gray-700" size={21} />

            <input
              type="text"
              placeholder="Search recipes, ingredients or cuisines..."
              className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-gray-400"
            />

            <button className="shrink-0 rounded-full bg-[#c93632] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#a92f2b]">
              Search
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/recipes"
              className="flex items-center gap-3 rounded-lg bg-[#c93632] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#ad302c]"
            >
              <Compass size={19} />
              Explore Recipes
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/add-recipe"
              className="flex items-center gap-3 rounded-lg border-2 border-[#c93632] bg-white px-7 py-4 text-sm font-bold text-[#c93632] transition hover:-translate-y-1 hover:bg-[#fff4f2]"
            >
              <Share2 size={19} />
              Share Your Recipe
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0ed] text-[#c93632]">
                <ChefHat size={21} />
              </div>

              <div>
                <p className="text-xl font-bold">10K+</p>
                <p className="text-sm text-gray-500">Recipes</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0ed] text-[#c93632]">
                <Globe2 size={21} />
              </div>

              <div>
                <p className="text-xl font-bold">50+</p>
                <p className="text-sm text-gray-500">Cuisines</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0ed] text-[#c93632]">
                <Users size={21} />
              </div>

              <div>
                <p className="text-xl font-bold">25K+</p>
                <p className="text-sm text-gray-500">Happy Cooks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 pb-12 container mx-auto ">
        <div className="rounded-3xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.07)]">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold">Popular Categories</h2>

            <Link
              href="/categories"
              className="flex items-center gap-2 text-sm font-bold text-[#c93632]"
            >
              View all
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            <Category emoji="🍳" title="Breakfast" count="120+ recipes" />
            <Category emoji="🥗" title="Healthy" count="850+ recipes" />
            <Category emoji="🍰" title="Desserts" count="650+ recipes" />
            <Category emoji="🍜" title="Asian" count="920+ recipes" />
            <Category emoji="🍕" title="Italian" count="750+ recipes" />
            <Category emoji="🌱" title="Vegan" count="420+ recipes" />
          </div>
        </div>
      </div>
    </section>
  );
};
const Category = ({ emoji, title, count }) => {
  return (
    <Link
      href="#"
      className="group flex items-center gap-3 rounded-xl bg-[#fffaf7] p-4 transition hover:-translate-y-1 hover:bg-[#fff0ed]"
    >
      <span className="text-3xl transition group-hover:scale-110">{emoji}</span>

      <div>
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="mt-1 text-xs text-gray-500">{count}</p>
      </div>
    </Link>
  );
};

export default Hero;
