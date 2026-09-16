import { Search } from "lucide-react";

const NoRecipeFound = ({ search }) => {
  return (
    <div className="flex min-h-[420px] items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
            <Search className="text-[#c93632]" size={24} />
          </div>
        </div>

        {/* Content */}
        <h2 className="text-2xl font-bold text-gray-900">No recipes found</h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
          We couldn't find any recipes matching{" "}
          {search && (
            <span className="font-semibold text-gray-700">"{search}"</span>
          )}
          . Try searching for something else or explore our popular recipes.
        </p>

        {/* Suggestions */}
      </div>
    </div>
  );
};

export default NoRecipeFound;
