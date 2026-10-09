import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI, {
  family: 4,
});

const db = client.db("RecipeDB");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  trustedOrigins: [
    "https://recipe-hub-fronted.vercel.app",
    "http://localhost:3000",
  ],

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
    },
  },

  user: {
    additionalFields: {
      role: {
        default: "user",
      },

      isPremium: {
        type: "boolean",
        required: false,
        defaultValue: false,
        input: false,
      },
      isBlocked: {
        type: "string",
        required: false,
        defaultValue: "Unlocked",
        input: false,
        returned: true,
      },
    },
  },

  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 1 * 24 * 60 * 60,
    },
  },

  plugins: [jwt()],
});
