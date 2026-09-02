import { recipeData } from "@/lib/data";
import RecipeCard from "./RecipeCard";

const FeaturedSection = async () => {
  const recipes = await recipeData();
  console.log(recipes);
  return (
    <div className="py-20">
      <h1 className="text-3xl text-center py-10">Featured Recipes</h1>
      <div className="grid grid-cols-4 gap-5">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
