import FeaturedSection from "@/components/FeaturedSection";
import FeedbackSection from "@/components/FeedbackSection";
import Hero from "@/components/Hero";
import PopularRecipe from "@/components/PopularRecipe";
import WhyRecipeHub from "@/components/WhyRecipeHub";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero></Hero>
      <FeaturedSection></FeaturedSection>
      <PopularRecipe></PopularRecipe>
      <WhyRecipeHub></WhyRecipeHub>
      <FeedbackSection></FeedbackSection>
    </div>
  );
}
