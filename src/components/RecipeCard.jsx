"use client";

import Image from "next/image";
import { Clock3, Heart, Bookmark, ChefHat, Star } from "lucide-react";

const RecipeCard = ({ recipe }) => {
  return (
    <article className="group w-full max-w-[340px]">
      {/* Image */}
      <div className="relative h-[420px] overflow-hidden rounded-2xl">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Rating */}
        <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-2 shadow-sm">
          <Star size={15} fill="#f5c518" className="text-[#f5c518]" />
          <span className="text-sm font-semibold">{recipe.rating}</span>
        </div>

        {/* Actions */}
        <div className="absolute right-4 top-4 flex flex-col gap-2">
          <button
            aria-label="Like recipe"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#c93632] shadow-sm transition hover:scale-110"
          >
            <Heart size={19} />
          </button>

          <button
            aria-label="Save recipe"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#c93632] shadow-sm transition hover:scale-110"
          >
            <Bookmark size={19} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="pt-5">
        <p className="mb-2 text-sm font-semibold text-[#c93632]">
          {recipe.category}
        </p>

        <h2 className="text-[21px] font-bold leading-7 text-black transition group-hover:text-[#c93632]">
          {recipe.title}
        </h2>

        {/* Details */}
        <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-[#8b8b8b]">
          <div className="flex items-center gap-1.5">
            <Clock3 size={16} />
            <span>{recipe.time}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>{recipe.cuisineIcon}</span>
            <span>{recipe.cuisine}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <ChefHat size={16} />
            <span>{recipe.level}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
