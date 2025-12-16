/**
 * Navbar 1 Component
 *
 * Standard navigation bar with logo, links, and buttons.
 * Receives props from the page builder and renders accordingly.
 */

import Image from "next/image";
import Link from "next/link";
import type { Navbar1Props } from "@/lib/page-builder/component-props";

export function Navbar1({ logo, links, buttons }: Navbar1Props) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      {/* Logo */}
      <div className="flex-shrink-0">
        {logo.url ? (
          <Image
            src={logo.url}
            alt="Logo"
            width={logo.width}
            height={logo.height}
            className="object-contain"
          />
        ) : (
          <div
            className="bg-muted rounded flex items-center justify-center text-muted-foreground text-xs font-medium"
            style={{ width: logo.width, height: logo.height }}
          >
            Logo
          </div>
        )}
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-6">
        {links.items.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            style={{ color: links.color }}
            className="text-sm font-medium transition-opacity hover:opacity-70"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        {buttons.items.map((button, index) => (
          <Link
            key={index}
            href={button.href}
            style={{
              color: button.textColor,
              backgroundColor: button.bgColor,
              borderColor: button.borderColor,
            }}
            className="px-4 py-2 rounded-lg border text-sm font-medium transition-opacity hover:opacity-90"
          >
            {button.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
