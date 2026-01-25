/**
 * Hero 4 Component
 *
 * Centered hero with bordered sections and decorative elements.
 * Features title, description, CTAs, and optional image.
 * No direction control - fixed layout design.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { Hero4Props } from "@/lib/page-builder/component-props";

export function Hero4({ config, title, description, cta, image }: Hero4Props) {
  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-16 @3xl:py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main bordered content area */}
        <div className="border border-border rounded-2xl p-8 @3xl:p-12 relative overflow-hidden">
          {/* Decorative diagonal lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 border-l border-border/50 transform rotate-45 translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-r border-border/50 transform rotate-45 -translate-x-16 translate-y-16" />
          </div>

          <div className="relative z-10 flex flex-col @3xl:flex-row items-center gap-8 @3xl:gap-12">
            {/* Content */}
            <div className="flex-1 space-y-6 text-center @3xl:text-left">
              {/* Title */}
              <h1 className="text-3xl @3xl:text-4xl @5xl:text-5xl font-bold text-foreground">
                {title.label}
              </h1>

              {/* Description */}
              <p className="text-base @3xl:text-lg text-muted-foreground max-w-xl mx-auto @3xl:mx-0">
                {description.content}
              </p>

              {/* CTA Buttons */}
              {cta.items.length > 0 && (
                <div className="flex flex-wrap gap-3 justify-center @3xl:justify-start pt-2">
                  {cta.items.map((button) => (
                    <Button
                      key={button.label}
                      asChild
                      style={{
                        color: button.textColor,
                        backgroundColor: button.bgColor,
                      }}
                      className="px-6 py-3 h-auto"
                    >
                      <Link href={button.href}>{button.label}</Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Image (optional) */}
            {image.url ? (
              <div className="flex-1 w-full max-w-md">
                <Image
                  src={image.url}
                  alt="Hero"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            ) : (
              <div className="flex-1 w-full max-w-md">
                <div className="bg-muted rounded-lg w-full aspect-[4/3] flex items-center justify-center">
                  <div className="text-muted-foreground text-sm flex flex-col items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-50"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                    <span>Image</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
