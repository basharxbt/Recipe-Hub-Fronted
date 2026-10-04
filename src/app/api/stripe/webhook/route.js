import Stripe from "stripe";
import { MongoClient } from "mongodb";
import { premiumPriceId } from "@/lib/stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(request) {
  try {
    // Read webhook body only once
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

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Get recipe ID from Stripe metadata
      const recipeId = session.metadata?.recipeId;

      console.log("Recipe ID from webhook:", recipeId);

      await client.connect();

      const database = client.db("RecipeDB");

      const transactions = database.collection("transactions");
      const userInfo = database.collection("user");

      // Update user
      const premiumType = session.metadata?.premiumType;
      console.log("Premium Type from webhook:", premiumType);

      if (premiumType === "premium_access") {
        const updateUserData = await userInfo.updateOne(
          {
            email: session.metadata?.userEmail,
          },
          {
            $set: {
              isPremium: true,
            },
          },
        );

        console.log("User updated:", updateUserData);
      }

      // Save transaction
      const transactionData = {
        stripeSessionId: session.id,

        transactionId:
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent?.id || null,

        userName: session.metadata?.userName || "",

        userEmail: session.metadata?.userEmail || "",

        amount: session.amount_total || 0,

        currency: session.currency || "",

        paymentStatus: session.payment_status || "",

        status: session.status || "",

        product: premiumType || "Premium Recipe",

        userId: session.metadata?.userId || null,

        recipeId: recipeId || null,

        paidAt: new Date(),
      };

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
    // CHECKOUT EXPIRED
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

    // Stripe needs 200 response
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
