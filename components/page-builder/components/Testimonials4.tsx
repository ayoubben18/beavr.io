/**
 * Testimonials 4 Component
 *
 * Centered testimonial with overlapping avatars at top.
 * Shows all avatars stacked/overlapping, displays single quote at a time.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import { useState } from "react";

import type { Testimonial4Props } from "@/lib/page-builder/component-props";
import { cn } from "@/lib/utils";

export function Testimonials4({
  config,
  title,
  testimonials,
  navigation,
}: Testimonial4Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground mb-8 @3xl:mb-12">
          {title.label}
        </h2>

        {/* Overlapping Avatars */}
        <div className="flex justify-center mb-8">
          <div className="flex -space-x-3">
            {testimonials.map((testimonial, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "relative rounded-full transition-all duration-200",
                  "ring-2 ring-white",
                  currentIndex === idx
                    ? "z-10 scale-110 ring-primary"
                    : "hover:scale-105"
                )}
                aria-label={`View testimonial ${idx + 1}`}
              >
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={`Testimonial author ${idx + 1}`}
                    className="h-12 w-12 @3xl:h-14 @3xl:w-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-12 w-12 @3xl:h-14 @3xl:w-14 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Large Quote Icon */}
        <svg
          className="h-10 w-10 @3xl:h-12 @3xl:w-12 text-muted-foreground/20 mx-auto mb-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>

        {/* Quote Text */}
        <p className="text-lg @3xl:text-xl text-foreground/80 leading-relaxed mb-8 min-h-[60px]">
          &ldquo;{currentTestimonial?.description}&rdquo;
        </p>

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
                    ? "w-8"
                    : "w-2 hover:bg-muted-foreground/50"
                )}
                style={{
                  backgroundColor:
                    currentIndex === idx
                      ? navigation.iconColor
                      : navigation.borderColor,
                }}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
