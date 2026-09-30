import { BookOpen, Clock3, Heart, Users } from "lucide-react";

const WhyRecipeHub = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Easy-to-Follow Recipes",
      description:
        "Clear ingredients and simple step-by-step instructions make cooking easier.",
    },
    {
      icon: Clock3,
      title: "Save Your Time",
      description:
        "Discover recipes based on your available cooking time and get started quickly.",
    },
    {
      icon: Heart,
      title: "Save Your Favorites",
      description:
        "Keep your favorite recipes in one place and come back to them anytime.",
    },
    {
      icon: Users,
      title: "Cook Together",
      description:
        "Discover recipes shared by a growing community of food lovers and home cooks.",
    },
  ];

  return (
    <section className="bg-[#fffaf7] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c93632]">
            Why RecipeHub
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Everything you need to enjoy cooking
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500 md:text-base">
            From discovering new dishes to saving your favorites, RecipeHub
            makes your cooking journey simple and enjoyable.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdf0ee]">
                  <Icon size={22} className="text-[#c93632]" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyRecipeHub;
