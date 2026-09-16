import RecipeCard from "@/components/RecipeCard";
import { recipeData, searchRecipe } from "@/lib/data";
import React from "react";
import { Search } from "lucide-react";
import Searchbtn from "@/components/Searchbtn";
import NoRecipeFound from "@/components/NoRecipeFound";

const AllRecipe = async ({ searchParams }) => {
  const { search } = await searchParams;
  console.log(search, "this is search params from all recipe");

  const allRecipes = await searchRecipe(search);
  const categories = [
    { type: "Dinner" },
    { type: "Launch" },
    { type: "Breakfast" },
    { type: "Pizza" },
    { type: "Burger" },
  ];
  return (
    <div className="min-h-screen container mx-auto ">
      <div className="my-5">
        <h1 className="text-4xl font-bold mb-6">Discover Delicious Recipes</h1>
      </div>
      {/* recipe catagoris */}{" "}
      <div>
        <Searchbtn />
      </div>
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
      <div className="my-10">
        {allRecipes.length === 0 ? (
          <NoRecipeFound search={search}></NoRecipeFound>
        ) : (
          <div className="grid grid-cols-4 gap-5">
            {allRecipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRecipe;
