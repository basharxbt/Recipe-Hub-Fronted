"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RecipeCategorySearch = ({ categories, filters }) => {
  const [selected, setSelected] = useState(
    filters?.category || filters?.cuisine || filters?.search || "",
  );

  const router = useRouter();

  const routerHandler = (recipe) => {
    const key = Object.keys(recipe)[0];
    const value = recipe[key];

    setSelected(value);

    const sp = new URLSearchParams();
    sp.set(key, value);

    router.push(`/all-recipe?${sp.toString()}`);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {categories.map((recipe, ind) => {
          const key = Object.keys(recipe)[0];
          const value = recipe[key];

          return (
            <button
              key={ind}
              type="button"
              onClick={() => routerHandler(recipe)}
              className={`cursor-pointer rounded-3xl border px-5 py-2 text-sm font-medium shadow-sm transition ${
                selected === value
                  ? "border-[#c93632] bg-[#c93632] text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-[#c93632] hover:text-[#c93632]"
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeCategorySearch;
