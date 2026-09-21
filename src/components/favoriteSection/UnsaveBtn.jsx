"use client";

import { unsaveRecipe } from "@/lib/data";
import { BookmarkX } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const UnsaveBtn = ({ recipe }) => {
  console.log(recipe);
  const unSaveHandler = async () => {
    try {
      await unsaveRecipe(recipe._id);
      toast.success("Recipe Unsaved Successfully");
      setTimeout(() => {
        window.location.reload();
      }, [500]);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div>
      <button
        onClick={unSaveHandler}
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-[#c93632]"
      >
        <BookmarkX size={18} />
      </button>
    </div>
  );
};

export default UnsaveBtn;
