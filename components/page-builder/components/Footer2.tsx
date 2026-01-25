/**
 * Footer 2 Component
 *
 * Modern footer layout with:
 * - Top left: Logo (circle) + brand name
 * - Top right: 4 link columns (header + links each)
 * - Divider line
 * - Bottom: Centered social icons + copyright
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

import type { Footer2Props } from "@/lib/page-builder/component-props";

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

export function Footer2({
  config,
  logo,
  brandName,
  linkColumns,
  socials,
  copyright,
}: Footer2Props) {
  return (
    <footer
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main content: Logo/brand left + Link columns right */}
        <div className="flex flex-col @3xl:flex-row gap-12 @3xl:gap-8 mb-12">
          {/* Left side: Logo + Brand name */}
          <div className="@3xl:w-1/5 flex flex-col gap-2">
            {/* Circular logo */}
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
            <span className="text-sm font-medium text-foreground">
              {brandName.label}
            </span>
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
                  ? "grid-cols-2 @xl:grid-cols-3"
                  : "grid-cols-2 @xl:grid-cols-4"
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
        <div className="border-t border-border mb-8" />

        {/* Bottom: Social icons + Copyright (centered) */}
        <div className="flex flex-col items-center gap-4">
          {/* Social icons */}
          {socials && socials.length > 0 && (
            <div className="flex gap-2">
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

          {/* Copyright */}
          <p className="text-sm" style={{ color: copyright.color }}>
            {copyright.text}
          </p>
        </div>
      </div>
    </footer>
  );
}
