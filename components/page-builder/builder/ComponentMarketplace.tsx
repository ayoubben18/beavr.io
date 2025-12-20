/**
 * Component Marketplace
 *
 * Left sidebar showing available components organized by category.
 * Users can click to add components to the canvas.
 */

"use client";

import { ChevronDown, ChevronUp, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { usePageBuilderStore } from "@/lib/page-builder";
import { getDefaults, getMarketplaceComponentsByCategory } from "@/lib/page-builder/registry";
import type { ComponentCategory } from "@/lib/page-builder/types";

export function ComponentMarketplace() {
  const [search, setSearch] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    Navbar: true,
    Hero: true,
  });

  const addComponent = usePageBuilderStore((s) => s.addComponent);
  const componentsByCategory = getMarketplaceComponentsByCategory();

  // Filter components by search
  const filteredCategories = Object.entries(componentsByCategory).reduce(
    (acc, [category, components]) => {
      const filtered = components.filter((c) =>
        c.label.toLowerCase().includes(search.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[category] = filtered;
      }
      return acc;
    },
    {} as typeof componentsByCategory
  );

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleAddComponent = (type: ComponentCategory, variant: number) => {
    const defaults = getDefaults(type, variant);
    if (defaults) {
      addComponent(type, variant, defaults);
    }
  };

  return (
    <div className="w-72 border-r bg-card flex flex-col">
      {/* Search */}
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Component list */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {Object.entries(filteredCategories).map(([category, components]) => (
          <div key={category}>
            {/* Category header */}
            <button
              type="button"
              onClick={() => toggleCategory(category)}
              className="flex items-center justify-between w-full text-sm font-medium text-foreground mb-2 hover:text-primary"
            >
              <span>{category}</span>
              {expandedCategories[category] ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {/* Component cards */}
            {expandedCategories[category] && (
              <div className="grid grid-cols-2 gap-2">
                {components.map((component) => (
                  <ComponentCard
                    key={`${component.type}-${component.variant}`}
                    label={component.label}
                    thumbnail={component.thumbnail}
                    onClick={() => handleAddComponent(component.type, component.variant)}
                  />
                ))}
              </div>
            )}
          </div>
        ))}

        {Object.keys(filteredCategories).length === 0 && (
          <div className="text-center text-muted-foreground text-sm py-8">
            No components found
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Individual component card in the marketplace
 */
function ComponentCard({
  label,
  thumbnail,
  onClick,
}: {
  label: string;
  thumbnail: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col rounded-lg overflow-hidden"
    >
      {/* Label */}
      <div className="px-2 py-2 text-sm text-muted-foreground text-left">
        {label}
      </div>

      {/* Thumbnail */}
      <div className="aspect-[4/3] bg-muted flex items-center justify-center relative rounded-lg group-hover:bg-muted/80">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={label}
            fill
            className="object-contain p-1"
          />
        ) : (
          <div className="w-full h-full p-2">
            <div className="w-full h-full border-2 border-dashed border-muted-foreground/20 rounded flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground/40"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </button>
  );
}
