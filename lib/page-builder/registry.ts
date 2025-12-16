/**
 * ============================================================================
 * COMPONENT REGISTRY
 * ============================================================================
 *
 * Central registry that connects component schemas with their React components.
 *
 * The registry provides:
 * 1. Schema lookup for sidebar editor generation
 * 2. Component lookup for rendering
 * 3. Default props for new component instances
 *
 * Usage:
 * ```ts
 * const entry = getRegistryEntry("hero", 1);
 * const Component = entry.component;
 * const defaults = entry.schema.defaults;
 * ```
 */

import type { ComponentType } from "react";
import type { ComponentCategory, ComponentSchema, RegistryEntry } from "./types";

// Schemas
import { navbar1Schema } from "./schemas/navbar";
import { hero1Schema } from "./schemas/hero";

// Components (will be created next)
import { Navbar1 } from "@/components/page-builder/components/Navbar1";
import { Hero1 } from "@/components/page-builder/components/Hero1";

// Props types
import type { Navbar1Props, Hero1Props } from "./component-props";

// ============================================================================
// REGISTRY STRUCTURE
// ============================================================================

/**
 * The component registry.
 *
 * Organized by category -> variant -> { schema, component }
 */
export const componentRegistry = {
  navbar: {
    1: {
      schema: navbar1Schema,
      component: Navbar1,
    } as RegistryEntry<Navbar1Props>,
  },
  hero: {
    1: {
      schema: hero1Schema,
      component: Hero1,
    } as RegistryEntry<Hero1Props>,
  },
} as const;

// ============================================================================
// REGISTRY HELPERS
// ============================================================================

/**
 * Get a registry entry by type and variant.
 *
 * @param type - Component category
 * @param variant - Component variant number
 * @returns Registry entry or undefined if not found
 *
 * @example
 * const entry = getRegistryEntry("hero", 1);
 * if (entry) {
 *   const Component = entry.component;
 *   <Component {...entry.schema.defaults} />
 * }
 */
export function getRegistryEntry(
  type: ComponentCategory,
  variant: number
): RegistryEntry<Record<string, unknown>> | undefined {
  const category = componentRegistry[type as keyof typeof componentRegistry];
  if (!category) return undefined;

  const entry = category[variant as keyof typeof category];
  if (!entry) return undefined;

  return entry as unknown as RegistryEntry<Record<string, unknown>>;
}

/**
 * Get the schema for a component.
 *
 * @param type - Component category
 * @param variant - Component variant number
 * @returns Component schema or undefined
 */
export function getSchema(
  type: ComponentCategory,
  variant: number
): ComponentSchema | undefined {
  return getRegistryEntry(type, variant)?.schema;
}

/**
 * Get the React component for a component type.
 *
 * @param type - Component category
 * @param variant - Component variant number
 * @returns React component or undefined
 */
export function getComponent(
  type: ComponentCategory,
  variant: number
): ComponentType<any> | undefined {
  return getRegistryEntry(type, variant)?.component;
}

/**
 * Get default props for a component.
 *
 * @param type - Component category
 * @param variant - Component variant number
 * @returns Default props or undefined
 */
export function getDefaults(
  type: ComponentCategory,
  variant: number
): Record<string, unknown> | undefined {
  return getRegistryEntry(type, variant)?.schema.defaults;
}

/**
 * Get all available components for the marketplace.
 *
 * @returns Array of component metadata for display
 */
export function getMarketplaceComponents(): Array<{
  type: ComponentCategory;
  variant: number;
  label: string;
  thumbnail: string;
  category: string;
}> {
  const components: Array<{
    type: ComponentCategory;
    variant: number;
    label: string;
    thumbnail: string;
    category: string;
  }> = [];

  for (const [type, variants] of Object.entries(componentRegistry)) {
    for (const [variant, entry] of Object.entries(variants)) {
      components.push({
        type: type as ComponentCategory,
        variant: parseInt(variant, 10),
        label: entry.schema.label,
        thumbnail: entry.schema.thumbnail,
        category: type.charAt(0).toUpperCase() + type.slice(1),
      });
    }
  }

  return components;
}

/**
 * Group marketplace components by category.
 *
 * @returns Object with category names as keys and component arrays as values
 */
export function getMarketplaceComponentsByCategory(): Record<
  string,
  Array<{
    type: ComponentCategory;
    variant: number;
    label: string;
    thumbnail: string;
  }>
> {
  const components = getMarketplaceComponents();
  const grouped: Record<string, typeof components> = {};

  for (const component of components) {
    if (!grouped[component.category]) {
      grouped[component.category] = [];
    }
    grouped[component.category].push(component);
  }

  return grouped;
}
