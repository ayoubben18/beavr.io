import { parseAsInteger, parseAsString } from "nuqs";
import { createSearchParamsCache } from "nuqs/server";
import z from "zod";

export const formsSearchParamsProps = {
    page: parseAsInteger.withDefault(1),
    perPage: parseAsInteger.withDefault(10),
    q: parseAsString.withDefault(""),
};

// Create searchParamsCache for pages API
export const formsSearchParamsCache = createSearchParamsCache(formsSearchParamsProps);

export type GetPagesSchema = Awaited<
    ReturnType<typeof formsSearchParamsCache.parse>
>;
