import UserDashboard from "@/components/Dashboard";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import React from "react";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  

  const role = session?.user?.role;
  console.log(session.user, "this is from dashboard 2222222222222");

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
