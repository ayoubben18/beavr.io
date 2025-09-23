import { parseAsInteger, parseAsString } from "nuqs";
import { createSearchParamsCache } from "nuqs/server";
import z from "zod";

export const searchParamsParsers = {
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(10),
  search: parseAsString.withDefault(""),
};

// Create searchParamsCache for pages API
export const searchParamsCache = createSearchParamsCache(searchParamsParsers);

export type GetPagesSchema = Awaited<
  ReturnType<typeof searchParamsCache.parse>
>;

// Validation schemas
export const createPageSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

export const updatePageSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  content: z.string().min(1, "Content is required").optional(),
});

export type CreatePageSchema = z.infer<typeof createPageSchema>;
export type UpdatePageSchema = z.infer<typeof updatePageSchema>;
