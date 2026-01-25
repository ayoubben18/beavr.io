/**
 * Services 4 Component
 *
 * Title at top-left with service rows stacked vertically below.
 * Each row has title on left and description on right, separated by dividers.
 * Clean horizontal layout per service item.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport.
 */

"use client";

import type { Services4Props } from "@/lib/page-builder/component-props";

export function Services4({ config, title, services }: Services4Props) {
  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title - left aligned */}
        <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground mb-12 @3xl:mb-16">
          {title.label}
        </h2>

        {/* Services rows with separators */}
        <div className="divide-y divide-border">
          {services.map((service, index) => (
            <div
              key={index}
              className="py-6 @3xl:py-8 flex flex-col @3xl:flex-row @3xl:items-start gap-4 @3xl:gap-12"
            >
              {/* Service title - left side */}
              <h3 className="text-lg @3xl:text-xl font-semibold text-foreground @3xl:w-1/3 @3xl:flex-shrink-0">
                {service.title}
              </h3>

              {/* Service description - right side */}
              <p className="text-muted-foreground text-base leading-relaxed @3xl:flex-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
