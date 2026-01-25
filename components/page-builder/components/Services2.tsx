/**
 * Services 2 Component
 *
 * Services carousel with title centered and cards in a row.
 * Each card displays a service image/icon, title, and description.
 * Navigation arrows allow cycling through services.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Services2Props } from "@/lib/page-builder/component-props";
import { cn } from "@/lib/utils";

export function Services2({
  config,
  title,
  navigation,
  services,
}: Services2Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const visibleServices = services.slice(startIndex, startIndex + itemsPerPage);

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
                  color: navigation.textColor,
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
                  color: navigation.textColor,
                }}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          )}
        </div>

        {/* Service cards */}
        <div
          className={cn(
            "grid gap-6",
            "@xl:grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-4"
          )}
        >
          {visibleServices.map((service, index) => (
            <div
              key={`${service.title}-${startIndex + index}`}
              className="bg-muted/30 border border-border rounded-xl p-6 @3xl:p-8"
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
