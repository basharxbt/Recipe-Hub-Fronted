"use client";
import { likeIncrease } from "@/lib/data";
import { Heart } from "lucide-react";
import React, { useState } from "react";

const Likebtn = ({ recipe }) => {
  const recipeLikes = parseInt(recipe.likes);
  console.log(typeof recipeLikes);
  const [likes, setLikes] = useState(recipeLikes || 0);
  const [liked, setLiked] = useState(false);
  const likeHandler = async () => {
    if (liked) {
      setLikes((prev) => prev - 1);
      setLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setLiked(true);
    }
    if (liked) return;
    await likeIncrease(recipe._id);
  };
  return (
    <div>
      <button
        onClick={likeHandler}
        className="group flex items-center gap-2 rounded-full border border-red-100 px-4 py-2.5 text-sm font-semibold text-[#c93632] transition-all duration-200 "
      >
        <Heart
          size={20}
          className={`transition-transform group-hover:scale-110 ${
            liked ? "fill-[#c93632] text-[#c93632]" : "text-[#c93632]"
          }`}
        />
        <span>{likes}</span>
      </button>
    </div>
  );
};

export default Likebtn;
