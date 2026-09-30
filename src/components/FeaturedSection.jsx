import { recipeData } from "@/lib/data";
import RecipeCard from "./RecipeCard";

const FeaturedSection = async () => {
  const recipes = await recipeData();
  console.log(recipes);
  return (
    <div className="py-10 md:py-20 container mx-auto">
      <h1 className="text-3xl text-center py-10">Featured Recipes</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {recipes.map((recipe) =>
          recipe.isFeatured ? (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ) : (
            ""
          ),
        )}
      </div>
    </div>
  );
};

export default FeaturedSection;
