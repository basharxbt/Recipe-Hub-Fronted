"use client";

import { authClient } from "@/lib/auth-client";

import { Save, X } from "lucide-react";

import toast from "react-hot-toast";

const ProfileEdit = ({ user, onCancel }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData.entries());

    const updateProfile = authClient.updateUser({
      name: userInfo.name,
      image: userInfo.image,
    });
    const { data, error } = await updateProfile;

    if (data) {
      toast.promise(updateProfile, {
        loading: "Updating profile...",
        success: "Profile updated successfully!",
        error: "Could not update profile.",
      });
    }

    if (error) {
      toast.error("Failed to update profile");
    }
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div className="mt-8 space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Image */}
        <div>
          <label
            htmlFor="profile-image"
            className="mb-3 block text-sm font-semibold text-gray-700"
          >
            Profile Image
          </label>

          <input
            required
            type="url"
            name="image"
            placeholder="https://i.ibb.co/..."
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
          />

          <p className="mt-2 text-xs text-gray-400">
            Paste an image URL or choose an image to upload.
          </p>
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Full Name
          </label>

          <input
            required
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#c93632] focus:ring-2 focus:ring-[#c93632]/10"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Email Address
          </label>

          <div className="rounded-xl bg-gray-50 px-4 py-3">
            <span className="text-sm text-gray-600">{user?.email}</span>
          </div>

          <p className="mt-2 text-xs text-gray-400">
            Your email address cannot be changed.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 border-t border-gray-100 pt-6">
          <button
            type="button"
            onClick={onCancel}
            className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
          >
            <X size={17} />
            Cancel
          </button>

          <button
            type="submit"
            className="flex items-center gap-2 cursor-pointer rounded-xl bg-[#c93632] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ad302d]"
          >
            <Save size={17} />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
