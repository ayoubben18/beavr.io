/**
 * Testimonials 2 Component
 *
 * 2-column layout with promotional content (title, description, CTA) on one side
 * and stacked testimonial cards with avatars on the other.
 * Supports LTR/RTL layout direction.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import type { Testimonial2Props } from "@/lib/page-builder/component-props";
import { cn } from "@/lib/utils";

export function Testimonials2({
  config,
  title,
  description,
  testimonials,
  cta,
}: Testimonial2Props) {
  const isRtl = config.direction === "rtl";

  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "flex flex-col gap-12 @3xl:gap-16",
            "@3xl:flex-row @3xl:items-start"
          )}
        >
          {/* Content side - title, description, CTA */}
          <div
            className={cn(
              "flex-1 @3xl:max-w-md",
              isRtl && "@3xl:order-2"
            )}
          >
            <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground mb-4">
              {title.label}
            </h2>
            <p className="text-muted-foreground text-base @3xl:text-lg leading-relaxed mb-8">
              {description.content}
            </p>
            <Button
              style={{
                backgroundColor: cta.bgColor,
                color: cta.textColor,
                borderColor: cta.borderColor,
              }}
              className="rounded-full px-8"
            >
              {cta.label}
            </Button>
          </div>

          {/* Testimonials side - stacked cards */}
          <div
            className={cn(
              "flex-1 flex flex-col gap-6",
              isRtl && "@3xl:order-1"
            )}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-muted/30 border border-border rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden bg-muted">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt="Customer avatar"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-muted-foreground/50">
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground/80 text-base leading-relaxed flex-1">
                    &ldquo;{testimonial.description}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
