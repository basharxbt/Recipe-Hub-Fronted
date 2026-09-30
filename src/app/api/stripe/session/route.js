import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        {
          message: "Session ID is required",
        },
        {
          status: 400,
        },
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json(session);
  } catch (error) {
    console.error("Stripe error:", error);

    return NextResponse.json(
      {
        message: "Failed to get Stripe session",
      },
      {
        status: 500,
      },
    );
  }
}
