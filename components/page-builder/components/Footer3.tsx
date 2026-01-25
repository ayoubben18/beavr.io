/**
 * Footer 3 Component
 *
 * Footer with newsletter section at top, followed by logo/description,
 * navigation links, and copyright at the bottom.
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

export function Footer3({
  config,
  newsletter,
  logo,
  description,
  links,
  copyright,
}: Footer3Props) {
  return (
    <footer
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Newsletter section */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <div className="max-w-xl mx-auto text-center">
            <h3
              className="text-lg @3xl:text-xl font-semibold mb-4"
              style={{ color: links.color }}
            >
              {newsletter.title}
            </h3>
            <div className="flex flex-col @xl:flex-row gap-3">
              <Input
                type="email"
                placeholder={newsletter.placeholder}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="whitespace-nowrap">
                {newsletter.buttonText}
              </Button>
            </div>
          </div>
        </div>

        {/* Main content - logo/description and links */}
        <div className="flex flex-col gap-10 @3xl:flex-row @3xl:justify-between @3xl:items-start mb-12">
          {/* Logo and description */}
          <div className="@3xl:max-w-sm">
            {/* Logo */}
            <div className="mb-4">
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

            {/* Description */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: copyright.color }}
            >
              {description.content}
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.items.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                style={{ color: links.color }}
                className="text-sm hover:opacity-80 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom section - copyright */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-sm" style={{ color: copyright.color }}>
            {copyright.text}
          </p>
        </div>
      </div>
    </footer>
  );
}
