import Stripe from "stripe";
import { MongoClient } from "mongodb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(request) {
  try {
    const body = await request.text();

    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return new Response(
        JSON.stringify({
          message: "Missing Stripe signature",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET,
      );
    } catch (error) {
      console.error("Stripe webhook signature error:", error.message);

      return new Response(
        JSON.stringify({
          message: "Webhook signature verification failed",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    console.log("Stripe event:", event.type);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      console.log("Payment completed:", session.id);

      await client.connect();

      const database = client.db("RecipeDB");
      const transactions = database.collection("transactions");

      // Save transaction
      const transactionData = {
        stripeSessionId: session.id,

        transactionId:
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent?.id || null,

        userName: session.customer_details?.name || "",

        userEmail: session.customer_details?.email || "",

        amount: session.amount_total || 0,

        currency: session.currency || "",

        paymentStatus: session.payment_status || "",

        status: session.status || "",

        product: session.metadata?.product || "Premium Recipe",

        userId: session.customer_details?.id || null,

        paidAt: new Date(),
      };

      // Prevent duplicate transactions
      const result = await transactions.updateOne(
        {
          stripeSessionId: session.id,
        },
        {
          $set: transactionData,
        },
        {
          upsert: true,
        },
      );

      console.log("Transaction saved:", result);
    }

    // -----------------------------------------
    // PAYMENT EXPIRED
    // -----------------------------------------

    if (event.type === "checkout.session.expired") {
      const session = event.data.object;

      console.log("Checkout session expired:", session.id);
    }

    // -----------------------------------------
    // PAYMENT FAILED
    // -----------------------------------------

    if (event.type === "payment_intent.payment_failed") {
      const paymentIntent = event.data.object;

      console.log("Payment failed:", paymentIntent.id);
    }

    // Stripe needs a successful response
    return new Response(
      JSON.stringify({
        received: true,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Webhook error:", error);

    return new Response(
      JSON.stringify({
        message: "Webhook failed",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
