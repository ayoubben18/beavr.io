/**
 * Testimonials 3 Component
 *
 * Large centered quote with avatar below.
 * Displays a single testimonial at a time with pagination dots.
 * Auto-rotates testimonials with configurable interval.
 * Only shows avatar and quote - no name/role.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport.
 */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import type { Testimonial3Props } from "@/lib/page-builder/component-props";
import { cn } from "@/lib/utils";

export function Testimonials3({
  config,
  title,
  testimonials,
}: Testimonial3Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = testimonials[currentIndex];

  // Auto-play rotation
  useEffect(() => {
    if (!config.autoPlayInterval || config.autoPlayInterval <= 0) return;
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < testimonials.length - 1 ? prev + 1 : 0
      );
    }, config.autoPlayInterval * 1000);

    return () => clearInterval(interval);
  }, [config.autoPlayInterval, testimonials.length]);

  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground mb-8 @3xl:mb-12">
          {title.label}
        </h2>

        {/* Quote Text */}
        <p className="text-lg @3xl:text-xl @5xl:text-2xl text-foreground leading-relaxed mb-8 @3xl:mb-12">
          &ldquo;{currentTestimonial?.description}&rdquo;
        </p>

        {/* Avatar */}
        <div className="flex justify-center mb-8 @3xl:mb-12">
          {currentTestimonial?.image ? (
            <Image
              src={currentTestimonial.image}
              alt="Testimonial author"
              width={48}
              height={48}
              className="rounded-full object-cover w-12 h-12"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <svg
                className="w-6 h-6 text-muted-foreground"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          )}
        </div>

        {/* Pagination Dots */}
        {testimonials.length > 1 && (
          <div className="flex items-center justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  currentIndex === idx
                    ? "w-8 bg-foreground"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
