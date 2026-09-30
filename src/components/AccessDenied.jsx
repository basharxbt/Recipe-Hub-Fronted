import Link from "next/link";
import { ShieldX, ArrowLeft } from "lucide-react";

const AccessDenied = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
          <ShieldX size={32} className="text-[#c93632]" />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-gray-900">Access Denied</h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          You don&apos;t have permission to view this page. Only administrators
          can access this section of RecipeHub.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#c93632] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b52f2b]"
        >
          <ArrowLeft size={16} />
          Go Back Home
        </Link>
      </div>
    </main>
  );
};

export default AccessDenied;
