import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export const premiumPriceId = {
  premium_recipe: "price_1UMuhc2Q49NqvM2tsA88spNN",
  premium_access: "price_1UMYg92Q49NqvM2t7GPMi7C6",
};
