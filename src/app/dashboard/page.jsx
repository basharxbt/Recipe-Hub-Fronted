import UserDashboard from "@/components/Dashboard";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import React from "react";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const role = session?.user?.role;

  if (!session?.user) {
    return redirect("/signin");
  }

  if (role === "admin") {
    return <AdminDashboard></AdminDashboard>;
  }

  return (
    <div>
      <UserDashboard></UserDashboard>
    </div>
  );
};

export default DashboardPage;
