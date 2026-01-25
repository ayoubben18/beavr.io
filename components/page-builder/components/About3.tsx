/**
 * About 3 Component
 *
 * About section with image and two description paragraphs.
 * Supports LTR/RTL layout direction.
 * Default layout: Image on left (RTL), content on right.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport.
 */

"use client";

import Image from "next/image";

import type { About3Props } from "@/lib/page-builder/component-props";
import { cn } from "@/lib/utils";

export function About3({ config, title, description1, image, description2 }: About3Props) {
  const isRtl = config.direction === "rtl";

  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div
        className={cn(
          "max-w-6xl mx-auto flex flex-col items-center gap-8",
          "@3xl:flex-row @3xl:gap-12",
          isRtl && "@3xl:flex-row-reverse"
        )}
      >
        {/* Image */}
        <div className="flex-1 w-full">
          {image.url ? (
            <Image
              src={image.url}
              alt="About"
              width={600}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          ) : (
            <div className="bg-muted rounded-lg w-full aspect-[6/5] flex items-center justify-center">
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
          )}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6 text-center @3xl:text-left">
          <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground">
            {title.label}
          </h2>

          <p className="text-base @3xl:text-lg text-muted-foreground">
            {description1.content}
          </p>

          <p className="text-base text-muted-foreground">
            {description2.content}
          </p>
        </div>
      </div>
    </section>
  );
}
