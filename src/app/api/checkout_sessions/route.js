import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "../../../lib/stripe";
import { auth } from "@/lib/auth";

export async function POST() {
  const user = await auth.api.getSession({
    headers: await headers(),
  });

  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: "price_1UMYg92Q49NqvM2t7GPMi7C6",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/premium/success?session_id={CHECKOUT_SESSION_ID}`,
      // Provide a name (for example, hosted_web_0001) to label this Checkout integration and measure its conversion independently
      integration_identifier: "recipehub",
      metadata: {
        userEmail: user.user.email,
      },
    });
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
