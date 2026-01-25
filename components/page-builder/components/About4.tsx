/**
 * About 4 Component
 *
 * Flipped version of About 3.
 * Default layout: Content on left (LTR), image on right.
 * Supports LTR/RTL layout direction.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport.
 */

"use client";

import Image from "next/image";

import type { About4Props } from "@/lib/page-builder/component-props";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function About4({ config, title, description1, image, description2 }: About4Props) {
  const isRtl = config.direction === "rtl";

  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-6xl mx-auto space-y-8 @3xl:space-y-12">
        {/* Top Section: Title/Description1 + Image */}
        <div
          className={cn(
            "grid grid-cols-1 @3xl:grid-cols-2 gap-8 @3xl:gap-12 items-center",
            isRtl && "@3xl:direction-rtl"
          )}
        >
          {/* Title + Description1 */}
          <div className={cn("space-y-6", isRtl && "@3xl:order-2")}>
            <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground">
              {title.label}
            </h2>
            <p className="text-base @3xl:text-lg text-muted-foreground">
              {description1.content}
            </p>
          </div>

          {/* Image */}
          <div className={cn("w-full", isRtl && "@3xl:order-1")}>
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
        </div>

        {/* Bottom Section: Description2 full-width */}
        <p className="text-base text-muted-foreground">
          {description2.content}
        </p>
      </div>
    </section>
  );
}
