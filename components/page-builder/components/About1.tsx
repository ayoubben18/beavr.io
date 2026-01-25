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
import { ImagePlaceholder } from "./ImagePlaceholder";

export function About1({ config, title, description1, image, description2, description3 }: About1Props) {
  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-4xl mx-auto space-y-8 @3xl:space-y-12">
        {/* Title + Description1 Row */}
        <div className="grid grid-cols-1 @3xl:grid-cols-2 gap-6 @3xl:gap-12">
          <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground">
            {title.label}
          </h2>
          <p className="text-base text-muted-foreground">
            {description1.content}
          </p>
        </div>

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
            <ImagePlaceholder aspectRatio="aspect-[2/1]" />
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
