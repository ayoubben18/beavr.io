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
import { navbar1Schema, navbar2Schema, navbar3Schema, navbar4Schema } from "./schemas/navbar";
import { hero1Schema, hero2Schema, hero3Schema, hero4Schema } from "./schemas/hero";
import { about1Schema, about2Schema, about3Schema, about4Schema } from "./schemas/about";
import { testimonial1Schema, testimonial2Schema, testimonial3Schema, testimonial4Schema } from "./schemas/testimonials";
import { faq1Schema, faq2Schema, faq3Schema, faq4Schema } from "./schemas/faq";
import { services1Schema, services2Schema, services3Schema, services4Schema } from "./schemas/services";
import { footer1Schema, footer2Schema, footer3Schema, footer4Schema } from "./schemas/footer";

// Components
import { Navbar1 } from "@/components/page-builder/components/Navbar1";
import { Navbar2 } from "@/components/page-builder/components/Navbar2";
import { Navbar3 } from "@/components/page-builder/components/Navbar3";
import { Navbar4 } from "@/components/page-builder/components/Navbar4";
import { Hero1 } from "@/components/page-builder/components/Hero1";
import { Hero2 } from "@/components/page-builder/components/Hero2";
import { Hero3 } from "@/components/page-builder/components/Hero3";
import { Hero4 } from "@/components/page-builder/components/Hero4";
import { About1 } from "@/components/page-builder/components/About1";
import { About2 } from "@/components/page-builder/components/About2";
import { About3 } from "@/components/page-builder/components/About3";
import { About4 } from "@/components/page-builder/components/About4";
import { Testimonials1 } from "@/components/page-builder/components/Testimonials1";
import { Testimonials2 } from "@/components/page-builder/components/Testimonials2";
import { Testimonials3 } from "@/components/page-builder/components/Testimonials3";
import { Testimonials4 } from "@/components/page-builder/components/Testimonials4";
import { Faq1 } from "@/components/page-builder/components/Faq1";
import { Faq2 } from "@/components/page-builder/components/Faq2";
import { Faq3 } from "@/components/page-builder/components/Faq3";
import { Faq4 } from "@/components/page-builder/components/Faq4";
import { Services1 } from "@/components/page-builder/components/Services1";
import { Services2 } from "@/components/page-builder/components/Services2";
import { Services3 } from "@/components/page-builder/components/Services3";
import { Services4 } from "@/components/page-builder/components/Services4";
import { Footer1 } from "@/components/page-builder/components/Footer1";
import { Footer2 } from "@/components/page-builder/components/Footer2";
import { Footer3 } from "@/components/page-builder/components/Footer3";
import { Footer4 } from "@/components/page-builder/components/Footer4";

// Props types
import type { Navbar1Props, Navbar2Props, Navbar3Props, Navbar4Props, Hero1Props, Hero2Props, Hero3Props, Hero4Props, About1Props, About2Props, About3Props, About4Props, Testimonial1Props, Testimonial2Props, Testimonial3Props, Testimonial4Props, Faq1Props, Faq2Props, Faq3Props, Services1Props, Services2Props, Services3Props, Services4Props, Footer1Props, Footer2Props, Footer3Props, Footer4Props } from "./component-props";

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
    2: {
      schema: navbar2Schema,
      component: Navbar2,
    } as RegistryEntry<Navbar2Props>,
    3: {
      schema: navbar3Schema,
      component: Navbar3,
    } as RegistryEntry<Navbar3Props>,
    4: {
      schema: navbar4Schema,
      component: Navbar4,
    } as RegistryEntry<Navbar4Props>,
  },
  hero: {
    1: {
      schema: hero1Schema,
      component: Hero1,
    } as RegistryEntry<Hero1Props>,
    2: {
      schema: hero2Schema,
      component: Hero2,
    } as RegistryEntry<Hero2Props>,
    3: {
      schema: hero3Schema,
      component: Hero3,
    } as RegistryEntry<Hero3Props>,
    4: {
      schema: hero4Schema,
      component: Hero4,
    } as RegistryEntry<Hero4Props>,
  },
  about: {
    1: {
      schema: about1Schema,
      component: About1,
    } as RegistryEntry<About1Props>,
    2: {
      schema: about2Schema,
      component: About2,
    } as RegistryEntry<About2Props>,
    3: {
      schema: about3Schema,
      component: About3,
    } as RegistryEntry<About3Props>,
    4: {
      schema: about4Schema,
      component: About4,
    } as RegistryEntry<About4Props>,
  },
  testimonials: {
    1: {
      schema: testimonial1Schema,
      component: Testimonials1,
    } as RegistryEntry<Testimonial1Props>,
    2: {
      schema: testimonial2Schema,
      component: Testimonials2,
    } as RegistryEntry<Testimonial2Props>,
    3: {
      schema: testimonial3Schema,
      component: Testimonials3,
    } as RegistryEntry<Testimonial3Props>,
    4: {
      schema: testimonial4Schema,
      component: Testimonials4,
    } as RegistryEntry<Testimonial4Props>,
  },
  faq: {
    1: {
      schema: faq1Schema,
      component: Faq1,
    } as RegistryEntry<Faq1Props>,
    2: {
      schema: faq2Schema,
      component: Faq2,
    } as RegistryEntry<Faq2Props>,
    3: {
      schema: faq3Schema,
      component: Faq3,
    } as RegistryEntry<Faq3Props>,
    4: {
      schema: faq4Schema,
      component: Faq4,
    } as RegistryEntry<Faq1Props>,
  },
  services: {
    1: {
      schema: services1Schema,
      component: Services1,
    } as RegistryEntry<Services1Props>,
    2: {
      schema: services2Schema,
      component: Services2,
    } as RegistryEntry<Services2Props>,
    3: {
      schema: services3Schema,
      component: Services3,
    } as RegistryEntry<Services3Props>,
    4: {
      schema: services4Schema,
      component: Services4,
    } as RegistryEntry<Services4Props>,
  },
  footer: {
    1: {
      schema: footer1Schema,
      component: Footer1,
    } as RegistryEntry<Footer1Props>,
    2: {
      schema: footer2Schema,
      component: Footer2,
    } as RegistryEntry<Footer2Props>,
    3: {
      schema: footer3Schema,
      component: Footer3,
    } as RegistryEntry<Footer3Props>,
    4: {
      schema: footer4Schema,
      component: Footer4,
    } as RegistryEntry<Footer4Props>,
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
