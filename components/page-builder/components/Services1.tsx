/**
 * Services 1 Component
 *
 * 2-column layout with promotional content (title, description, CTA) on one side
 * and a 2x2 grid of service cards on the other.
 * Supports LTR/RTL layout direction.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import type { Services1Props } from "@/lib/page-builder/component-props";
import { cn } from "@/lib/utils";

export function Services1({
  config,
  title,
  description,
  services,
  cta,
}: Services1Props) {
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
              "flex-shrink-0 @3xl:max-w-sm",
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

          {/* Services grid - 2x2 cards */}
          <div
            className={cn(
              "flex-1 grid grid-cols-1 @xl:grid-cols-2 gap-6",
              isRtl && "@3xl:order-1"
            )}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-muted/30 border border-border rounded-xl p-6 flex flex-col"
              >
                {/* Service icon/image */}
                <div className="relative h-12 w-12 mb-4 rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <svg
                      className="h-6 w-6 text-muted-foreground/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  )}
                </div>

                {/* Service title */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
