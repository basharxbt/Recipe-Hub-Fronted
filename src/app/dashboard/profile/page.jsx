"use client";

import ProfileEdit from "@/components/ProfileEdit";
import { useSession } from "@/lib/auth-client";
import { Crown, Pencil, UserRound } from "lucide-react";
import { useEffect, useState } from "react";

const Profile = () => {
  const { data, isPending } = useSession();

  const [mounted, setMounted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => setMounted(true), []);

  const user = data?.user;

  if (!mounted || isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#faf9f7]">
        <p className="text-sm text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#faf9f7]">
        <p className="text-sm text-gray-500">You are not signed in.</p>
      </div>
    );
  }
  console.log("USER:", user);
  console.log("isPremium:", user?.isPremium);

  return (
    <div className="min-h-screen bg-[#faf9f7] px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-medium text-[#c93632]">Account Settings</p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">My Profile</h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your personal information and profile picture.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
          {/* Profile Card */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="h-32 bg-gradient-to-r from-[#c93632] to-[#e86b66]" />

            <div className="px-6 pb-8 sm:px-10">
              <div className="-mt-16 flex items-end justify-between">
                <div className="relative">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name || "Profile"}
                      className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
                    />
                  ) : (
                    <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-gray-100 shadow-md">
                      <UserRound size={40} className="text-gray-400" />
                    </div>
                  )}
                </div>

                {!isEditing && (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="flex cursor-pointer items-center gap-2 rounded-xl bg-[#c93632] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ad302d]"
                  >
                    <Pencil size={17} />
                    Update Profile
                  </button>
                )}
              </div>

              {isEditing ? (
                <ProfileEdit user={user} onCancel={() => setIsEditing(false)} />
              ) : (
                <div className="mt-8 space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Full Name
                    </label>

                    <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                      <UserRound size={18} className="text-gray-400" />

                      <span className="text-sm font-medium text-gray-800">
                        {user.name}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address
                    </label>

                    <div className="rounded-xl bg-gray-50 px-4 py-3">
                      <span className="text-sm text-gray-600">
                        {user.email}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-gray-400">
                      Your email address cannot be changed.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {!user.isPremium && user.role !== "admin" ? (
            <div className="h-fit rounded-2xl border border-[#f0dfdd] bg-[#fff8f7] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c93632] text-white">
                  <Crown size={20} />
                </div>

                <div>
                  <h2 className="text-sm font-bold text-gray-900">
                    Go Premium
                  </h2>

                  <p className="mt-1 text-xs text-gray-500">
                    Unlock premium recipes
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs text-gray-400">One-time payment</p>

                <p className="mt-1 text-3xl font-bold text-[#c93632]">$9.99</p>

                <p className="mt-1 text-xs text-gray-500">
                  Lifetime access to premium content
                </p>
              </div>
              <form action="/api/checkout_sessions" method="POST">
                <section>
                  <button
                    type="submit"
                    className="mt-5 cursor-pointer w-full rounded-xl bg-[#c93632] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#ad302d]"
                  >
                    Buy Premium
                  </button>
                </section>
              </form>

              <p className="mt-3 text-center text-[11px] text-gray-400">
                Secure payment powered by Stripe
              </p>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-5">
          <p className="text-sm font-semibold text-gray-800">
            Profile information
          </p>

          <p className="mt-1 text-sm leading-6 text-gray-500">
            Keep your profile information up to date so other users can easily
            recognize you on RecipeHub.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
