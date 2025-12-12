import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/db";
import { organization } from "better-auth/plugins"
import { polar, checkout, portal, usage, webhooks } from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";
import { config } from "dotenv"
import { admin } from "better-auth/plugins"

config({ path: ".env.local" })

const polarClient = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN,
  // Use 'sandbox' if you're using the Polar Sandbox environment
  // Remember that access tokens, products, etc. are completely separated between environments.
  // Access tokens obtained in Production are for instance not usable in the Sandbox environment.
  server: 'sandbox'
});
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url, token }, _request) => {
      // TODO: Implement actual email sending service
      console.log(`Password reset email for ${user.email}: ${url}`);
      console.log(`Reset token: ${token}`);
    },
    onPasswordReset: async ({ user }, _request) => {
      console.log(`Password reset completed for user: ${user.email}`);
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, _request) => {
      // TODO: Implement actual email sending service
      console.log(`Email verification for ${user.email}: ${url}`);
      console.log(`Verification token: ${token}`);
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "customer",
        input: false,
      },
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      mapProfileToUser: (_profile) => {
        return {
          role: "customer",
        };
      },
    },
  },
  advanced: {
    database: {
      generateId: false,
    },
  },
  plugins: [
    nextCookies(),
    organization(),
    admin(),
    polar({
      client: polarClient,
      createCustomerOnSignUp: false,
      use: [
        checkout({
          products: [
            {
              productId: "123-456-789", // ID of Product from Polar Dashboard
              slug: "pro" // Custom slug for easy reference in Checkout URL, e.g. /checkout/pro
            }
          ],
          successUrl: "/success?checkout_id={CHECKOUT_ID}",
          authenticatedUsersOnly: true
        }),
        portal(),
        usage(),
        // webhooks({
        //     secret: process.env.POLAR_WEBHOOK_SECRET,
        //     onCustomerStateChanged: (payload) => // Triggered when anything regarding a customer changes
        //     onOrderPaid: (payload) => // Triggered when an order was paid (purchase, subscription renewal, etc.)
        //     ...  // Over 25 granular webhook handlers
        //     onPayload: (payload) => // Catch-all for all events
        // })
      ],
    })
  ],
});