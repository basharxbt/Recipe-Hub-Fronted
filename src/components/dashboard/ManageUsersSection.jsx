import { totalUsers } from "@/lib/data";
import {
  Users,
  ShieldCheck,
  UserRound,
  MoreVertical,
  Search,
} from "lucide-react";
import Image from "next/image";
import UserBlockBtn from "./UserBlockBtn";

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

                  <td className="px-6 py-5">
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </td>

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

                  <td className="px-6 py-5">
                    <p className="text-sm text-gray-600">
                      {new Date(user.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </td>

                  <td className="px-6 py-5 text-right">
                    <UserBlockBtn user={user}></UserBlockBtn>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersSection;
