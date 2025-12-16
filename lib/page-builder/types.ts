/**
 * ============================================================================
 * PAGE BUILDER TYPE DEFINITIONS
 * ============================================================================
 *
 * This file contains all TypeScript type definitions for the page builder
 * system. The architecture follows a schema-driven approach where:
 *
 * 1. Each component type (Navbar, Hero, etc.) has multiple variants (1, 2, 3...)
 * 2. Each variant has a SCHEMA that describes its editable properties
 * 3. Each variant has PROPS that the React component receives
 * 4. The sidebar editor is auto-generated from the schema
 * 5. The page document stores component instances with their props
 *
 * Data Flow:
 * ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
 * │   Schema    │────▶│   Sidebar   │────▶│    Props    │
 * │ (structure) │     │  (editor)   │     │  (values)   │
 * └─────────────┘     └─────────────┘     └─────────────┘
 *                                                │
 *                                                ▼
 *                                         ┌─────────────┐
 *                                         │  Component  │
 *                                         │  (render)   │
 *                                         └─────────────┘
 */

// ============================================================================
// PRIMITIVE TYPES
// ============================================================================

/**
 * Hexadecimal color value.
 *
 * Used for all color properties in the page builder (backgrounds, text, borders).
 * Must start with '#' followed by 3, 6, or 8 hex characters.
 *
 * @example "#ffffff" - white
 * @example "#692e0e" - brand brown
 * @example "#14141480" - semi-transparent black
 */
export type HexColor = `#${string}`;

/**
 * Layout direction for components that support RTL/LTR layouts.
 *
 * Used in Hero sections, About sections, and other components where
 * the image/content order can be flipped.
 *
 * @example "ltr" - Content on left, image on right
 * @example "rtl" - Image on left, content on right
 */
export type Direction = "ltr" | "rtl";

// ============================================================================
// COMPONENT CATEGORIES
// ============================================================================

/**
 * All available component categories in the page builder.
 *
 * These categories are used to:
 * 1. Group components in the marketplace sidebar
 * 2. Organize the component registry
 * 3. Filter/search components
 *
 * Each category can have multiple variants (e.g., Hero1, Hero2, Hero3, Hero4).
 */
export type ComponentCategory =
  | "navbar"
  | "hero"
  | "about"
  | "testimonials"
  | "faq"
  | "services"
  | "footer";

/**
 * Display labels for component categories.
 * Used in the marketplace sidebar for user-friendly names.
 */
export const CATEGORY_LABELS: Record<ComponentCategory, string> = {
  navbar: "Navigation Bar",
  hero: "Hero",
  about: "About",
  testimonials: "Testimonials",
  faq: "FAQ",
  services: "Services",
  footer: "Footer",
} as const;

// ============================================================================
// SCHEMA FIELD TYPES
// ============================================================================

/**
 * All supported field types for the sidebar editor.
 *
 * Each field type corresponds to a specific UI control in the editor:
 * - text: Single-line text input
 * - textarea: Multi-line text input
 * - color: Color picker with hex input
 * - number: Numeric input with optional min/max
 * - image: Image upload (device) or URL paste (web)
 * - url: URL input with validation
 * - direction: LTR/RTL toggle switch
 */
export type FieldType =
  | "text"
  | "textarea"
  | "color"
  | "number"
  | "image"
  | "url"
  | "direction";

// ============================================================================
// SCHEMA FIELD DEFINITIONS
// ============================================================================

/**
 * Base properties shared by all field types.
 *
 * Every field in the schema must have at least a label.
 * The placeholder is optional and used for input hints.
 */
type BaseField = {
  /**
   * Display label shown above the input in the sidebar.
   * Can be empty string for inline fields (like link text inputs).
   *
   * @example "Logo" | "Background Color" | ""
   */
  label: string;

  /**
   * Placeholder text shown inside the input when empty.
   * Helps users understand what to enter.
   *
   * @example "Enter title..." | "https://..."
   */
  placeholder?: string;
};

/**
 * Single-line text input field.
 *
 * Used for: titles, labels, button text, link text.
 *
 * @example
 * { type: "text", label: "Title", placeholder: "Enter title..." }
 */
export type TextField = BaseField & {
  type: "text";
};

/**
 * Multi-line text input field.
 *
 * Used for: descriptions, paragraphs, longer content.
 * Renders as a textarea element in the sidebar.
 *
 * @example
 * { type: "textarea", label: "Description", placeholder: "Enter description..." }
 */
export type TextareaField = BaseField & {
  type: "textarea";
};

/**
 * Color picker field with hex input.
 *
 * Used for: background colors, text colors, border colors.
 * Renders as a color swatch + hex input in the sidebar.
 *
 * @example
 * { type: "color", label: "Background Color" }
 */
export type ColorField = BaseField & {
  type: "color";
};

/**
 * Numeric input field with optional constraints.
 *
 * Used for: dimensions (width, height), spacing values.
 * Supports min/max validation.
 *
 * @example
 * { type: "number", label: "Width", min: 10, max: 500 }
 */
export type NumberField = BaseField & {
  type: "number";
  /** Minimum allowed value */
  min?: number;
  /** Maximum allowed value */
  max?: number;
};

/**
 * Image upload/URL field.
 *
 * Used for: logos, hero images, testimonial avatars, service icons.
 *
 * The sidebar shows two options:
 * 1. "From device" - Opens file picker, uploads to S3
 * 2. "From web" - Allows pasting an external URL
 *
 * Both result in a URL string stored in the props.
 *
 * @example
 * { type: "image", label: "Asset" }
 */
export type ImageField = BaseField & {
  type: "image";
};

/**
 * URL input field with validation.
 *
 * Used for: link hrefs, button destinations.
 * Should validate URL format (or allow relative paths like "/about").
 *
 * @example
 * { type: "url", label: "Link URL", placeholder: "https://..." }
 */
export type UrlField = BaseField & {
  type: "url";
};

/**
 * Direction toggle field (LTR/RTL).
 *
 * Used for: Hero sections, About sections with image + content.
 * Renders as a toggle or segmented control in the sidebar.
 *
 * @example
 * { type: "direction", label: "Layout Direction" }
 */
export type DirectionField = BaseField & {
  type: "direction";
};

/**
 * Union of all possible field types.
 *
 * Used when defining schema groups to allow any field type.
 */
export type Field =
  | TextField
  | TextareaField
  | ColorField
  | NumberField
  | ImageField
  | UrlField
  | DirectionField;

// ============================================================================
// SCHEMA GROUP DEFINITIONS
// ============================================================================

/**
 * A group of fields that renders as a collapsible section in the sidebar.
 *
 * Used for: Logo settings, Config/Style settings, Title settings.
 * Groups organize related fields together visually.
 *
 * @example Logo group with asset, width, height fields
 * @example Config group with bgColor, direction fields
 */
export type FieldGroup = {
  /**
   * Discriminator to identify this as a simple field group (not an array).
   */
  kind: "group";

  /**
   * Section header label shown in the sidebar.
   * @example "Logo" | "Style" | "Title"
   */
  label: string;

  /**
   * Whether this section can be collapsed/expanded.
   * Default: false (always expanded)
   *
   * @example true for Logo, Links, Buttons sections
   */
  collapsible?: boolean;

  /**
   * Whether this entire group can be deleted by the user.
   * Shows a trash icon in the section header.
   *
   * @example true for optional Logo (user might want no logo)
   */
  deletable?: boolean;

  /**
   * The fields contained in this group.
   * Keys become the property names in the component props.
   *
   * @example { url: ImageField, width: NumberField, height: NumberField }
   */
  fields: Record<string, Field>;
};

/**
 * A group that contains an array of items with add/delete functionality.
 *
 * Used for: Links, Buttons, Testimonials, FAQ questions, Services.
 * Each item in the array has the same structure defined by itemFields.
 *
 * Features:
 * - Individual items are collapsible
 * - Items can be deleted (trash icon per item)
 * - "Add [itemLabel]" button at the bottom
 * - Optional shared fields that apply to all items (e.g., Links color)
 *
 * @example Links array with shared color + individual label/href per link
 * @example Buttons array with individual colors per button
 */
export type ArrayGroup = {
  /**
   * Discriminator to identify this as an array group.
   */
  kind: "array";

  /**
   * Section header label shown in the sidebar.
   * @example "Links" | "Buttons" | "Testimonials"
   */
  label: string;

  /**
   * Whether this section can be collapsed/expanded.
   * Default: false
   */
  collapsible?: boolean;

  /**
   * Singular name for each item, used in:
   * 1. Collapsible item headers ("Link 1", "Link 2")
   * 2. Add button ("Add link")
   * 3. Empty state ("No links yet")
   *
   * @example "Link" | "Button" | "Testimonial" | "Question"
   */
  itemLabel: string;

  /**
   * Minimum number of items required.
   * Prevents deleting below this threshold.
   *
   * @example 0 (optional section) | 1 (at least one required)
   */
  minItems?: number;

  /**
   * Maximum number of items allowed.
   * Hides "Add" button when reached.
   *
   * @example 2 for buttons | 8 for links | undefined (no limit)
   */
  maxItems?: number;

  /**
   * Custom text for the add button.
   * Default: "Add {itemLabel}" if not specified.
   *
   * @example "Add link" | "Add new testimonial"
   */
  addLabel?: string;

  /**
   * Fields that apply to ALL items in the array.
   * Rendered once at the top of the section, before individual items.
   *
   * Common use case: shared color for all links.
   *
   * @example { color: { type: "color", label: "Color" } }
   */
  sharedFields?: Record<string, Field>;

  /**
   * Fields for EACH individual item in the array.
   * These are repeated for every item (Link 1, Link 2, etc.).
   *
   * @example { label: TextField, href: UrlField }
   * @example { label: TextField, bgColor: ColorField, textColor: ColorField }
   */
  itemFields: Record<string, Field>;
};

/**
 * Union of all group types.
 * A schema is composed of multiple groups.
 */
export type Group = FieldGroup | ArrayGroup;

// ============================================================================
// COMPONENT SCHEMA
// ============================================================================

/**
 * Metadata about a component variant.
 *
 * Used in the marketplace sidebar to display available components.
 */
export type ComponentMeta = {
  /**
   * Component category (e.g., "navbar", "hero").
   * Used for registry organization and filtering.
   */
  type: ComponentCategory;

  /**
   * Variant number within the category.
   * Combined with type to create unique identifier (e.g., "hero-1").
   *
   * @example 1 | 2 | 3 | 4
   */
  variant: number;

  /**
   * Display name in the marketplace.
   * @example "Navbar 1" | "Hero 2" | "About 3"
   */
  label: string;

  /**
   * Path to the thumbnail image shown in the marketplace.
   * Should be a preview of what the component looks like.
   *
   * @example "/thumbnails/hero-1.png"
   */
  thumbnail: string;
};

/**
 * Complete schema for a component variant.
 *
 * Combines metadata with:
 * 1. Groups: The structure of editable properties (for sidebar)
 * 2. Defaults: Initial values when component is dropped onto canvas
 *
 * This schema drives the entire editing experience. The sidebar editor
 * reads the groups and renders appropriate UI controls. When the user
 * edits values, they're stored in the component instance props.
 *
 * @template TProps - The TypeScript type of the component's props
 *
 * @example
 * const hero1Schema: ComponentSchema<Hero1Props> = {
 *   type: "hero",
 *   variant: 1,
 *   label: "Hero 1",
 *   thumbnail: "/thumbnails/hero-1.png",
 *   groups: { ... },
 *   defaults: { ... }
 * }
 */
export type ComponentSchema<TProps = Record<string, unknown>> = ComponentMeta & {
  /**
   * Groups that define the sidebar editor structure.
   *
   * Each key becomes a top-level section in the sidebar.
   * The key should match the corresponding property in the props type.
   *
   * @example { logo: FieldGroup, links: ArrayGroup, buttons: ArrayGroup }
   */
  groups: Record<string, Group>;

  /**
   * Default values applied when the component is first added.
   *
   * Must match the TProps structure exactly.
   * Provides sensible starting values so the component renders properly.
   */
  defaults: TProps;
};

// ============================================================================
// COMPONENT INSTANCE (Stored in Database)
// ============================================================================

/**
 * A single component placed on the page.
 *
 * This is what gets stored in the database (in the pages.sections jsonb column).
 * Each instance represents one component block on the landing page.
 *
 * The props contain all the user's customizations for this specific instance.
 *
 * @example
 * {
 *   id: "comp_abc123",
 *   type: "hero",
 *   variant: 1,
 *   props: {
 *     config: { bgColor: "#ffffff", direction: "ltr" },
 *     title: { label: "Welcome to Our Site" },
 *     ...
 *   }
 * }
 */
export type ComponentInstance = {
  /**
   * Unique identifier for this component instance.
   *
   * Used for:
   * 1. React keys when rendering the page
   * 2. Identifying which component is selected in the editor
   * 3. Drag-and-drop reordering
   *
   * Should be generated with something like `crypto.randomUUID()` or nanoid.
   */
  id: string;

  /**
   * The component category.
   * Combined with variant to look up the schema and React component.
   */
  type: ComponentCategory;

  /**
   * The variant number.
   * Combined with type to get the specific component (e.g., Hero1 vs Hero2).
   */
  variant: number;

  /**
   * The user's customized props for this component.
   *
   * Structure matches the component's props type.
   * Edited via the sidebar editor.
   */
  props: Record<string, unknown>;
};

// ============================================================================
// PAGE DOCUMENT
// ============================================================================

/**
 * Complete page data structure.
 *
 * This is the full document that represents a landing page.
 * Stored in the `pages` table with components in the `sections` column.
 *
 * The components array is ordered - the order determines the visual
 * stacking of components on the page (top to bottom).
 */
export type PageDocument = {
  /**
   * Unique page identifier (UUID).
   * Primary key in the pages table.
   */
  id: string;

  /**
   * Organization that owns this page.
   * Used for access control and multi-tenancy.
   */
  organizationId: string;

  /**
   * Page title shown in the builder and page list.
   * @example "Landing Page" | "Product Launch" | "About Us"
   */
  name: string;

  /**
   * URL-friendly slug for the page.
   * Used in the published URL path.
   *
   * @example "landing" → example.com/landing
   * @example "about-us" → example.com/about-us
   */
  slug?: string;

  /**
   * Custom domain mapped to this page (optional).
   * @example "landing.mycompany.com"
   */
  domain?: string;

  /**
   * Ordered list of components on the page.
   * The order here = the visual order on the page.
   */
  components: ComponentInstance[];

  /**
   * When the page was last published.
   * Null if never published (draft only).
   */
  publishedAt?: Date | null;

  /**
   * Page creation timestamp.
   */
  createdAt: Date;

  /**
   * Last modification timestamp.
   */
  updatedAt: Date;
};

// ============================================================================
// BUILDER STATE TYPES
// ============================================================================

/**
 * Viewport sizes for responsive preview.
 *
 * Allows users to preview their page at different device widths.
 */
export type ViewportSize = "mobile" | "tablet" | "desktop";

/**
 * Viewport width in pixels for each size.
 */
export const VIEWPORT_WIDTHS: Record<ViewportSize, number> = {
  mobile: 375,
  tablet: 768,
  desktop: 1440,
} as const;

/**
 * Current state of the page builder.
 *
 * Used by the builder UI to track:
 * - Which component is selected (for showing its props in sidebar)
 * - Current viewport for responsive preview
 * - Undo/redo history
 * - Drag state
 */
export type BuilderState = {
  /**
   * The page being edited.
   */
  page: PageDocument;

  /**
   * ID of the currently selected component (for editing in sidebar).
   * Null if no component is selected.
   */
  selectedComponentId: string | null;

  /**
   * Current viewport size for preview.
   */
  viewport: ViewportSize;

  /**
   * Whether the page has unsaved changes.
   */
  isDirty: boolean;

  /**
   * Whether currently dragging a component (for drop zone highlighting).
   */
  isDragging: boolean;

  /**
   * ID of the component being dragged from the marketplace.
   * Null if not dragging from marketplace (could be reordering).
   */
  draggingNewComponent: {
    type: ComponentCategory;
    variant: number;
  } | null;
};

// ============================================================================
// REGISTRY TYPES
// ============================================================================

/**
 * Entry in the component registry.
 *
 * Combines the schema (for sidebar editor) with the actual React component.
 * This is what the registry stores for each component variant.
 *
 * @template TProps - The props type for this component
 */
export type RegistryEntry<TProps = Record<string, unknown>> = {
  /**
   * The component schema (metadata + groups + defaults).
   * Used by the sidebar editor to generate the UI.
   */
  schema: ComponentSchema<TProps>;

  /**
   * The actual React component.
   * Receives TProps and renders the component.
   */
  component: React.ComponentType<TProps>;
};

/**
 * Type helper to extract props type from a registry entry.
 *
 * @example
 * type Hero1Props = ExtractProps<typeof registry.hero[1]>
 */
export type ExtractProps<T> = T extends RegistryEntry<infer P> ? P : never;

// ============================================================================
// TYPE GUARDS
// ============================================================================

/**
 * Type guard to check if a group is an ArrayGroup.
 *
 * @param group - The group to check
 * @returns true if the group is an ArrayGroup
 *
 * @example
 * if (isArrayGroup(group)) {
 *   // group.itemFields is available
 *   // group.sharedFields is available
 * }
 */
export function isArrayGroup(group: Group): group is ArrayGroup {
  return group.kind === "array";
}

/**
 * Type guard to check if a group is a FieldGroup.
 *
 * @param group - The group to check
 * @returns true if the group is a FieldGroup
 *
 * @example
 * if (isFieldGroup(group)) {
 *   // group.fields is available
 *   // group.deletable is available
 * }
 */
export function isFieldGroup(group: Group): group is FieldGroup {
  return group.kind === "group";
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Creates a unique component identifier from type and variant.
 *
 * @param type - Component category
 * @param variant - Variant number
 * @returns Unique identifier string
 *
 * @example
 * createComponentId("hero", 1) // "hero-1"
 * createComponentId("navbar", 2) // "navbar-2"
 */
export function createComponentId(
  type: ComponentCategory,
  variant: number
): string {
  return `${type}-${variant}`;
}

/**
 * Parses a component identifier back to type and variant.
 *
 * @param id - Component identifier (e.g., "hero-1")
 * @returns Object with type and variant, or null if invalid
 *
 * @example
 * parseComponentId("hero-1") // { type: "hero", variant: 1 }
 * parseComponentId("invalid") // null
 */
export function parseComponentId(
  id: string
): { type: ComponentCategory; variant: number } | null {
  const [type, variantStr] = id.split("-");
  const variant = parseInt(variantStr, 10);

  if (!type || isNaN(variant)) {
    return null;
  }

  // Validate type is a valid category
  const validCategories: ComponentCategory[] = [
    "navbar",
    "hero",
    "about",
    "testimonials",
    "faq",
    "services",
    "footer",
  ];

  if (!validCategories.includes(type as ComponentCategory)) {
    return null;
  }

  return { type: type as ComponentCategory, variant };
}
