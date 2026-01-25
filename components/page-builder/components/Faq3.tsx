/**
 * FAQ 3 Component
 *
 * Title centered at top, 2-column grid of Q&A items (not accordion).
 * Questions and answers are always visible - no expand/collapse.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import type { Faq3Props } from "@/lib/page-builder/component-props";

export function Faq3({ config, title, questions }: Faq3Props) {
  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground text-center mb-12 @3xl:mb-16">
          {title.label}
        </h2>

        {/* 2-Column Grid of Q&A Items */}
        <div className="grid grid-cols-1 @3xl:grid-cols-2 gap-8 @3xl:gap-12">
          {questions.map((item, index) => (
            <div key={`faq-${index}`} className="space-y-2">
              <h3 className="text-base @3xl:text-lg font-semibold text-foreground">
                {item.question}
              </h3>
              <p className="text-muted-foreground text-sm @3xl:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
