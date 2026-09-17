import { totalUsers } from "@/lib/data";
import {
  Users,
  ShieldCheck,
  UserRound,
  MoreVertical,
  Search,
} from "lucide-react";
import Image from "next/image";

const ManageUsersSection = async () => {
  const users = await totalUsers();
  console.log(users);
  return (
    <div className="min-h-screen bg-gray-50 p-5 sm:p-8 lg:p-10">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Users size={18} className="text-[#c93632]" />

            <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#c93632]">
              Administration
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Manage Users
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            View and manage all RecipeHub users.
          </p>
        </div>

        {/* Total Users */}
        <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0ef]">
            <Users size={20} className="text-[#c93632]" />
          </div>

          <div>
            <p className="text-xs text-gray-400">Total Users</p>
            <p className="text-xl font-bold text-gray-900">{users.length}</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search users..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-[#c93632] focus:bg-white"
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  User
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Role
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Joined
                </th>

                <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-400">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b border-gray-100 last:border-0 transition hover:bg-gray-50/70"
                >
                  {/* User */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <Image
                        src={user.image}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff0ef] text-sm font-bold text-[#c93632]"
                      ></Image>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {user.name}
                        </p>

                        <p className="text-xs text-gray-400">
                          ID #{user._id}0248
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="px-6 py-5">
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </td>

                  {/* Role */}
                  <td className="px-6 py-5">
                    {user.role === "admin" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff0ef] px-3 py-1.5 text-xs font-semibold text-[#c93632]">
                        <ShieldCheck size={14} />
                        Admin
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
                        <UserRound size={14} />
                        User
                      </span>
                    )}
                  </td>

                  {/* Joined */}
                  <td className="px-6 py-5">
                    <p className="text-sm text-gray-600">
                      {new Date(user.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-5 text-right">
                    <button
                      type="button"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                    >
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">
          <p className="text-xs text-gray-400">
            Showing <span className="font-semibold text-gray-600">5</span> of{" "}
            <span className="font-semibold text-gray-600">248</span> users
          </p>

          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-500">
              Previous
            </button>

            <button className="rounded-lg bg-[#c93632] px-3 py-2 text-xs font-semibold text-white">
              1
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-500">
              2
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-500">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersSection;
