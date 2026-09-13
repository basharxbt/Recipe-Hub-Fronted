import Aside from "@/components/dashboard/Aside";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Aside />

      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
