import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { config } from "dotenv"
config({ path: ".env.local" })

// Validate environment variables
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

// Create connection
const connection = postgres(process.env.DATABASE_URL);

// Create drizzle instance
export const db = drizzle(connection, { schema });

export * from "./schema";