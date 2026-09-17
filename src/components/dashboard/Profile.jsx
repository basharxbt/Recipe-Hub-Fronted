"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import Image from "next/image";
import React from "react";

const Profile = () => {
  const { data: session } = useSession();

  if (!session?.user) return <div>s</div>;

  return (
    <div className="border-t border-gray-100 p-5">
      <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
        {user?.Image ? (
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={50}
            height={50}
            className="rounded-full"
          ></Image>
        ) : (
          ""
        )}

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">
            {" "}
            {session?.user?.name}
          </p>
          <p className="truncate text-xs text-gray-400">
            {session?.user?.email}
          </p>
        </div>

        <button className="text-gray-400 hover:text-gray-700 cursor-pointer">
          <LogOut onClick={() => authClient.signOut()} size={17} />
        </button>
      </div>
    </div>
  );
};

export default Profile;
