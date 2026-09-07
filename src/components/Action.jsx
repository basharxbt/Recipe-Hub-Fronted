"use client";

import { useSession } from "@/lib/auth-client";
import { savedRecipe } from "@/lib/data";
import { Heart, Bookmark, Share2, Flag } from "lucide-react";
import { useState } from "react";
import ReportModal from "./ReportModal";

const Action = ({ recipe }) => {
  const { data: session, error } = useSession();
  const userEmail = session?.user?.email;

  console.log(session, error, "this is from action");
  const [save, setSave] = useState(false);
  const saveRecipeHandler = async () => {
    if (save) return;
    await savedRecipe({ ...recipe, userEmail });
    setSave(true);
  };

  return (
    <div>
      <div className="mt-5  flex flex-wrap items-center gap-3">
        <button
          onClick={saveRecipeHandler}
          className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-[#c93632] hover:text-[#c93632]"
        >
          <Bookmark size={18} />
          Save
        </button>

        <ReportModal recipe={recipe}></ReportModal>
      </div>
    </div>
  );
};

export default Action;
