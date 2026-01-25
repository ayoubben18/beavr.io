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
import { ImagePlaceholder } from "./ImagePlaceholder";

export function About2({ config, title, description, image, section }: About2Props) {
  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-6xl mx-auto space-y-8 @3xl:space-y-12">
        {/* Top Section: Title + Description */}
        <div className="space-y-4">
          <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground">
            {title.label}
          </h2>
          <p className="text-base @3xl:text-lg text-muted-foreground max-w-2xl">
            {description.content}
          </p>
        </div>

        {/* Bottom Section: Image + Bordered Text Box */}
        <div className="grid grid-cols-1 @3xl:grid-cols-2 gap-6 @3xl:gap-12">
          {/* Image */}
          <div className="w-full">
            {image.url ? (
              <Image
                src={image.url}
                alt="About"
                width={600}
                height={500}
                className="rounded-lg object-cover w-full"
              />
            ) : (
              <ImagePlaceholder aspectRatio="aspect-[6/5]" />
            )}
          </div>

          {/* Bordered Text Box - text aligned to bottom */}
          <div className="border border-border rounded-lg p-6 flex flex-col justify-end overflow-hidden">
            <p className="text-base text-muted-foreground break-words">
              {section.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
