/**
 * Footer 4 Component
 *
 * Footer with logo/brand/socials and link columns at top,
 * and a full-width newsletter banner at bottom.
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
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Footer4Props } from "@/lib/page-builder/component-props";

/**
 * Map of social platform names to their icons.
 */
const socialIcons: Record<string, React.ElementType> = {
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  github: Github,
  youtube: Youtube,
};

export function Footer4({
  config,
  logo,
  brandName,
  socials,
  linkColumns,
  newsletter,
  copyright,
}: Footer4Props) {
  return (
    <footer
      style={{ backgroundColor: config.bgColor }}
      className="@container px-6 py-12 @3xl:py-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top: Branding + Link Columns */}
        <div className="flex flex-col @3xl:flex-row @3xl:justify-between gap-10 mb-12">
          {/* Left: Logo + Brand Name + Socials */}
          <div className="flex flex-col gap-4">
            {/* Logo */}
            {logo.url ? (
              <Image
                src={logo.url}
                alt="Logo"
                width={logo.width}
                height={logo.height}
                className="object-contain rounded-full"
              />
            ) : (
              <div
                className="bg-[#e8ddd4] rounded-full flex items-center justify-center"
                style={{ width: logo.width, height: logo.height }}
              >
                <svg
                  className="w-5 h-5 text-[#c4a882]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}

            {/* Brand Name */}
            <span className="font-medium text-foreground">
              {brandName.label}
            </span>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.map((social, index) => {
                const Icon = socialIcons[social.platform] || Github;
                return (
                  <Link
                    key={index}
                    href={social.url}
                    className="w-8 h-8 rounded-full bg-[#e8ddd4] flex items-center justify-center text-[#8d7b6a] hover:bg-[#d4c4b5] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Link Columns */}
          <div className="grid grid-cols-2 @xl:grid-cols-4 gap-8">
            {linkColumns.map((column, colIndex) => (
              <div key={colIndex}>
                <h4 className="font-semibold text-sm text-foreground mb-4">
                  {column.heading}
                </h4>
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
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Newsletter Banner */}
        <div className="bg-[#e8ddd4] rounded-2xl p-6 @3xl:p-10">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg @3xl:text-xl font-semibold text-foreground mb-2">
              {newsletter.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              {newsletter.subtitle}
            </p>
            <div className="flex flex-col @sm:flex-row gap-3 justify-center">
              <Input
                type="email"
                placeholder={newsletter.placeholder}
                className="@sm:max-w-xs bg-white border-[#d4c4b5]"
              />
              <Button className="whitespace-nowrap bg-[#8d7b6a] hover:bg-[#7a6a5b] text-white">
                {newsletter.buttonText}
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-sm" style={{ color: copyright.color }}>
            {copyright.text}
          </p>
        </div>
      </div>
    </footer>
  );
}
