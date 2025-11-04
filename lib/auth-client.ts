import { inferAdditionalFields, organizationClient, adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import type { auth } from "@/auth";
import { polarClient } from "@polar-sh/better-auth";

export const authClient = createAuthClient({
  plugins: [inferAdditionalFields<typeof auth>(), organizationClient(), polarClient(), adminClient()
  ],
});

export const { signIn, signOut, useSession } = authClient;
