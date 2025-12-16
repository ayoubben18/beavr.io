/**
 * Hero 1 Component
 *
 * Full hero section with title, description, CTAs, and image.
 * Supports LTR/RTL layout direction.
 */

import Image from "next/image";
import Link from "next/link";
import type { Hero1Props } from "@/lib/page-builder/component-props";

export function Hero1({ config, title, description, cta, image }: Hero1Props) {
  const isRtl = config.direction === "rtl";

  return (
    <section
      style={{ backgroundColor: config.bgColor }}
      className="px-6 py-16 md:py-24"
    >
      <div
        className={`
          max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12
          ${isRtl ? "md:flex-row-reverse" : ""}
        `}
      >
        {/* Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {title.label}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            {description.content}
          </p>

          {/* CTA Buttons */}
          {cta.items.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {cta.items.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  style={{
                    color: button.textColor,
                    backgroundColor: button.bgColor,
                  }}
                  className="px-6 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                >
                  {button.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Image */}
        <div className="flex-1 w-full">
          {image.url ? (
            <Image
              src={image.url}
              alt="Hero"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          ) : (
            <div className="bg-muted rounded-lg w-full aspect-[3/2] flex items-center justify-center">
              <div className="text-muted-foreground text-sm flex flex-col items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-50"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <span>Image</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
