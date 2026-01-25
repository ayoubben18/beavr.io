/**
 * Footer 1 Component
 *
 * Modern footer layout with:
 * - Left: Logo (circle) + brand name + tagline + social icons
 * - Right: Dynamic link columns (1-4)
 * - Bottom: Divider + copyright + legal links
 *
 * Uses CSS Container Queries (@container) for responsiveness based on
 * parent container width, not browser viewport.
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Youtube,
  Music2,
  MessageCircle,
  Dribbble,
  Palette,
  type LucideIcon,
} from "lucide-react";

import type { Footer1Props } from "@/lib/page-builder/component-props";

/**
 * Map of social platform identifiers to their icons
 */
const socialIcons: Record<string, LucideIcon> = {
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  github: Github,
  youtube: Youtube,
  tiktok: Music2,
  discord: MessageCircle,
  dribbble: Dribbble,
  behance: Palette,
};

export function Footer1({
  config,
  logo,
  brandName,
  description,
  socials,
  linkColumns,
  legalLinks,
  copyright,
}: Footer1Props) {
  return (
    <footer
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main content: Left branding + Right link columns */}
        <div className="flex flex-col @3xl:flex-row gap-12 @3xl:gap-8">
          {/* Left side: Logo, brand, tagline, socials */}
          <div className="@3xl:w-1/4 space-y-4">
            {/* Logo */}
            <div
              className="rounded-full bg-primary/10 overflow-hidden flex items-center justify-center"
              style={{ width: logo.width, height: logo.height }}
            >
              {logo.url ? (
                <Image
                  src={logo.url}
                  alt={brandName.label || "Logo"}
                  width={logo.width}
                  height={logo.height}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-primary/20" />
              )}
            </div>

            {/* Brand name */}
            <h3 className="font-semibold text-foreground text-lg">
              {brandName.label}
            </h3>

            {/* Tagline */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description.content}
            </p>

            {/* Social icons */}
            {socials && socials.length > 0 && (
              <div className="flex gap-2 pt-2">
                {socials.map((social, index) => {
                  const Icon = socialIcons[social.platform];
                  if (!Icon) return null;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right side: Link columns */}
          {linkColumns && linkColumns.length > 0 && (
            <div
              className={`flex-1 grid gap-8 ${
                linkColumns.length === 1
                  ? "grid-cols-1"
                  : linkColumns.length === 2
                  ? "grid-cols-2"
                  : linkColumns.length === 3
                  ? "grid-cols-2 @3xl:grid-cols-3"
                  : "grid-cols-2 @3xl:grid-cols-4"
              }`}
            >
              {linkColumns.map((column, columnIndex) => (
                <div key={columnIndex}>
                  <h4 className="font-semibold text-foreground mb-4">
                    {column.heading}
                  </h4>
                  {column.links && column.links.length > 0 && (
                    <ul className="space-y-3">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom: Copyright + Legal links */}
        <div className="flex flex-col @xl:flex-row @xl:items-center @xl:justify-between gap-4">
          <p className="text-sm" style={{ color: copyright.color }}>
            {copyright.text}
          </p>

          {legalLinks && legalLinks.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
