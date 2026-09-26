"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Searchbtn = ({ filter }) => {
  const [search, setSearch] = useState(filter.search);
  const router = useRouter();

  const routerHandler = () => {
    const sp = new URLSearchParams();

    if (search) {
      sp.set("search", search);
    }

    const path = `?${sp.toString()}`;

    router.push(`/all-recipe${path}`);
  };

  return (
    <div className="mx-auto flex w-full max-w-2xl items-center rounded-2xl border-4 border-white bg-white p-1 shadow-lg">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Find what do you want to cook today"
        className="h-14 min-w-0 flex-1 bg-transparent px-6 text-base text-gray-700 outline-none placeholder:text-gray-500"
      />

      <button
        onClick={routerHandler}
        type="button"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#c93632] text-white"
      >
        <Search size={26} />
      </button>
    </div>
  );
};

export default Searchbtn;
