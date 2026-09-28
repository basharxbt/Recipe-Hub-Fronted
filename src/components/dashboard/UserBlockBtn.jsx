"use client";

import { useState } from "react";

const UserBlockBtn = ({ user }) => {
  const [isBlocked, setIsBlocked] = useState(user.isBlocked === "Blocked");

  const handleBlock = async () => {
    setIsBlocked((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={handleBlock}
      className={`rounded-xl px-3 py-1 text-sm font-medium transition ${
        isBlocked
          ? "bg-green-50 text-green-600 hover:bg-green-100"
          : "bg-red-50 text-red-600 hover:bg-red-100"
      }`}
    >
      {isBlocked ? "Unblock" : "Block"}
    </button>
  );
};

export default UserBlockBtn;
