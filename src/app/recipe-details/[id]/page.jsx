import { favoriteRecipe, recipeSingleData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { Clock3, ChefHat, ForkKnifeIcon } from "lucide-react";

import Action from "@/components/Action";
import Likebtn from "@/components/Likebtn";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const RecipeDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const recipe = await recipeSingleData(id);
  console.log(recipe);
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userEmail = session?.user?.email;
  console.log(userEmail, "this is user email from favorite page");

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const savedRecipes = await favoriteRecipe(userEmail, token);
  console.log(savedRecipes, "this is saved recipes");
  const savedRecipesCount = savedRecipes.length;
  console.log(
    savedRecipesCount,
    "this is saved recipes count from details page",
  );
  return (
    <div className="min-h-screen container mx-auto mt-10">
      <div className="flex justify-around">
        <Image
          className="rounded-2xl "
          src={recipe.image}
          alt={recipe.title}
          width={400}
          height={400}
        ></Image>

        <div
          className="items-stretch h-full
        "
        >
          <section>
            <div className="mx-auto max-w-7xl">
              <p className="mb-3 text-sm font-semibold text-[#c93632]">
                {recipe.cuisine}
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-[#111] dark:text-white md:text-4xl">
                {recipe.title}
              </h1>

              <div className="my-5">
                {" "}
                <div className="flex flex-wrap items-center gap-x-16 gap-y-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <Clock3
                        size={18}
                        className="text-gray-500 dark:text-gray-400"
                      />
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {recipe.time} min
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                      Cooking Time
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <ForkKnifeIcon
                        size={19}
                        className="text-gray-500 dark:text-gray-400"
                      />
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {recipe.category}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                      Category
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <ChefHat
                        size={19}
                        className="text-gray-500 dark:text-gray-400"
                      />
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {recipe.difficulty}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                      Degree of Difficulty
                    </p>
                  </div>

                  <Likebtn recipe={recipe}></Likebtn>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10"></div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#111] dark:text-white">
              About This Recipe
            </h2>

            <div className=" max-w-3xl">
              <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                {recipe.description}
              </p>
            </div>
          </section>
          <Action
            savedRecipesCount={savedRecipesCount}
            recipe={recipe}
          ></Action>
          <div className="mt-8 h-full rounded-2xl border border-[#eaded8] dark:border-gray-700 p-6 w-full">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c93632] text-xl text-white">
                🔒
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Unlock the Full Recipe
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  Get access to the complete ingredients, step-by-step
                  instructions, cooking tips, and everything you need to make
                  this recipe at home.
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-[#eaded8] dark:border-gray-700 pt-5">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  One-time purchase
                </p>

                <p className="text-2xl font-bold text-[#c93632]">$2.99</p>
              </div>
              <form action="/api/checkout_sessions" method="POST">
                <section>
                  <input
                    type="hidden"
                    name="recipeId"
                    value={recipe._id.toString()}
                  />
                  <input
                    type="hidden"
                    name="premiumType"
                    value="premium_recipe"
                  />
                  <button
                    type="submit"
                    role="link"
                    className="rounded-lg cursor-pointer bg-[#c93632] px-6 py-3 font-semibold text-white transition hover:bg-[#ad302d]"
                  >
                    Checkout
                  </button>
                </section>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
