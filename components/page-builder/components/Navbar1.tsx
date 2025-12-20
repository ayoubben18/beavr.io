/**
 * Navbar 1 Component
 *
 * Standard navigation bar with logo, links, and buttons.
 * Includes responsive mobile menu using Sheet component.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
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
import type { Navbar1Props } from "@/lib/page-builder/component-props";
import { cn } from "@/lib/utils";

export function Navbar1({ logo, links, buttons }: Navbar1Props) {
  return (
    <section className="@container py-4 bg-white">
      <div className="container mx-auto px-4">
        {/* Desktop Menu - visible at container width >= 1024px (64rem = @5xl) */}
        <nav className="hidden items-center justify-between @5xl:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
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

            {/* Links */}
            <div className="flex items-center gap-1">
              {links.items.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{ color: links.color }}
                  className={cn(
                    "inline-flex h-10 items-center justify-center rounded-md px-4 py-2",
                    "text-sm font-medium transition-colors",
                    "hover:bg-muted hover:text-accent-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            {buttons.items.map((button, index) => (
              <Button
                key={button.label}
                asChild
                variant={index === 0 ? "outline" : "default"}
                size="sm"
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

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
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
                      style={{ color: links.color }}
                      className="text-md font-semibold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile Buttons */}
                <div className="flex flex-col gap-3">
                  {buttons.items.map((button, index) => (
                    <Button
                      key={button.label}
                      asChild
                      variant={index === 0 ? "outline" : "default"}
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
