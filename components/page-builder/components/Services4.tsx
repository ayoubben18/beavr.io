/**
 * Services 4 Component
 *
 * Title centered at top with a list of text-only service items below.
 * Clean and simple design without images, featuring title and description per item.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import type { Services4Props } from "@/lib/page-builder/component-props";

export function Services4({ config, title, services }: Services4Props) {
  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground text-center mb-12 @3xl:mb-16">
          {title.label}
        </h2>

        {/* Services list */}
        <div className="space-y-8 @3xl:space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-b border-border pb-8 @3xl:pb-12 last:border-b-0 last:pb-0"
            >
              {/* Service number and title */}
              <div className="flex items-start gap-4 @3xl:gap-6 mb-3">
                <span className="flex-shrink-0 w-8 h-8 @3xl:w-10 @3xl:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm @3xl:text-base">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg @3xl:text-xl font-semibold text-foreground pt-1">
                  {service.title}
                </h3>
              </div>

              {/* Service description */}
              <div className="pl-12 @3xl:pl-16">
                <p className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
