"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { Toaster } from "sonner";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem

          disableTransitionOnChange
        >
          <Toaster richColors />

          {children}
        </ThemeProvider>
      </NuqsAdapter>
    </QueryClientProvider>
  );
}