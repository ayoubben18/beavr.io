/**
 * Testimonials 4 Component
 *
 * Centered testimonial with a pill/badge containing 3 overlapping avatars
 * and a title. Single quote displayed below.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport.
 */

"use client";

import Image from "next/image";

import type { Testimonial4Props } from "@/lib/page-builder/component-props";

export function Testimonials4({
  config,
  avatars,
  title,
  description,
}: Testimonial4Props) {
  const avatarImages = [avatars.image1, avatars.image2, avatars.image3];

  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge with avatars and title */}
        <div className="flex justify-center mb-8 @3xl:mb-12">
          <div className="inline-flex items-center gap-3 bg-background rounded-full px-4 py-2 shadow-sm border border-border">
            {/* Overlapping Avatars */}
            <div className="flex -space-x-2">
              {avatarImages.map((image, idx) => (
                <div
                  key={idx}
                  className="relative rounded-full ring-2 ring-background"
                >
                  {image ? (
                    <Image
                      src={image}
                      alt={`Avatar ${idx + 1}`}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-muted-foreground"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Badge Title */}
            <span className="text-sm font-medium text-foreground">
              {title.label}
            </span>
          </div>
        </div>

        {/* Quote Text */}
        <p className="text-xl @3xl:text-2xl @5xl:text-3xl font-semibold text-foreground leading-relaxed">
          &ldquo;{description.content}&rdquo;
        </p>
      </div>
    </section>
  );
}
