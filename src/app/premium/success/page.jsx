"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle2, ArrowRight, Home, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { authClient, useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";

const PaymentSuccess = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { refetch } = useSession();

  const sessionId = searchParams.get("session_id");

  const [status, setStatus] = useState("checking");

  useEffect(() => {
    if (!sessionId) {
      setStatus("pending");
      return;
    }

    let cancelled = false;
    let timer;
    let attempts = 0;

    const checkPremium = async () => {
      attempts++;

      try {
        const { data, error } = await authClient.getSession({
          query: {
            disableCookieCache: true,
          },
        });

        if (cancelled) return;

        if (error) {
          console.error("Session refresh error:", error);
        }

        console.log("Fresh premium status:", data?.user?.isPremium);

        if (data?.user?.isPremium === true) {
          await refetch();

          if (cancelled) return;

          setStatus("success");
          router.refresh();
          return;
        }
      } catch (error) {
        console.error("Could not refresh session:", error);
      }

      if (cancelled) return;

      if (attempts >= 15) {
        setStatus("pending");
        return;
      }

      timer = setTimeout(checkPremium, 2000);
    };

    checkPremium();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [sessionId, refetch, router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          {status === "checking" ? (
            <LoaderCircle className="h-12 w-12 animate-spin text-green-600" />
          ) : (
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          )}
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Payment Successful!
        </h1>

        <p className="mt-3 text-gray-500">
          Thank you for your purchase. Your payment has been successfully
          completed.
        </p>

        <div className="mt-6 rounded-xl bg-green-50 p-4">
          {status === "checking" && (
            <p className="text-sm font-medium text-green-700">
              Activating your premium access...
            </p>
          )}

          {status === "success" && (
            <p className="text-sm font-medium text-green-700">
              Your premium access is now active!
            </p>
          )}

          {status === "pending" && (
            <p className="text-sm font-medium text-gray-700">
              Your payment was completed. Premium activation may take a little
              longer. Please check your profile again shortly.
            </p>
          )}
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
