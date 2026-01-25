/**
 * Testimonials 3 Component
 *
 * Large centered quote with navigation dots.
 * Displays a single testimonial at a time (carousel).
 * No avatar visible - just the quote text.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Testimonial3Props } from "@/lib/page-builder/component-props";
import { cn } from "@/lib/utils";

export function Testimonials3({
  config,
  title,
  testimonials,
  navigation,
}: Testimonial3Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : testimonials.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < testimonials.length - 1 ? prev + 1 : 0
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground mb-12">
          {title.label}
        </h2>

        {/* Large Quote Icon */}
        <svg
          className="h-12 w-12 @3xl:h-16 @3xl:w-16 text-muted-foreground/20 mx-auto mb-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>

        {/* Quote Text */}
        <p className="text-lg @3xl:text-xl @5xl:text-2xl text-foreground/80 leading-relaxed mb-8 @3xl:mb-12 min-h-[80px]">
          &ldquo;{currentTestimonial?.description}&rdquo;
        </p>

        {/* Navigation Controls */}
        {testimonials.length > 1 && (
          <div className="flex items-center justify-center gap-4">
            {/* Previous Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full h-10 w-10"
              style={{
                backgroundColor: navigation.bgColor,
                borderColor: navigation.borderColor,
                color: navigation.iconColor,
              }}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
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

            {/* Next Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full h-10 w-10"
              style={{
                backgroundColor: navigation.bgColor,
                borderColor: navigation.borderColor,
                color: navigation.iconColor,
              }}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
