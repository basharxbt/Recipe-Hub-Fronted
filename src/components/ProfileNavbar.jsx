"use client";

import { UserRound, Settings, LogOut, ChevronDown } from "lucide-react";
import { Button, Dropdown } from "@heroui/react";
import Image from "next/image";
import { useSession, signOut } from "@/lib/auth-client";

const ProfileDropdown = () => {
  const { data: session } = useSession();

  const user = session?.user;

  if (!user) {
    return null;
  }

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <div
          variant="tertiary"
          className="flex h-auto items-center gap-2 rounded-full p-1.5 hover:bg-gray-100"
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
            <Image
              src={user?.image}
              alt={user.name || "User"}
              fill
              className="object-cover"
            />
          </div>

          <div className="hidden text-left sm:block">
            <p className="max-w-[100px] truncate text-sm font-semibold text-gray-800">
              {user.name}
            </p>
          </div>

          <ChevronDown size={16} className="hidden text-gray-400 sm:block" />
        </div>
      </Dropdown.Trigger>

      <Dropdown.Popover className="w-[280px] rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
        {/* User info */}
        <div className="mb-2 flex items-center gap-3 rounded-xl bg-[#fff8f5] p-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
            <Image
              src={user?.image}
              alt={user.name || "User"}
              fill
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-gray-900">
              {user.name}
            </p>

            <p className="truncate text-xs text-gray-500">{user.email}</p>
          </div>
        </div>

        <Dropdown.Menu>
          <Dropdown.Item
            id="profile"
            textValue="Profile"
            className="rounded-xl"
          >
            <UserRound size={17} />
            <span>My Profile</span>
          </Dropdown.Item>

          <Dropdown.Item
            id="settings"
            textValue="Settings"
            className="rounded-xl"
          >
            <Settings size={17} />
            <span>Settings</span>
          </Dropdown.Item>

          <Dropdown.Item
            id="logout"
            textValue="Logout"
            className="rounded-xl text-red-500"
            onAction={async () => {
              await signOut();
            }}
          >
            <LogOut size={17} />
            <span>Logout</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default ProfileDropdown;
