/**
 * Hero 3 Component
 *
 * Centered hero section with vertical layout.
 * Title -> Description -> Image -> CTAs
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { Hero3Props } from "@/lib/page-builder/component-props";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function Hero3({ config, title, description, image, cta }: Hero3Props) {
  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-16 @3xl:py-24"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Title */}
        <h1 className="text-3xl @3xl:text-4xl @5xl:text-5xl font-bold text-foreground">
          {title.label}
        </h1>

        {/* Description */}
        <p className="text-base @3xl:text-lg text-muted-foreground max-w-2xl mx-auto">
          {description.content}
        </p>

        {/* Image */}
        {image.url ? (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src={image.url}
              alt={title.label}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <ImagePlaceholder aspectRatio="aspect-video" className="rounded-xl" />
        )}

        {/* CTA Buttons */}
        {cta.items.length > 0 && (
          <div className="flex flex-wrap gap-3 justify-center pt-4">
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
    </section>
  );
}
