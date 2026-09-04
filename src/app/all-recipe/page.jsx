import RecipeCard from "@/components/RecipeCard";
import { recipeData } from "@/lib/data";
import React from "react";
import { Search } from "lucide-react";

const AllRecipe = async () => {
  const categories = [
    { type: "Dinner" },
    { type: "Launch" },
    { type: "Breakfast" },
    { type: "Pizza" },
    { type: "Burger" },
  ];

  const allRecipes = await recipeData();

  return (
    <div className="min-h-screen container mx-auto ">
      <div className="my-5">
        <h1 className="text-4xl font-bold mb-6">Discover Delicious Recipes</h1>
      </div>
      {/* recipe catagoris */}{" "}
      <form
        // onSubmit={handleSearch}
        className="mx-auto flex w-full max-w-2xl items-center rounded-2xl border-4 border-white bg-white p-1 shadow-lg"
      >
        <input
          type="text"
          //   value={search}
          //   onChange={(e) => setSearch(e.target.value)}
          placeholder="Find what do you want to cook today"
          className="h-14 min-w-0 flex-1 bg-transparent px-6 text-base text-gray-700 outline-none placeholder:text-gray-500"
        />

        <button
          type="submit"
          aria-label="Search"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#c93632] text-white transition hover:bg-[#ad302d]"
        >
          <Search size={26} strokeWidth={2} />
        </button>
      </form>
      <div className="flex gap-5 items-center justify-center mt-5 mb-10">
        <p className="my-3 text-neutral-500">Popular Searches: </p>
        <div className="flex  flex-wrap gap-3">
          {categories.map((recipe, ind) => {
            return (
              <button
                key={ind}
                className="px-5 py-2 border border-gray-200 shadow-sm cursor-pointer   rounded-3xl"
              >
                {recipe.type}
              </button>
            );
          })}
        </div>
      </div>
      <div className="my-10"> </div>
      <div className="grid grid-cols-3 gap-5">
        {allRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipe;
