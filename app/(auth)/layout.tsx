import { ChevronLeft } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import Logo from "@/public/logo.svg";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Decorative gradient ellipses */}
      <div
        className="pointer-events-none absolute -right-[200px] -top-[330px] size-[939px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, hsl(var(--primary) / 0.15) 40%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-[200px] -left-[337px] size-[939px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, hsl(var(--primary) / 0.15) 40%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Back to home link */}
      <Link
        href="/"
        className="absolute left-[50px] top-[48px] z-20 flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
        <ChevronLeft className="size-4" />
        Home Page
      </Link>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 pb-12 pt-[77px]">
        <div className="flex w-full max-w-[417px] flex-col items-center gap-6">
          {/* Logo */}
          <Link href="/">
            <Image
              src={Logo}
              width={180}
              height={45}
              className="h-11 w-auto"
              alt="Beavr.io"
            />
          </Link>

          {/* Auth card (children) */}
          {children}
        </div>
      </div>
    </div>
  );
}
