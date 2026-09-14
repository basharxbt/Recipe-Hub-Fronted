import { getReport, recipeData, reportSend, totalUsers } from "@/lib/data";
import {
  Users,
  ChefHat,
  Crown,
  Flag,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

const AdminDashboard = async () => {
  const allUsers = await totalUsers();
  const allRecipe = await recipeData();
  const totalReports = await getReport();
  console.log(totalReports, "total reports from dashboard");
  console.log(allUsers, "this is total user");
  const stats = [
    {
      title: "Total Users",
      value: allUsers.length,
      description: "Registered users",
      icon: Users,
      change: "+12.5%",
    },
    {
      title: "Total Recipes",
      value: allRecipe.length,
      description: "Recipes published",
      icon: ChefHat,
      change: "+8.4%",
    },
    {
      title: "Premium Members",
      value: "326",
      description: "Active premium members",
      icon: Crown,
      change: "+18.2%",
    },
    {
      title: "Total Reports",
      value: totalReports.length,
      description: "Reports awaiting review",
      icon: Flag,
      change: "+4.6%",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f7f5]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-[#c93632]">
              Administration
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Monitor your RecipeHub platform and manage everything from one
              place.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
            <p className="text-xs text-gray-400">Platform status</p>

            <div className="mt-1 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm font-semibold text-gray-700">
                All systems operational
              </span>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff0ef] text-[#c93632]">
                    <Icon size={22} />
                  </div>

                  <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-300 transition group-hover:bg-gray-50 group-hover:text-gray-600">
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                {/* Value */}
                <div className="mt-7">
                  <p className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>

                  <div className="mt-1 flex items-end justify-between gap-3">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      {stat.value}
                    </h2>

                    <span className="mb-1 flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-[11px] font-bold text-green-600">
                      <TrendingUp size={12} />
                      {stat.change}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-gray-400">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Overview */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Platform Overview */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-gray-900">Platform Overview</h2>

                <p className="mt-1 text-xs text-gray-400">
                  Current RecipeHub activity
                </p>
              </div>

              <button className="flex items-center gap-1 text-xs font-semibold text-[#c93632]">
                View details
                <ArrowUpRight size={14} />
              </button>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-gray-50 p-5">
                <Users size={20} className="text-gray-500" />

                <p className="mt-4 text-xs text-gray-400">
                  New users this month
                </p>

                <p className="mt-1 text-xl font-bold">184</p>
              </div>

              <div className="rounded-xl bg-gray-50 p-5">
                <ChefHat size={20} className="text-gray-500" />

                <p className="mt-4 text-xs text-gray-400">Recipes this month</p>

                <p className="mt-1 text-xl font-bold">96</p>
              </div>

              <div className="rounded-xl bg-gray-50 p-5">
                <Crown size={20} className="text-gray-500" />

                <p className="mt-4 text-xs text-gray-400">
                  Premium conversions
                </p>

                <p className="mt-1 text-xl font-bold">42</p>
              </div>
            </div>
          </div>

          {/* Reports */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-bold text-gray-900">Reports</h2>

                <p className="mt-1 text-xs text-gray-400">
                  Requires your attention
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#c93632]">
                <Flag size={19} />
              </div>
            </div>

            <div className="mt-7">
              <p className="text-4xl font-bold text-gray-900">24</p>

              <p className="mt-1 text-sm text-gray-400">Pending reports</p>
            </div>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#c93632] py-3 text-sm font-semibold text-white transition hover:bg-[#b82f2b]">
              Review Reports
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
