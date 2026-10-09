"use client";
import {
  ImagePlus,
  Clock3,
  ChefHat,
  Utensils,
  List,
  FileText,
} from "lucide-react";
import { addRecipeData } from "@/lib/data";
import { useSession } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";
const AddRecipePage = () => {
  const { data: session } = useSession();
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const authorName = session?.user?.name;
  const authorId = session?.user?.id;
  const authorEmail = session?.user?.email;
  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      event.target.value = "";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size must be less than 5MB");
      event.target.value = "";
      return;
    }
    setImageUrl("");
    setUploadError("");
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("imageFile", file);
      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "ImgBB upload failed");
      }
      if (!result.imageUrl) {
        throw new Error("ImgBB did not return an image URL");
      }
      setImageUrl(result.imageUrl);
      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error("ImgBB upload error:", error);
      setUploadError(error.message || "Something went wrong during upload");
      toast.error(error.message || "Image upload failed");
    } finally {
      setUploading(false);
    }
  };
  const handleImageLink = (event) => {
    setImageUrl(event.target.value.trim());
    setUploadError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (uploading) {
      toast.error("Please wait for the image upload to finish.");
      return;
    }
    if (!imageUrl) {
      toast.error("Please upload an image or enter an image URL.");
      return;
    }
    setSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      const newRecipe = Object.fromEntries(formData.entries());
      const recipeData = await addRecipeData({
        ...newRecipe,
        image: imageUrl,
        authorName,
        authorId,
        authorEmail,
      });
      if (!recipeData) {
        throw new Error("Could not add your recipe.");
      }
      toast.success("Recipe added successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      toast.error(error.message || "Failed to add recipe.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <main className="min-h-screen bg-[#faf7f4] px-5 py-10 sm:px-8 lg:px-10">
      {" "}
      <div className="mx-auto max-w-5xl">
        {" "}
        <div className="mb-8">
          {" "}
          <p className="mb-2 text-sm font-bold uppercase tracking-[3px] text-[#c93632]">
            {" "}
            Share your recipe{" "}
          </p>{" "}
          <h1 className="text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
            {" "}
            Add a New Recipe{" "}
          </h1>{" "}
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            {" "}
            Share your favorite recipe with the RecipeHub community and inspire
            others to cook something delicious.{" "}
          </p>{" "}
        </div>{" "}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#eee6e1] bg-white p-5 shadow-sm sm:p-8"
        >
          {" "}
          <section>
            {" "}
            <div className="mb-6 flex items-center gap-3">
              {" "}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0ed] text-[#c93632]">
                {" "}
                <ChefHat size={21} />{" "}
              </div>{" "}
              <div>
                {" "}
                <h2 className="font-bold text-[#171717]">
                  {" "}
                  Recipe Information{" "}
                </h2>{" "}
                <p className="text-xs text-gray-500">
                  {" "}
                  Tell us about your recipe{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="grid gap-5 md:grid-cols-2">
              {" "}
              <div className="md:col-span-2">
                {" "}
                <label
                  htmlFor="recipeName"
                  className="mb-2 block text-sm font-semibold text-[#222]"
                >
                  {" "}
                  Recipe Name{" "}
                </label>{" "}
                <input
                  id="recipeName"
                  name="title"
                  type="text"
                  placeholder="e.g. Creamy Garlic Mushroom Pasta"
                  required
                  className="w-full rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-semibold text-[#222]"
                >
                  {" "}
                  Category{" "}
                </label>{" "}
                <div className="relative">
                  {" "}
                  <Utensils
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />{" "}
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full appearance-none rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 pl-11 text-sm outline-none focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                  >
                    {" "}
                    <option value="">Select category</option>{" "}
                    <option value="Breakfast">Breakfast</option>{" "}
                    <option value="Lunch">Lunch</option>{" "}
                    <option value="Dinner">Dinner</option>{" "}
                    <option value="Dessert">Dessert</option>{" "}
                    <option value="Snack">Snack</option>{" "}
                    <option value="Drinks">Drinks</option>{" "}
                  </select>{" "}
                </div>{" "}
              </div>{" "}
              <div>
                {" "}
                <label
                  htmlFor="cuisine"
                  className="mb-2 block text-sm font-semibold text-[#222]"
                >
                  {" "}
                  Cuisine Type{" "}
                </label>{" "}
                <select
                  id="cuisine"
                  name="cuisine"
                  required
                  className="w-full rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 text-sm outline-none focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                >
                  {" "}
                  <option value="">Select cuisine</option>{" "}
                  <option value="Italian">Italian</option>{" "}
                  <option value="Asian">Asian</option>{" "}
                  <option value="Bangladeshi">Bangladeshi</option>{" "}
                  <option value="Indian">Indian</option>{" "}
                  <option value="Mexican">Mexican</option>{" "}
                  <option value="American">American</option>{" "}
                  <option value="Mediterranean">Mediterranean</option>{" "}
                  <option value="Lebanese">Lebanese</option>{" "}
                </select>{" "}
              </div>{" "}
              <div>
                {" "}
                <label
                  htmlFor="difficulty"
                  className="mb-2 block text-sm font-semibold text-[#222]"
                >
                  {" "}
                  Difficulty Level{" "}
                </label>{" "}
                <select
                  id="difficulty"
                  name="difficulty"
                  required
                  className="w-full rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 text-sm outline-none focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                >
                  {" "}
                  <option value="">Select difficulty</option>{" "}
                  <option value="Easy">Easy</option>{" "}
                  <option value="Medium">Medium</option>{" "}
                  <option value="Hard">Hard</option>{" "}
                </select>{" "}
              </div>{" "}
              <div>
                {" "}
                <label
                  htmlFor="time"
                  className="mb-2 block text-sm font-semibold text-[#222]"
                >
                  {" "}
                  Preparation Time{" "}
                </label>{" "}
                <div className="relative">
                  {" "}
                  <Clock3
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />{" "}
                  <input
                    id="time"
                    name="time"
                    type="number"
                    min="1"
                    placeholder="e.g. 30"
                    required
                    className="w-full rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 pl-11 text-sm outline-none placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
                  />{" "}
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    {" "}
                    minutes{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section className="mt-10 border-t border-[#eee6e1] pt-8">
            {" "}
            <div className="mb-5 flex items-center gap-3">
              {" "}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0ed] text-[#c93632]">
                {" "}
                <ImagePlus size={21} />{" "}
              </div>{" "}
              <div>
                {" "}
                <h2 className="font-bold text-[#171717]">Recipe Image</h2>{" "}
                <p className="text-xs text-gray-500">
                  {" "}
                  Upload a photo or paste an image link{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-semibold text-[#222]"
            >
              {" "}
              Upload Image to ImgBB{" "}
            </label>{" "}
            <input
              id="image"
              name="imageFile"
              type="file"
              accept="image/*"
              disabled={uploading}
              onChange={handleImageUpload}
              className="w-full rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 text-sm outline-none transition file:mr-4 file:rounded-lg file:border-0 file:bg-[#fff0ed] file:px-4 file:py-2 file:font-medium file:text-[#c93632]"
            />{" "}
            <div className="my-5 flex items-center gap-3">
              {" "}
              <div className="h-px flex-1 bg-[#eee6e1]" />{" "}
              <span className="text-xs font-medium uppercase text-gray-400">
                {" "}
                Or{" "}
              </span>{" "}
              <div className="h-px flex-1 bg-[#eee6e1]" />{" "}
            </div>{" "}
            <label
              htmlFor="imageLink"
              className="mb-2 block text-sm font-semibold text-[#222]"
            >
              {" "}
              Add Image by Link{" "}
            </label>{" "}
            <input
              id="imageLink"
              type="url"
              placeholder="https://example.com/recipe-image.jpg"
              value={imageUrl}
              onChange={handleImageLink}
              disabled={uploading}
              className="w-full rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
            />{" "}
            <p className="mt-2 text-xs text-gray-400">
              {" "}
              Paste a direct image URL. Uploaded images are hosted by
              ImgBB.{" "}
            </p>{" "}
            {uploading && (
              <p className="mt-3 text-sm text-gray-500">
                {" "}
                Uploading image to ImgBB...{" "}
              </p>
            )}{" "}
            {uploadError && (
              <p className="mt-3 text-sm text-red-500">{uploadError}</p>
            )}{" "}
            {imageUrl && (
              <div className="mt-4 space-y-3">
                {" "}
                <img
                  src={imageUrl}
                  alt="Recipe preview"
                  className="h-48 w-full rounded-xl object-cover"
                  onError={() =>
                    setUploadError("This image link could not be displayed.")
                  }
                  onLoad={() => setUploadError("")}
                />{" "}
                <p className="break-all text-sm text-green-700">
                  {" "}
                  Image URL: {imageUrl}{" "}
                </p>{" "}
              </div>
            )}{" "}
            <input type="hidden" name="image" value={imageUrl} />{" "}
          </section>{" "}
          <section className="mt-10 border-t border-[#eee6e1] pt-8">
            {" "}
            <div className="mb-5 flex items-center gap-3">
              {" "}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0ed] text-[#c93632]">
                {" "}
                <List size={21} />{" "}
              </div>{" "}
              <div>
                {" "}
                <h2 className="font-bold text-[#171717]">Ingredients</h2>{" "}
                <p className="text-xs text-gray-500">
                  {" "}
                  Add all ingredients needed for the recipe{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <textarea
              name="ingredients"
              rows={7}
              required
              placeholder={`2 cups pasta 1 cup heavy cream 3 cloves garlic 1 cup mushrooms 1/2 cup parmesan cheese Salt and black pepper to taste`}
              className="w-full resize-none rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 text-sm leading-6 outline-none placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
            />{" "}
            <p className="mt-2 text-xs text-gray-400">
              {" "}
              Add each ingredient on a separate line.{" "}
            </p>{" "}
          </section>{" "}
          <section className="mt-10 border-t border-[#eee6e1] pt-8">
            {" "}
            <div className="mb-5 flex items-center gap-3">
              {" "}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0ed] text-[#c93632]">
                {" "}
                <FileText size={21} />{" "}
              </div>{" "}
              <div>
                {" "}
                <h2 className="font-bold text-[#171717]">
                  {" "}
                  Cooking Instructions{" "}
                </h2>{" "}
                <p className="text-xs text-gray-500">
                  {" "}
                  Explain how to prepare your recipe{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <textarea
              name="instructions"
              rows={9}
              required
              placeholder={`1. Boil the pasta until al dente. 2. Heat olive oil in a pan. 3. Add garlic and mushrooms and cook until soft. 4. Pour in the cream and simmer. 5. Add parmesan cheese and season with salt and pepper. 6. Add the cooked pasta and mix well. 7. Serve hot and enjoy!`}
              className="w-full resize-none rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 text-sm leading-6 outline-none placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
            />{" "}
            <p className="mt-2 text-xs text-gray-400">
              {" "}
              Add each cooking step on a separate line.{" "}
            </p>{" "}
          </section>{" "}
          <section>
            {" "}
            <div className="my-5 flex items-center gap-3">
              {" "}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0ed] text-[#c93632]">
                {" "}
                <FileText size={21} />{" "}
              </div>{" "}
              <div>
                {" "}
                <h2 className="font-bold text-[#171717]">Description</h2>{" "}
                <p className="text-xs text-gray-500">
                  {" "}
                  Briefly describe your recipe{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <textarea
              name="description"
              rows={5}
              required
              placeholder="Describe your recipe in a few sentences..."
              className="w-full resize-none rounded-lg border border-[#e2dcd8] bg-white px-4 py-3 text-sm leading-6 outline-none placeholder:text-gray-400 focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
            />{" "}
          </section>{" "}
          <div className="mt-10 flex flex-col-reverse gap-3 border-t border-[#eee6e1] pt-7 sm:flex-row sm:justify-end">
            {" "}
            <button
              type="button"
              onClick={() => window.history.back()}
              className="rounded-lg border border-[#ded6d1] px-7 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              {" "}
              Cancel{" "}
            </button>{" "}
            <button
              type="submit"
              disabled={uploading || submitting}
              className="rounded-lg bg-[#c93632] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#ad302d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {" "}
              {uploading
                ? "Uploading Image..."
                : submitting
                  ? "Adding Recipe..."
                  : "Add Recipe"}{" "}
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </main>
  );
};
export default AddRecipePage;
