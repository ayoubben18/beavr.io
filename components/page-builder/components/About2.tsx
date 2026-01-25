/**
 * About 2 Component
 *
 * 2-column about section with image on left and text sections on right.
 * Includes a highlight section block below the main description.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport.
 */

"use client";

import Image from "next/image";

import type { About2Props } from "@/lib/page-builder/component-props";

export function About2({ config, title, description, image, section }: About2Props) {
  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col @3xl:flex-row gap-8 @3xl:gap-12 items-center">
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
            {description.content}
          </p>

          {/* Highlight Section */}
          <div className="pt-4 border-t border-border">
            <h3 className="text-lg @3xl:text-xl font-semibold text-foreground mb-2">
              {section.title}
            </h3>
            <p className="text-base text-muted-foreground">
              {section.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
