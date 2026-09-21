"use client";

import { CheckCircle2, ArrowRight, Home } from "lucide-react";
import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Payment Successful!
        </h1>

        <p className="mt-3 text-gray-500">
          Thank you for your purchase. Your payment has been successfully
          completed.
        </p>

        <div className="mt-6 rounded-xl bg-green-50 p-4">
          <p className="text-sm font-medium text-green-700">
            Payment completed successfully
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#c93632] px-5 py-3 font-medium text-white transition hover:bg-[#ad2d29]"
          >
            Go to Dashboard
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PaymentSuccess;
