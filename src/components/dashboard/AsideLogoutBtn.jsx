"use client";

import { authClient } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const AsideLogoutBtn = () => {
  const logoutHandler = async () => {
    const { data, error } = await authClient.signOut();
    toast.success("Logout Successfully ");
    setTimeout(() => {
      window.location.href = "/signin";
    }, 500);
  };
  return (
    <div>
      <button className="text-gray-400 hover:text-gray-700 cursor-pointer">
        <LogOut onClick={logoutHandler} size={17} />
      </button>
    </div>
  );
};

export default AsideLogoutBtn;
