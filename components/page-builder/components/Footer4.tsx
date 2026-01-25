/**
 * Footer 4 Component
 *
 * Footer with prominent newsletter section at top, followed by logo/description,
 * navigation links, and copyright at the bottom. The newsletter is more visually
 * prominent than Footer3.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Footer3Props } from "@/lib/page-builder/component-props";

export function Footer4({
  config,
  newsletter,
  logo,
  description,
  links,
  copyright,
}: Footer3Props) {
  // Determine if using light or dark theme based on background
  const isLightBg =
    config.bgColor.toLowerCase() === "#ffffff" ||
    config.bgColor.toLowerCase() === "#fff" ||
    config.bgColor.toLowerCase() === "#f5f5f5";

  return (
    <footer
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Prominent newsletter section */}
        <div className="mb-12 pb-12 border-b border-current/10">
          <div className="flex flex-col @3xl:flex-row @3xl:items-center @3xl:justify-between gap-8">
            {/* Newsletter text */}
            <div className="@3xl:max-w-md">
              <h3
                className="text-2xl @3xl:text-3xl font-bold mb-2"
                style={{ color: links.color }}
              >
                {newsletter.title}
              </h3>
              <p
                className="text-sm"
                style={{ color: copyright.color }}
              >
                {description.content}
              </p>
            </div>

            {/* Newsletter form */}
            <div className="flex flex-col @xl:flex-row gap-3 @3xl:min-w-[400px]">
              <Input
                type="email"
                placeholder={newsletter.placeholder}
                className={`flex-1 ${
                  isLightBg
                    ? "bg-white border-border"
                    : "bg-white/10 border-white/20 text-white placeholder:text-white/50"
                }`}
              />
              <Button className="whitespace-nowrap px-8">
                {newsletter.buttonText}
              </Button>
            </div>
          </div>
        </div>

        {/* Footer content - logo and links side by side */}
        <div className="flex flex-col gap-10 @3xl:flex-row @3xl:justify-between @3xl:items-start mb-12">
          {/* Logo */}
          <div>
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
                className="bg-muted/20 rounded flex items-center justify-center"
                style={{ width: logo.width, height: logo.height }}
              >
                <svg
                  className="w-8 h-8 text-muted-foreground/30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.items.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                style={{ color: links.color }}
                className="text-sm hover:opacity-80 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom section - copyright */}
        <div className="border-t border-current/10 pt-8">
          <p className="text-sm text-center" style={{ color: copyright.color }}>
            {copyright.text}
          </p>
        </div>
      </div>
    </footer>
  );
}
