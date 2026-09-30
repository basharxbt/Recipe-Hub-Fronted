import RecipeCard from "@/components/RecipeCard";
import { recipeData, searchRecipe } from "@/lib/data";
import React from "react";
import { Search } from "lucide-react";
import Searchbtn from "@/components/Searchbtn";
import NoRecipeFound from "@/components/NoRecipeFound";
import { PaginationControlled } from "@/components/PaginationRecipesPage";
import RecipeCategorySearch from "@/components/dashboard/RecipeCategorySearch";

const AllRecipe = async ({ searchParams }) => {
  const searchQuery = await searchParams;
  console.log(searchQuery, "this is searchQuery");
  const sp = new URLSearchParams();
  console.log(sp, "this is sp");

  const search = searchQuery?.search || "";
  const page = searchQuery?.page || "";
  const category = searchQuery?.category || "";
  const cuisine = searchQuery?.cuisine || "";

  if (search) {
    sp.set("search", search);
  }
  if (page) {
    sp.set("page", page);
  }
  if (category) {
    sp.set("category", category);
  }
  if (cuisine) {
    sp.set("cuisine", page);
  }

  const allRecipes = await searchRecipe(sp);
  const recipesLength = await searchRecipe("");
  const totalLength = recipesLength.length;
  console.log(totalLength, "this is all recipe legnth");

  const categories = [
    { category: "Dinner" },
    { category: "Lunch" },
    { category: "Breakfast" },
    { category: "Dessert" },
    { cuisine: "Italian" },
    { cuisine: "Chinese" },
    { cuisine: "Bangladeshi" },
    { search: "Pizza" },
    { search: "Burger" },
    { search: "Pasta" },
  ];
  return (
    <div className="min-h-screen container mx-auto ">
      <div className="my-5">
        <h1 className="text-4xl font-bold mb-6">Discover Delicious Recipes</h1>
      </div>

      <div>
        <Searchbtn filter={searchQuery} />
      </div>
      <div className="flex gap-5 items-center justify-center mt-5 mb-10">
        <p className="my-3 text-neutral-500">Popular Searches: </p>
        <RecipeCategorySearch
          filters={searchQuery}
          categories={categories}
        ></RecipeCategorySearch>
      </div>
      <div className="my-10">
        {allRecipes.length === 0 ? (
          <NoRecipeFound search={search}></NoRecipeFound>
        ) : (
          <div className="flex flex-wrap justify-around gap-5">
            {allRecipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        )}
        <PaginationControlled
          totalLength={totalLength}
          filters={searchQuery}
        ></PaginationControlled>
      </div>
    </div>
  );
};

export default AllRecipe;
