/**
 * Navbar 4 Component
 *
 * Simple horizontal navigation bar with no floating container or border.
 * Clean minimal design: logo left, links center, button right.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport.
 */

"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Navbar4Props } from "@/lib/page-builder/component-props";
import { cn } from "@/lib/utils";

export function Navbar4({ logo, links, buttons }: Navbar4Props) {
  return (
    <section className="@container py-4 bg-foreground">
      <div className="container mx-auto px-4">
        {/* Desktop Menu - visible at container width >= 1024px (64rem = @5xl) */}
        <nav className="hidden items-center justify-between @5xl:flex">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            {logo.url ? (
              <Image
                src={logo.url}
                alt="Logo"
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            ) : (
              <div
                className="bg-muted/20 rounded flex items-center justify-center text-muted-foreground text-xs font-medium"
                style={{ width: logo.width, height: logo.height }}
              >
                Logo
              </div>
            )}
          </Link>


          {/* Button */}
          <div className="flex items-center gap-2 shrink-0">
            {links.items.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{ color: links.color }}
                className={cn(
                  "inline-flex h-10 items-center justify-center rounded-md px-4 py-2",
                  "text-sm font-medium transition-colors whitespace-nowrap",
                  "hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            {buttons.items.slice(0, 1).map((button) => (
              <Button
                key={button.label}
                asChild
                variant="outline"
                size="sm"
                className="whitespace-nowrap"
                style={{
                  color: button.textColor,
                  backgroundColor: button.bgColor,
                  borderColor: button.borderColor,
                }}
              >
                <Link href={button.href}>{button.label}</Link>
              </Button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu - visible at container width < 1024px */}
        <div className="flex items-center justify-between @5xl:hidden">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {logo.url ? (
              <Image
                src={logo.url}
                alt="Logo"
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            ) : (
              <div
                className="bg-muted/20 rounded flex items-center justify-center text-muted-foreground text-xs font-medium"
                style={{ width: logo.width, height: logo.height }}
              >
                Logo
              </div>
            )}
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    {logo.url ? (
                      <Image
                        src={logo.url}
                        alt="Logo"
                        width={logo.width}
                        height={logo.height}
                        className="object-contain"
                      />
                    ) : (
                      <div
                        className="bg-muted rounded flex items-center justify-center text-muted-foreground text-xs font-medium"
                        style={{ width: logo.width, height: logo.height }}
                      >
                        Logo
                      </div>
                    )}
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 p-4">
                {/* Mobile Links */}
                <div className="flex flex-col gap-4">
                  {links.items.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-md font-semibold text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile Button */}
                <div className="flex flex-col gap-3">
                  {buttons.items.slice(0, 1).map((button) => (
                    <Button
                      key={button.label}
                      asChild
                      variant="outline"
                      style={{
                        color: button.textColor,
                        backgroundColor: button.bgColor,
                        borderColor: button.borderColor,
                      }}
                    >
                      <Link href={button.href}>{button.label}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}
