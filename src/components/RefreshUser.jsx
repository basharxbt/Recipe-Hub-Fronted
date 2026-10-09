"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";

export default function RefreshUser() {
  const router = useRouter();
  const { refetch } = useSession();

  useEffect(() => {
    async function refreshUser() {
      // Fetch the latest user data from Better Auth
      const result = await authClient.getSession({
        query: {
          disableCookieCache: true,
        },
      });

      console.log("Fresh user data:", result.data?.user);

      // Update the session hook and server-rendered page
      await refetch();
      router.refresh();
    }

    refreshUser();
  }, [refetch, router]);

  return null;
}
