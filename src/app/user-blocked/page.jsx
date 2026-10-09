import Link from "next/link";
import { Ban, ArrowLeft, ShieldAlert } from "lucide-react";

const UserBlockedPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f7f5] px-5">
      <div className="w-full max-w-lg rounded-3xl border border-red-100 bg-white p-8 text-center shadow-sm md:p-10">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#c93632]/10">
          <Ban size={38} className="text-[#c93632]" />
        </div>

        {/* Title */}
        <h1 className="mt-6 text-2xl font-bold text-gray-900 md:text-3xl">
          Access Restricted
        </h1>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
          Your account has been blocked by an administrator. You cannot access
          this page or some account features at the moment.
        </p>

        {/* Warning */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4 text-left">
          <ShieldAlert size={20} className="mt-0.5 shrink-0 text-[#c93632]" />

          <div>
            <p className="text-sm font-semibold text-gray-800">
              Your account is currently blocked
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Please contact the administrator if you believe this was done by
              mistake.
            </p>
          </div>
        </div>

        {/* Action */}
        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#c93632] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ad302d]"
        >
          <ArrowLeft size={17} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default UserBlockedPage;
