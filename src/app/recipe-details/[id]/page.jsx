import { recipeSingleData } from "@/lib/data";
import Image from "next/image";
import React from "react";

const RecipeDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const recipe = await recipeSingleData(id);
  console.log(recipe);

  return (
    <div className="min-h-screen container mx-auto">
      <div className="flex justify-between">
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={700}
          height={700}
        ></Image>

        <div>
          <section className="bg-[#f8f8f8] px-6 py-10">
            <div className="mx-auto max-w-7xl">
              <p className="mb-3 text-sm font-semibold text-[#c93632]">Pasta</p>

              <h1 className="text-3xl font-bold tracking-tight text-[#111] md:text-4xl">
                Creamy Garlic Mushroom Penne Pasta
              </h1>

              <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
