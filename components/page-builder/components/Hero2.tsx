/**
 * Hero 2 Component
 *
 * Variation of Hero1 with image on the LEFT by default (direction: rtl).
 * Full hero section with title, description, CTAs, and image.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport.
 */

"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { Hero2Props } from "@/lib/page-builder/component-props";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function Hero2({ config, title, description, cta, image }: Hero2Props) {
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
        {/* Content */}
        <div className="flex-1 space-y-6 text-center @3xl:text-left">
          <h1 className="text-3xl @3xl:text-4xl @5xl:text-5xl font-bold text-foreground">
            {title.label}
          </h1>

          <p className="text-base @3xl:text-lg text-muted-foreground max-w-xl mx-auto @3xl:mx-0">
            {description.content}
          </p>

          {/* CTA Buttons */}
          {cta.items.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center @3xl:justify-start">
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

        {/* Image */}
        <div className="flex-1 w-full">
          {image.url ? (
            <Image
              src={image.url}
              alt="Hero"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          ) : (
            <ImagePlaceholder />
          )}
        </div>
      </div>
    </section>
  );
}
