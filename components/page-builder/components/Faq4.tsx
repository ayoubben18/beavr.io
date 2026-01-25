/**
 * FAQ 4 Component
 *
 * Title at top, simple rows with question/answer separated by borders.
 * Clean rows with question bold, answer muted, border separators.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import type { Faq1Props } from "@/lib/page-builder/component-props";

export function Faq4({ config, title, questions }: Faq1Props) {
  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground text-center mb-12">
          {title.label}
        </h2>

        {/* FAQ Rows with Borders */}
        <div className="divide-y divide-border">
          {questions.map((item, index) => (
            <div
              key={`faq-${index}`}
              className="py-6 first:pt-0 last:pb-0"
            >
              <h3 className="text-base @3xl:text-lg font-semibold text-foreground mb-2">
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
