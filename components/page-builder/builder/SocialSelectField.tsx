/**
 * Social Select Field
 *
 * A searchable dropdown for selecting social media platforms.
 * Uses Popover + Command components for a combobox-style UI.
 */

"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
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

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { SelectOption } from "@/lib/page-builder/types";

/**
 * Social platform definitions with icons
 */
export const SOCIAL_PLATFORMS: Array<{
  value: string;
  label: string;
  icon: LucideIcon;
}> = [
  { value: "twitter", label: "Twitter / X", icon: Twitter },
  { value: "linkedin", label: "LinkedIn", icon: Linkedin },
  { value: "facebook", label: "Facebook", icon: Facebook },
  { value: "instagram", label: "Instagram", icon: Instagram },
  { value: "github", label: "GitHub", icon: Github },
  { value: "youtube", label: "YouTube", icon: Youtube },
  { value: "tiktok", label: "TikTok", icon: Music2 },
  { value: "discord", label: "Discord", icon: MessageCircle },
  { value: "dribbble", label: "Dribbble", icon: Dribbble },
  { value: "behance", label: "Behance", icon: Palette },
];

/**
 * Map of social platform values to their icons
 */
export const socialIconMap: Record<string, LucideIcon> = Object.fromEntries(
  SOCIAL_PLATFORMS.map((p) => [p.value, p.icon])
);

interface SocialSelectFieldProps {
  value: string;
  onChange: (value: string) => void;
  options?: SelectOption[];
  placeholder?: string;
}

export function SocialSelectField({
  value,
  onChange,
  options,
  placeholder = "Select platform...",
}: SocialSelectFieldProps) {
  const [open, setOpen] = useState(false);

  // Use provided options or default to SOCIAL_PLATFORMS
  const platformOptions = options || SOCIAL_PLATFORMS;

  // Find the selected platform
  const selectedPlatform = platformOptions.find((p) => p.value === value);
  const SelectedIcon =
    "icon" in (selectedPlatform || {})
      ? (selectedPlatform as (typeof SOCIAL_PLATFORMS)[number]).icon
      : socialIconMap[value];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal"
        >
          <div className="flex items-center gap-2">
            {SelectedIcon && <SelectedIcon className="h-4 w-4" />}
            <span className={!selectedPlatform ? "text-muted-foreground" : ""}>
              {selectedPlatform?.label || placeholder}
            </span>
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search platforms..." />
          <CommandList>
            <CommandEmpty>No platform found.</CommandEmpty>
            <CommandGroup>
              {platformOptions.map((platform) => {
                const Icon =
                  "icon" in platform
                    ? (platform as (typeof SOCIAL_PLATFORMS)[number]).icon
                    : socialIconMap[platform.value];
                return (
                  <CommandItem
                    key={platform.value}
                    value={platform.label}
                    onSelect={() => {
                      onChange(platform.value);
                      setOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-2 flex-1">
                      {Icon && <Icon className="h-4 w-4" />}
                      <span>{platform.label}</span>
                    </div>
                    <Check
                      className={cn(
                        "h-4 w-4",
                        value === platform.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
