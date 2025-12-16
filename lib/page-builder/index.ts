/**
 * ============================================================================
 * PAGE BUILDER MODULE
 * ============================================================================
 *
 * Central export file for all page builder types, utilities, and constants.
 *
 * Usage:
 * ```ts
 * import {
 *   // Types
 *   ComponentSchema,
 *   ComponentInstance,
 *   PageDocument,
 *   Hero1Props,
 *
 *   // Utilities
 *   isArrayGroup,
 *   createComponentId,
 *
 *   // Constants
 *   CATEGORY_LABELS,
 *   VIEWPORT_WIDTHS,
 * } from "@/lib/page-builder";
 * ```
 */

// ============================================================================
// CORE TYPES
// ============================================================================

export type {
  // Primitives
  HexColor,
  Direction,

  // Categories
  ComponentCategory,

  // Field types
  FieldType,
  Field,
  TextField,
  TextareaField,
  ColorField,
  NumberField,
  ImageField,
  UrlField,
  DirectionField,

  // Group types
  Group,
  FieldGroup,
  ArrayGroup,

  // Schema types
  ComponentMeta,
  ComponentSchema,

  // Instance & Document types
  ComponentInstance,
  PageDocument,

  // Builder state
  ViewportSize,
  BuilderState,

  // Registry types
  RegistryEntry,
  ExtractProps,
} from "./types";

// ============================================================================
// COMPONENT PROPS TYPES
// ============================================================================

export type {
  // Shared types
  LinkItem,
  ButtonItem,
  CtaItem,
  TestimonialItem,
  TestimonialWithImageItem,
  FaqItem,
  ServiceItem,
  ServiceItemSimple,
  NavigationStyle,

  // Navbar props
  Navbar1Props,
  Navbar2Props,
  Navbar3Props,
  Navbar4Props,

  // Hero props
  Hero1Props,
  Hero2Props,
  Hero3Props,
  Hero4Props,

  // About props
  About1Props,
  About2Props,
  About3Props,

  // Testimonial props
  Testimonial1Props,
  Testimonial2Props,
  Testimonial3Props,

  // FAQ props
  Faq1Props,
  Faq2Props,
  Faq3Props,

  // Services props
  Services1Props,
  Services2Props,
  Services3Props,
  Services4Props,

  // Footer props
  Footer1Props,

  // Type maps
  ComponentPropsMap,
  AnyComponentProps,
} from "./component-props";

// ============================================================================
// UTILITIES
// ============================================================================

export {
  // Type guards
  isArrayGroup,
  isFieldGroup,

  // ID utilities
  createComponentId,
  parseComponentId,

  // Constants
  CATEGORY_LABELS,
  VIEWPORT_WIDTHS,
} from "./types";

// ============================================================================
// STORE
// ============================================================================

export {
  // Store hook
  usePageBuilderStore,

  // Selectors
  selectSelectedComponent,
  selectSelectedComponentIndex,
  selectComponents,
  selectComponentCount,
} from "./store";

// ============================================================================
// REGISTRY
// ============================================================================

export {
  componentRegistry,
  getRegistryEntry,
  getSchema,
  getComponent,
  getDefaults,
  getMarketplaceComponents,
  getMarketplaceComponentsByCategory,
} from "./registry";
