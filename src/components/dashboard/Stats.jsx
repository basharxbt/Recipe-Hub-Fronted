import { Bookmark, BookOpen, Heart, TrendingUp, Users } from "lucide-react";
import React from "react";

const Stats = ({ savedRecipes, totalRecipeByMe }) => {
  const totalLikes = totalRecipeByMe.reduce(
    (total, recipe) => total + Number(recipe.likes || 0),
    0,
  );

  console.log(totalLikes, "TOTAL LIKES");
  const stats = [
    {
      title: "Total Recipes",
      value: totalRecipeByMe.length,
      change: "+12.5%",
      icon: BookOpen,
    },
    {
      title: "Saved Recipes",
      value: savedRecipes.length,
      change: "+8.2%",
      icon: Bookmark,
    },
    {
      title: "Total Likes",
      value: totalLikes,
      change: "+18.4%",
      icon: Heart,
    },
    {
      title: "Total Purchased Recipe",
      value: "12.8K",
      change: "+24.6%",
      icon: Users,
    },
  ];
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-100"
          >
            <div className="mb-6 flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#c93632]">
                <Icon size={20} />
              </div>

              <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <TrendingUp size={12} />
                {stat.change}
              </span>
            </div>

            <p className="text-sm text-gray-500">{stat.title}</p>

            <h3 className="mt-1 text-2xl font-bold">{stat.value}</h3>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
