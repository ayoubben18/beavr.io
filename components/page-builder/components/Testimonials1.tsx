/**
 * Testimonials 1 Component
 *
 * Testimonial carousel with smooth horizontal scrolling.
 * Shows 3 cards on desktop, 2 on tablet, 1 on mobile.
 * Navigation arrows scroll the carousel with animation.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport.
 */

"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Testimonial1Props } from "@/lib/page-builder/component-props";

export function Testimonials1({
  config,
  title,
  navigation,
  testimonials,
}: Testimonial1Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.querySelector("div")?.offsetWidth || 300;
    const gap = 24; // gap-6 = 1.5rem = 24px
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

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
                color: navigation.iconColor,
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
                color: navigation.iconColor,
              }}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        {/* Testimonial cards - horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-full @3xl:w-[calc(50%-12px)] @5xl:w-[calc(33.333%-16px)] bg-background border border-border rounded-xl p-6 @3xl:p-8 flex flex-col snap-start"
            >
              {/* Quote text */}
              <p className="text-foreground text-base @3xl:text-lg mb-6 leading-relaxed flex-1">
                "{testimonial.description}"
              </p>

              {/* Author with avatar */}
              <div className="flex items-center gap-3">
                {testimonial.image ? (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-10 h-10"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-muted-foreground"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
                <div>
                  <p className="text-foreground font-semibold">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
