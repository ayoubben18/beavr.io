/**
 * Services 3 Component
 *
 * Title at top-left with service cards in a 2-column grid below.
 * Each card features an image, title, and description.
 * Cards stack vertically on mobile.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport.
 */

"use client";

import Image from "next/image";

import type { Services3Props } from "@/lib/page-builder/component-props";

export function Services3({ config, title, services }: Services3Props) {
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

        {/* Service cards grid - 2 columns max */}
        <div className="grid grid-cols-1 @3xl:grid-cols-2 gap-6 @3xl:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-muted/30 border border-border rounded-2xl p-6 @3xl:p-8"
            >
              {/* Service image */}
              <div className="relative h-12 w-12 mb-6 rounded-xl overflow-hidden bg-muted/50 border border-border flex items-center justify-center">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <svg
                    className="h-6 w-6 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                )}
              </div>

              {/* Service title */}
              <h3 className="text-xl @3xl:text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Service description */}
              <p className="text-muted-foreground text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
