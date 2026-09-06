import { recipeSingleData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { Clock3, Globe2, Utensils, ChefHat, ForkKnifeIcon } from "lucide-react";
import { Heart, Bookmark, Share2, Flag } from "lucide-react";
import Action from "@/components/Action";
import Likebtn from "@/components/Likebtn";

const RecipeDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const recipe = await recipeSingleData(id);
  console.log(recipe);

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

              <h1 className="text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
                {recipe.title}
              </h1>

              <div className="my-5">
                {" "}
                <div className="flex flex-wrap items-center gap-x-16 gap-y-6">
                  {/* Cooking Time */}
                  <div>
                    <div className="flex items-center gap-3">
                      <Clock3 size={18} className="text-gray-500" />
                      <span className="text-sm font-semibold text-gray-900">
                        {recipe.time} min
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-gray-400">Cooking Time</p>
                  </div>

                  {/* Cuisine */}
                  <div>
                    <div className="flex items-center gap-3">
                      <ForkKnifeIcon size={19} className="text-gray-500" />
                      <span className="text-sm font-semibold text-gray-900">
                        {recipe.category}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-gray-400">Category</p>
                  </div>

                  {/* Difficulty */}
                  <div>
                    <div className="flex items-center gap-3">
                      <ChefHat size={19} className="text-gray-500" />
                      <span className="text-sm font-semibold text-gray-900">
                        {recipe.difficulty}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-gray-400">
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
            <h2 className="text-2xl font-bold text-[#111]">
              About This Recipe
            </h2>

            <div className=" max-w-3xl">
              <p className="text-base leading-7 text-gray-600">
                {recipe.description}
              </p>
            </div>
          </section>
          <Action recipe={recipe}></Action>
          <div className="mt-8 h-full rounded-2xl border border-[#eaded8]  p-6 w-full">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c93632] text-xl text-white">
                🔒
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Unlock the Full Recipe
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Get access to the complete ingredients, step-by-step
                  instructions, cooking tips, and everything you need to make
                  this recipe at home.
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-[#eaded8] pt-5">
              <div>
                <p className="text-xs text-gray-500">One-time purchase</p>

                <p className="text-2xl font-bold text-[#c93632]">$2.99</p>
              </div>

              <button className="rounded-lg bg-[#c93632] px-6 py-3 font-semibold text-white transition hover:bg-[#ad302d]">
                Unlock Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
