/**
 * Services 3 Component
 *
 * Title at top with 2 large service cards below.
 * Each card features a title, description, and feature list with checkmarks.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import Image from "next/image";
import { Check } from "lucide-react";

import type { Services3Props } from "@/lib/page-builder/component-props";

export function Services3({ config, title, services }: Services3Props) {
  // Generate placeholder features for demo (since schema doesn't have features)
  const placeholderFeatures = [
    "Professional consultation",
    "Custom solutions",
    "Ongoing support",
    "Quality assurance",
  ];

  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground text-center mb-12 @3xl:mb-16">
          {title.label}
        </h2>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 @3xl:grid-cols-2 gap-6 @3xl:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-muted/30 border border-border rounded-2xl p-6 @3xl:p-8 flex flex-col"
            >
              {/* Service icon/image */}
              {service.image && (
                <div className="relative h-16 w-16 mb-6 rounded-xl overflow-hidden bg-muted/50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Service title */}
              <h3 className="text-xl @3xl:text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Service description */}
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Feature list with checkmarks */}
              <ul className="space-y-3 mt-auto">
                {placeholderFeatures.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
