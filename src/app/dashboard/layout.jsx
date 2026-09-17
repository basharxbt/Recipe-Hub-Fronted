import AdminAside from "@/components/dashboard/AdminAside";
import Aside from "@/components/dashboard/Aside";
import { auth } from "@/lib/auth";

import { headers } from "next/headers";

const Layout = async ({ children }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const role = session?.user?.role;
  return (
    <div className="flex min-h-screen">
      {role === "admin" ? <AdminAside></AdminAside> : <Aside />}

      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
