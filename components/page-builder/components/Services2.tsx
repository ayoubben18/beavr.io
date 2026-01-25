/**
 * Services 2 Component
 *
 * Services carousel with smooth horizontal scrolling.
 * Shows 4 cards on desktop, 3 on tablet, 2 on small tablet, 1 on mobile.
 * Navigation arrows scroll the carousel with animation.
 * Auto-scrolls with configurable interval.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport.
 */

"use client";

import { useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Services2Props } from "@/lib/page-builder/component-props";

export function Services2({
  config,
  title,
  navigation,
  services,
}: Services2Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.querySelector("div")?.offsetWidth || 300;
    const gap = 24; // gap-6 = 1.5rem = 24px
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }, []);

  // Auto-play scroll
  useEffect(() => {
    if (!config.autoPlayInterval || config.autoPlayInterval <= 0) return;
    if (services.length <= 1) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;

      // If at the end, scroll back to start
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, config.autoPlayInterval * 1000);

    return () => clearInterval(interval);
  }, [config.autoPlayInterval, services.length, scroll]);

  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header with title and navigation */}
        <div className="flex flex-col @3xl:flex-row @3xl:items-center @3xl:justify-between gap-6 mb-12">
          <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground text-center @3xl:text-left">
            {title.label}
          </h2>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full h-10 w-10"
              style={{
                backgroundColor: navigation.bgColor,
                borderColor: navigation.borderColor,
                color: navigation.textColor,
              }}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full h-10 w-10"
              style={{
                backgroundColor: navigation.bgColor,
                borderColor: navigation.borderColor,
                color: navigation.textColor,
              }}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        {/* Service cards - horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              className="flex-shrink-0 w-full @xl:w-[calc(50%-12px)] @3xl:w-[calc(33.333%-16px)] @5xl:w-[calc(25%-18px)] bg-muted/30 border border-border rounded-xl p-6 @3xl:p-8 snap-start"
            >
              {/* Service icon/image */}
              <div className="h-12 w-12 rounded-lg bg-muted/50 border border-border mb-4 flex items-center justify-center overflow-hidden">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
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
    </section>
  );
}
