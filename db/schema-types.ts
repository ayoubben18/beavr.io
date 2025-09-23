import * as schema from "./schema";

export type Users = typeof schema.users.$inferSelect;
export type Pages = typeof schema.pages.$inferSelect;
export type Sessions = typeof schema.sessions.$inferSelect;
export type Accounts = typeof schema.accounts.$inferSelect;
export type Verifications = typeof schema.verifications.$inferSelect;

export type InsertUsers = typeof schema.users.$inferInsert;
export type InsertPages = typeof schema.pages.$inferInsert;
export type InsertSessions = typeof schema.sessions.$inferInsert;
export type InsertAccounts = typeof schema.accounts.$inferInsert;
export type InsertVerifications = typeof schema.verifications.$inferInsert;
