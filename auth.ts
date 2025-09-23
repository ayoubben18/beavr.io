import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/db";

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
  ],
});