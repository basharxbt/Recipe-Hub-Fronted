"use client";

import { useState } from "react";
import {
  ImagePlus,
  Clock3,
  ChefHat,
  Utensils,
  List,
  FileText,
  Upload,
  X,
} from "lucide-react";
import { addRecipeData } from "@/lib/data";

const AddRecipePage = () => {
  const [imagePreview, setImagePreview] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const removeImage = () => {
    setImagePreview("");
    setImageUrl("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newRecipe = Object.fromEntries(formData.entries());
    const recipeData = await addRecipeData(newRecipe);
    console.log("New Recipe Data:", recipeData);
  };

  return (
    <main className="min-h-screen bg-[#faf7f4] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-[3px] text-[#c93632]">
            Share your recipe
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
            Add a New Recipe
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            Share your favorite recipe with the Platea community and inspire
            others to cook something delicious.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#eee6e1] bg-white p-5 shadow-sm sm:p-8"
        >
          {/* Basic Information */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0ed] text-[#c93632]">
                <ChefHat size={21} />
              </div>

              <div>
                <h2 className="font-bold text-[#171717]">Recipe Information</h2>
                <p className="text-xs text-gray-500">
                  Tell us about your recipe
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Recipe Name */}
              <div className="md:col-span-2">
                <label
                  htmlFor="recipeName"
                  className="mb-2 block text-sm font-semibold text-[#222]"
                >
                  Recipe Name
                </label>

                <input
                  id="recipeName"
                  name="title"
                  type="text"
                  placeholder="e.g. Creamy Garlic Mushroom Pasta"
                  required
                  className="w-full rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-semibold text-[#222]"
                >
                  Category
                </label>

                <div className="relative">
                  <Utensils
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full appearance-none rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 pl-11 text-sm outline-none focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                  >
                    <option value="">Select category</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Snack">Snack</option>
                    <option value="Drinks">Drinks</option>
                  </select>
                </div>
              </div>

              {/* Cuisine */}
              <div>
                <label
                  htmlFor="cuisine"
                  className="mb-2 block text-sm font-semibold text-[#222]"
                >
                  Cuisine Type
                </label>

                <select
                  id="cuisine"
                  name="cuisine"
                  required
                  className="w-full rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 text-sm outline-none focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                >
                  <option value="">Select cuisine</option>
                  <option value="Italian">Italian</option>
                  <option value="Asian">Asian</option>
                  <option value="Bangladeshi">Bangladeshi</option>
                  <option value="Indian">Indian</option>
                  <option value="Mexican">Mexican</option>
                  <option value="American">American</option>
                  <option value="Mediterranean">Mediterranean</option>
                  <option value="Lebanese">Lebanese</option>
                </select>
              </div>

              {/* Difficulty */}
              <div>
                <label
                  htmlFor="difficulty"
                  className="mb-2 block text-sm font-semibold text-[#222]"
                >
                  Difficulty Level
                </label>

                <select
                  id="difficulty"
                  name="difficulty"
                  required
                  className="w-full rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 text-sm outline-none focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                >
                  <option value="">Select difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              {/* Preparation Time */}
              <div>
                <label
                  htmlFor="time"
                  className="mb-2 block text-sm font-semibold text-[#222]"
                >
                  Preparation Time
                </label>

                <div className="relative">
                  <Clock3
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="time"
                    name="time"
                    type="number"
                    min="1"
                    placeholder="e.g. 30"
                    required
                    className="w-full rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 pl-11 text-sm outline-none placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    minutes
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Image Upload */}
          <section className="mt-10 border-t border-[#eee6e1] pt-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0ed] text-[#c93632]">
                <ImagePlus size={21} />
              </div>

              <div>
                <h2 className="font-bold text-[#171717]">Recipe Image</h2>
                <p className="text-xs text-gray-500">
                  Upload a beautiful photo of your dish
                </p>
              </div>
            </div>
            <input
              id="image"
              name="image"
              type="text"
              placeholder="e.g. https://example.com/recipe-image.jpg"
              required
              className="w-full rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
            />
          </section>

          {/* Ingredients */}
          <section className="mt-10 border-t border-[#eee6e1] pt-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0ed] text-[#c93632]">
                <List size={21} />
              </div>

              <div>
                <h2 className="font-bold text-[#171717]">Ingredients</h2>
                <p className="text-xs text-gray-500">
                  Add all ingredients needed for the recipe
                </p>
              </div>
            </div>

            <textarea
              name="ingredients"
              rows={7}
              required
              placeholder={`2 cups pasta
1 cup heavy cream
3 cloves garlic
1 cup mushrooms
1/2 cup parmesan cheese
Salt and black pepper to taste`}
              className="w-full resize-none rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 text-sm leading-6 outline-none placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
            />

            <p className="mt-2 text-xs text-gray-400">
              Add each ingredient on a separate line.
            </p>
          </section>

          {/* Instructions */}
          <section className="mt-10 border-t border-[#eee6e1] pt-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0ed] text-[#c93632]">
                <FileText size={21} />
              </div>

              <div>
                <h2 className="font-bold text-[#171717]">
                  Cooking Instructions
                </h2>

                <p className="text-xs text-gray-500">
                  Explain how to prepare your recipe
                </p>
              </div>
            </div>

            <textarea
              name="instructions"
              rows={9}
              required
              placeholder={`1. Boil the pasta until al dente.
                 2. Heat olive oil in a pan.
          3. Add garlic and mushrooms and cook until soft.
         4. Pour in the cream and simmer.
         5. Add parmesan cheese and season with salt and pepper.
           6. Add the cooked pasta and mix well.
          7. Serve hot and enjoy!`}
              className="w-full resize-none rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 text-sm leading-6 outline-none placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
            />

            <p className="mt-2 text-xs text-gray-400">
              Add each cooking step on a separate line.
            </p>
          </section>

          {/* Submit */}
          <div className="mt-10 flex flex-col-reverse gap-3 border-t border-[#eee6e1] pt-7 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="rounded-lg border border-[#ded6d1] px-7 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={uploading}
              className="rounded-lg bg-[#c93632] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#ad302d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {uploading ? "Uploading..." : "Publish Recipe"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddRecipePage;
