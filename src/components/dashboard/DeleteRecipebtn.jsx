"use client";

import { reportedRecipeDelete } from "@/lib/data";
import { Trash2 } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const DeleteRecipebtn = ({ recipe }) => {
  const deleteRecipeHandler = async () => {
    try {
      await reportedRecipeDelete(recipe._id);

      toast.success("Recipe Deleted Successfully");
      setTimeout(() => {
        window.location.reload();
      }, [500]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete recipe");
    }
  };

  return (
    <div>
      <button
        onClick={deleteRecipeHandler}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
      >
        <Trash2 size={17} />
      </button>
    </div>
  );
};

export default DeleteRecipebtn;
