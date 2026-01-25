/**
 * Testimonials 1 Component
 *
 * Testimonial carousel with title centered and 3 cards in a row.
 * Each card displays a quote and author name.
 * Navigation arrows allow cycling through testimonials.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Testimonial1Props } from "@/lib/page-builder/component-props";
import { cn } from "@/lib/utils";

export function Testimonials1({
  config,
  title,
  navigation,
  testimonials,
}: Testimonial1Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
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
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
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
                <span className="sr-only">Previous</span>
              </Button>
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
                <span className="sr-only">Next</span>
              </Button>
            </div>
          )}
        </div>

        {/* Testimonial cards */}
        <div
          className={cn(
            "grid gap-6",
            "@3xl:grid-cols-2 @5xl:grid-cols-3"
          )}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${startIndex + index}`}
              className="bg-muted/30 border border-border rounded-xl p-6 @3xl:p-8"
            >
              {/* Quote icon */}
              <svg
                className="h-8 w-8 text-muted-foreground/30 mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>

              {/* Quote text */}
              <p className="text-foreground/80 text-base @3xl:text-lg mb-6 leading-relaxed">
                {testimonial.description}
              </p>

              {/* Author */}
              <p className="text-foreground font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  currentPage === idx
                    ? "w-8 bg-foreground"
                    : "w-2 bg-muted-foreground/30"
                )}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
