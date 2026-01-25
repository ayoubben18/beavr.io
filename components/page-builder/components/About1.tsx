/**
 * About 1 Component
 *
 * About section with title at top, large image below, and multiple
 * description blocks below the image.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport.
 */

"use client";

import Image from "next/image";

import type { About1Props } from "@/lib/page-builder/component-props";

export function About1({ config, title, description1, image, description2, description3 }: About1Props) {
  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-4xl mx-auto space-y-8 @3xl:space-y-12">
        {/* Title */}
        <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground text-center">
          {title.label}
        </h2>

        {/* First Description */}
        <p className="text-base @3xl:text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          {description1.content}
        </p>

        {/* Image */}
        <div className="w-full">
          {image.url ? (
            <Image
              src={image.url}
              alt="About"
              width={1200}
              height={600}
              className="rounded-lg object-cover w-full"
            />
          ) : (
            <div className="bg-muted rounded-lg w-full aspect-[2/1] flex items-center justify-center">
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

        {/* Description Columns */}
        <div className="grid grid-cols-1 @3xl:grid-cols-2 gap-6 @3xl:gap-12">
          <p className="text-base text-muted-foreground">
            {description2.content}
          </p>
          <p className="text-base text-muted-foreground">
            {description3.content}
          </p>
        </div>
      </div>
    </section>
  );
}
