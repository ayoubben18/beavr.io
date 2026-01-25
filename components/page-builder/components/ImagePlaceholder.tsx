/**
 * Image Placeholder Component
 *
 * Displays a placeholder when no image is provided.
 * Reusable across all page builder components.
 */

import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  /** Aspect ratio class (e.g., "aspect-[3/2]", "aspect-video") */
  aspectRatio?: string;
  /** Additional className */
  className?: string;
  /** Label text (default: "Image") */
  label?: string;
};

export function ImagePlaceholder({
  aspectRatio = "aspect-[3/2]",
  className,
  label = "Image",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "bg-muted rounded-lg w-full flex items-center justify-center",
        aspectRatio,
        className
      )}
    >
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
          aria-hidden="true"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
        <span>{label}</span>
      </div>
    </div>
  );
}
