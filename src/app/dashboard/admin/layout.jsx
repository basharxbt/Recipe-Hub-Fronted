import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Not logged in
  if (!session) {
    redirect("/login");
  }

  // Logged in but not admin
  if (session.user.role !== "admin") {
    redirect("/access-denied");
  }

  return <div>{children}</div>;
};

export default AdminLayout;
