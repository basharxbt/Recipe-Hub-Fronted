import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

import { stripe } from "@/lib/stripe";

const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(request) {
  const body = await request.text();

  const signature = request.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (error) {
    console.error("Webhook error:", error.message);

    return new NextResponse("Webhook Error", {
      status: 400,
    });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    try {
      await client.connect();

      const db = client.db("RecipeDB");
      const transactions = db.collection("transactions");

      await transactions.insertOne({
        transactionId: session.payment_intent,
        checkoutSessionId: session.id,

        customerName: session.customer_details?.name,

        customerEmail: session.customer_details?.email,

        amount: session.amount_total,

        currency: session.currency,

        paymentStatus: session.payment_status,

        createdAt: new Date(),
      });

      console.log("Transaction saved");
    } catch (error) {
      console.error("MongoDB error:", error);
    }
  }

  return NextResponse.json({
    received: true,
  });
}
