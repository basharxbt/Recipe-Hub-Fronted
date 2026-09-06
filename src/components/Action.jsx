"use client";

import { Heart, Bookmark, Share2, Flag } from "lucide-react";

const Action = ({ recipe }) => {
  return (
    <div>
      <div className="mt-5  flex flex-wrap items-center gap-3">
        <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-[#c93632] hover:text-[#c93632]">
          <Bookmark size={18} />
          Save
        </button>

        <button
          className=" cursor-pointer
               flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 transition hover:text-red-500"
        >
          <Flag size={17} />
          Report
        </button>
      </div>
    </div>
  );
};

export default Action;
