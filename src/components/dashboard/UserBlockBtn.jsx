"use client";

import { userBlock } from "@/lib/data";
import { useState } from "react";

const UserBlockBtn = ({ user }) => {
  const [isBlocked, setIsBlocked] = useState(user.isBlocked === "Blocked");

  const [loading, setLoading] = useState(false);

  const handleBlock = async () => {
    if (loading) return;

    const newStatus = isBlocked ? "Unblocked" : "Blocked";

    try {
      setLoading(true);

      await userBlock(user._id, newStatus);

      setIsBlocked(newStatus === "Blocked");
    } catch (error) {
      console.error("Block update failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBlock}
      // disabled={loading}
      disabled={user.role === "admin" ? true : loading}
      className={`rounded-xl px-3 py-1 text-sm font-medium transition ${user.role === "admin" ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${
        isBlocked
          ? "bg-green-50 text-green-600 hover:bg-green-100"
          : "bg-red-50 text-red-600 hover:bg-red-100"
      } ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
    >
      {loading ? "Updating..." : isBlocked ? "Unblock" : "Block"}
    </button>
  );
};

export default UserBlockBtn;
