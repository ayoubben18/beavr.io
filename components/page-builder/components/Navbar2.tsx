/**
 * Navbar 2 Component
 *
 * Floating centered navigation bar with rounded container.
 * Logo on left, links in center, button on right.
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
import type { Navbar2Props } from "@/lib/page-builder/component-props";
import { cn } from "@/lib/utils";

export function Navbar2({ config, logo, links, buttons }: Navbar2Props) {
  return (
    <section className="@container pt-0">
      <div className="flex justify-center px-4">
        {/* Navbar container - centered, rounded bottom corners */}
        <div
          className="px-6 py-3 rounded-b-2xl border border-t-0 w-full @5xl:w-auto @5xl:px-8"
          style={{
            backgroundColor: config.bgColor,
            borderColor: config.borderColor,
          }}
        >
          {/* Desktop Menu - visible at container width >= 1024px (64rem = @5xl) */}
          <nav className="hidden items-center justify-between gap-10 @5xl:flex">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src={logo.url || "/thumbnails/beavr.png"}
                alt="Logo"
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </Link>

            {/* Links */}
            <div className="flex items-center gap-2">
              {links.items.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{ color: links.color }}
                  className={cn(
                    "inline-flex h-10 items-center justify-center rounded-md px-4 py-2",
                    "text-sm font-medium transition-colors whitespace-nowrap",
                    "hover:bg-black/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Button */}
            <div className="flex gap-2 shrink-0">
              {buttons.items.slice(0, 1).map((button) => (
                <Button
                  key={button.label}
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full px-6 whitespace-nowrap"
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
              <Image
                src={logo.url || "/thumbnails/beavr.png"}
                alt="Logo"
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-2">
                      <Image
                        src={logo.url || "/thumbnails/beavr.png"}
                        alt="Logo"
                        width={logo.width}
                        height={logo.height}
                        className="object-contain"
                      />
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

                  {/* Mobile Button */}
                  <div className="flex flex-col gap-3">
                    {buttons.items.slice(0, 1).map((button) => (
                      <Button
                        key={button.label}
                        asChild
                        variant="outline"
                        className="rounded-full"
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
      </div>
    </section>
  );
}
