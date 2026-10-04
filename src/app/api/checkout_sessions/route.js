import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { premiumPriceId, stripe } from "../../../lib/stripe";
import { auth } from "@/lib/auth";

export async function POST(request) {
  const formData = await request.formData();

  const recipeId = formData.get("recipeId");
  console.log("recipeId in checkout route:", recipeId);
  const user = await auth.api.getSession({
    headers: await headers(),
  });

  const userEmail = user?.user?.email;
  const userId = user?.user?.id;
  const userName = user?.user?.name;
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");
    const premiumType = formData.get("premiumType");
    const priceId = premiumPriceId[premiumType];

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/premium/success?session_id={CHECKOUT_SESSION_ID}`,
      // Provide a name (for example, hosted_web_0001) to label this Checkout integration and measure its conversion independently
      integration_identifier: "recipehub",
      metadata: {
        userEmail: userEmail,
        userName: userName,
        userId: userId,
        recipeId: recipeId,
        premiumType: premiumType,
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
