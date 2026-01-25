/**
 * FAQ 2 Component
 *
 * 2-column layout with promotional content (title, description, CTA) on one side
 * and accordion FAQ items on the other. Supports LTR/RTL layout direction.
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
import { Button } from "@/components/ui/button";
import type { Faq2Props } from "@/lib/page-builder/component-props";
import { cn } from "@/lib/utils";

export function Faq2({
  config,
  title,
  description,
  questions,
  cta,
}: Faq2Props) {
  const isRtl = config.direction === "rtl";

  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "flex flex-col gap-12 @3xl:gap-16",
            "@3xl:flex-row @3xl:items-start"
          )}
        >
          {/* Content side - title, description, CTA */}
          <div
            className={cn(
              "flex-1 @3xl:max-w-md",
              isRtl && "@3xl:order-2"
            )}
          >
            <h2 className="text-2xl @3xl:text-3xl @5xl:text-4xl font-bold text-foreground mb-4">
              {title.label}
            </h2>
            <p className="text-muted-foreground text-base @3xl:text-lg leading-relaxed mb-8">
              {description.content}
            </p>
            <Button
              style={{
                backgroundColor: cta.bgColor,
                color: cta.textColor,
                borderColor: cta.borderColor,
              }}
              className="rounded-full px-8"
            >
              {cta.label}
            </Button>
          </div>

          {/* FAQ Accordion side */}
          <div
            className={cn(
              "flex-1",
              isRtl && "@3xl:order-1"
            )}
          >
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
        </div>
      </div>
    </section>
  );
}
