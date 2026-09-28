"use client";

import { recipeFeatureUpdate } from "@/lib/data";
import { useState } from "react";
import toast from "react-hot-toast";

const RecipefeatureUpdateBtn = ({ recipe }) => {
  const [isFeatured, setIsFeatured] = useState(
    recipe.isFeatured === "Featured",
  );
  const [loading, setLoading] = useState(false);

  const updateHandler = async () => {
    if (loading) return;

    try {
      setLoading(true);

      const recipeUpdate = await recipeFeatureUpdate(recipe._id);

      setIsFeatured(recipeUpdate.isFeatured === "Featured");

      toast.success(
        recipeUpdate.isFeatured === "Featured"
          ? "Recipe featured successfully!"
          : "Recipe removed from featured!",
      );
    } catch (error) {
      console.error("Feature update error:", error);

      toast.error("Failed to update recipe status.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={updateHandler}
      disabled={loading}
      className={`rounded-xl px-3 py-1 text-sm font-medium shadow-sm transition-all duration-200 ${
        isFeatured
          ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
          : "bg-[#FFF7ED] text-[#F06E81] hover:bg-[#ffedd5]"
      } ${loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      {loading ? "Updating..." : isFeatured ? "UnFeature" : "Feature"}
    </button>
  );
};

export default RecipefeatureUpdateBtn;
