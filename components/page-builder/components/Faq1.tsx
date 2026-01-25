/**
 * FAQ 1 Component
 *
 * Simple accordion FAQ with title at top, full-width accordion items below.
 * Clean and minimal design with expand/collapse functionality.
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport. This is essential for
 * the page builder preview to work correctly at different viewport sizes.
 */

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq1Props } from "@/lib/page-builder/component-props";

export function Faq1({ config, title, questions }: Faq1Props) {
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

        {/* Accordion FAQ Items */}
        <Accordion type="single" collapsible className="w-full">
          {questions.map((item, index) => (
            <AccordionItem key={`faq-${index}`} value={`item-${index}`}>
              <AccordionTrigger className="text-base @3xl:text-lg font-medium text-foreground text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm @3xl:text-base leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
