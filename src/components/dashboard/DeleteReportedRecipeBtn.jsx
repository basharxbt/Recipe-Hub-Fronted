"use client";
import { reportedRecipeDelete, reportedRecipeDismiss } from "@/lib/data";
import { Check, Trash2 } from "lucide-react";

const DeleteReportedRecipeBtn = (report) => {
  console.log(report.report.recipeId, "this is from deleted btn");

  const deleteReportedHandler = async () => {
    reportedRecipeDelete(report.report.recipeId);
    reportedRecipeDismiss(report.report.recipeId);
  };
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <button
        onClick={async () => reportedRecipeDismiss(report.report.recipeId)}
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-100"
      >
        <Check size={16} />
        Dismiss Report
      </button>

      <button
        onClick={deleteReportedHandler}
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
      >
        <Trash2 size={16} />
        Delete Recipe
      </button>
    </div>
  );
};

export default DeleteReportedRecipeBtn;
