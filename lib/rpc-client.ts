import { hc } from "hono/client";
import type { AppType } from "@/app/api/[[...route]]/route";

const defaultInit: RequestInit = {
  cache: "no-store",
  next: {
    revalidate: 0,
  },
};

export const rpc = hc<AppType>("/", {
  init: {
    credentials: "include",
    ...defaultInit,
  },
});