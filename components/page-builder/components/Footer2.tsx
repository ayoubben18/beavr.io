/**
 * Footer 2 Component
 *
 * Same as Footer1 but with centered bottom section (copyright centered).
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import Image from "next/image";
import Link from "next/link";

import type { Footer1Props } from "@/lib/page-builder/component-props";

export function Footer2({
  config,
  logo,
  description,
  links,
  copyright,
}: Footer1Props) {
  return (
    <footer
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-16"
    >
      <div className="max-w-6xl mx-auto">
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

        {/* Bottom section - centered copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm" style={{ color: copyright.color }}>
            {copyright.text}
          </p>
        </div>
      </div>
    </footer>
  );
}
