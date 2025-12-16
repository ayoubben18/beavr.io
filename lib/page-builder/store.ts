/**
 * ============================================================================
 * PAGE BUILDER ZUSTAND STORE
 * ============================================================================
 *
 * Central state management for the page builder.
 *
 * This store manages:
 * - Page document (components, metadata)
 * - Component selection (for sidebar editing)
 * - Drag-and-drop state
 * - Viewport preview size
 * - Undo/redo history
 * - Dirty state (unsaved changes)
 *
 * Architecture:
 * - Uses Immer for immutable updates
 * - Maintains history stack for undo/redo
 * - Provides actions for all builder operations
 *
 * Usage:
 * ```tsx
 * const { page, selectedComponentId, addComponent } = usePageBuilderStore();
 * ```
 */

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { subscribeWithSelector } from "zustand/middleware";
import type {
  ComponentInstance,
  ComponentCategory,
  ViewportSize,
  PageDocument,
} from "./types";

// ============================================================================
// CONSTANTS
// ============================================================================

/**
 * Maximum number of history entries to keep for undo/redo.
 * Prevents memory issues with very long editing sessions.
 */
const MAX_HISTORY_LENGTH = 50;

// ============================================================================
// STORE TYPES
// ============================================================================

/**
 * Snapshot of the page state for undo/redo.
 * Only stores what's needed to restore the page.
 */
type HistoryEntry = {
  /** Timestamp when this entry was created */
  timestamp: number;
  /** Snapshot of components array */
  components: ComponentInstance[];
};

/**
 * Information about a component being dragged from the marketplace.
 */
type DraggingComponent = {
  /** Component category */
  type: ComponentCategory;
  /** Component variant number */
  variant: number;
};

/**
 * Complete page builder store state.
 */
type PageBuilderState = {
  // ─────────────────────────────────────────────────────────────────────────
  // PAGE DATA
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * The page document being edited.
   * Null when no page is loaded.
   */
  page: PageDocument | null;

  // ─────────────────────────────────────────────────────────────────────────
  // SELECTION STATE
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * ID of the currently selected component.
   * Used to show the component's props in the sidebar editor.
   * Null when no component is selected.
   */
  selectedComponentId: string | null;

  // ─────────────────────────────────────────────────────────────────────────
  // VIEWPORT STATE
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Current viewport size for responsive preview.
   */
  viewport: ViewportSize;

  // ─────────────────────────────────────────────────────────────────────────
  // DRAG STATE
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Whether a drag operation is in progress.
   */
  isDragging: boolean;

  /**
   * Component being dragged from the marketplace.
   * Null if not dragging from marketplace (might be reordering).
   */
  draggingNewComponent: DraggingComponent | null;

  /**
   * ID of component being reordered within the canvas.
   * Null if not reordering.
   */
  reorderingComponentId: string | null;

  /**
   * Index where the dragged component will be inserted.
   * Used for visual drop indicator.
   */
  dropTargetIndex: number | null;

  // ─────────────────────────────────────────────────────────────────────────
  // HISTORY STATE (Undo/Redo)
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Past states for undo functionality.
   * Most recent state is at the end of the array.
   */
  past: HistoryEntry[];

  /**
   * Future states for redo functionality.
   * States that were undone and can be redone.
   */
  future: HistoryEntry[];

  // ─────────────────────────────────────────────────────────────────────────
  // UI STATE
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Whether the page has unsaved changes.
   */
  isDirty: boolean;

  /**
   * Whether a save operation is in progress.
   */
  isSaving: boolean;
};

/**
 * Page builder store actions.
 */
type PageBuilderActions = {
  // ─────────────────────────────────────────────────────────────────────────
  // PAGE ACTIONS
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Initialize the store with a page document.
   * Called when entering the page builder.
   *
   * @param page - The page to edit
   */
  initializePage: (page: PageDocument) => void;

  /**
   * Reset the store to initial state.
   * Called when leaving the page builder.
   */
  resetStore: () => void;

  /**
   * Update page metadata (name, slug, etc.).
   *
   * @param updates - Partial page metadata to update
   */
  updatePageMeta: (updates: Partial<Pick<PageDocument, "name" | "slug" | "domain">>) => void;

  // ─────────────────────────────────────────────────────────────────────────
  // COMPONENT ACTIONS
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Add a new component to the page.
   *
   * @param type - Component category
   * @param variant - Component variant number
   * @param props - Initial props (usually defaults from schema)
   * @param index - Optional insertion index (defaults to end)
   * @returns The ID of the newly created component
   */
  addComponent: (
    type: ComponentCategory,
    variant: number,
    props: Record<string, unknown>,
    index?: number
  ) => string;

  /**
   * Remove a component from the page.
   *
   * @param componentId - ID of the component to remove
   */
  removeComponent: (componentId: string) => void;

  /**
   * Duplicate an existing component.
   *
   * @param componentId - ID of the component to duplicate
   * @returns The ID of the duplicated component
   */
  duplicateComponent: (componentId: string) => string | null;

  /**
   * Move a component to a new position.
   *
   * @param componentId - ID of the component to move
   * @param newIndex - New position index
   */
  moveComponent: (componentId: string, newIndex: number) => void;

  /**
   * Update a component's props.
   * Used by the sidebar editor when user changes values.
   *
   * @param componentId - ID of the component to update
   * @param props - New props (merged with existing)
   */
  updateComponentProps: (
    componentId: string,
    props: Record<string, unknown>
  ) => void;

  /**
   * Update a specific nested prop path.
   * Useful for updating deeply nested values without replacing entire object.
   *
   * @param componentId - ID of the component
   * @param path - Dot-notation path (e.g., "config.bgColor", "links.items.0.label")
   * @param value - New value
   */
  updateComponentProp: (
    componentId: string,
    path: string,
    value: unknown
  ) => void;

  // ─────────────────────────────────────────────────────────────────────────
  // SELECTION ACTIONS
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Select a component for editing.
   *
   * @param componentId - ID of component to select, or null to deselect
   */
  selectComponent: (componentId: string | null) => void;

  /**
   * Clear the current selection.
   */
  clearSelection: () => void;

  // ─────────────────────────────────────────────────────────────────────────
  // VIEWPORT ACTIONS
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Change the viewport preview size.
   *
   * @param viewport - New viewport size
   */
  setViewport: (viewport: ViewportSize) => void;

  // ─────────────────────────────────────────────────────────────────────────
  // DRAG ACTIONS
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Start dragging a new component from the marketplace.
   *
   * @param type - Component category
   * @param variant - Component variant number
   */
  startDraggingNew: (type: ComponentCategory, variant: number) => void;

  /**
   * Start reordering an existing component.
   *
   * @param componentId - ID of component being reordered
   */
  startReordering: (componentId: string) => void;

  /**
   * Update the drop target index during drag.
   *
   * @param index - Index where component would be dropped
   */
  setDropTargetIndex: (index: number | null) => void;

  /**
   * End the current drag operation.
   * Does not perform the drop - just clears drag state.
   */
  endDrag: () => void;

  // ─────────────────────────────────────────────────────────────────────────
  // HISTORY ACTIONS (Undo/Redo)
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Undo the last action.
   */
  undo: () => void;

  /**
   * Redo the last undone action.
   */
  redo: () => void;

  /**
   * Check if undo is available.
   */
  canUndo: () => boolean;

  /**
   * Check if redo is available.
   */
  canRedo: () => boolean;

  // ─────────────────────────────────────────────────────────────────────────
  // SAVE ACTIONS
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Mark the page as saved (clears dirty state).
   */
  markAsSaved: () => void;

  /**
   * Set the saving state.
   *
   * @param isSaving - Whether save is in progress
   */
  setIsSaving: (isSaving: boolean) => void;
};

/**
 * Complete store type (state + actions).
 */
type PageBuilderStore = PageBuilderState & PageBuilderActions;

// ============================================================================
// INITIAL STATE
// ============================================================================

const initialState: PageBuilderState = {
  page: null,
  selectedComponentId: null,
  viewport: "desktop",
  isDragging: false,
  draggingNewComponent: null,
  reorderingComponentId: null,
  dropTargetIndex: null,
  past: [],
  future: [],
  isDirty: false,
  isSaving: false,
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Generate a unique component instance ID.
 */
function generateComponentId(): string {
  return `comp_${crypto.randomUUID().slice(0, 8)}`;
}

/**
 * Set a value at a dot-notation path in an object.
 * Mutates the object (safe to use with Immer).
 *
 * @param obj - Object to modify
 * @param path - Dot-notation path (e.g., "config.bgColor")
 * @param value - Value to set
 */
function setNestedValue(
  obj: Record<string, unknown>,
  path: string,
  value: unknown
): void {
  const parts = path.split(".");
  let current: Record<string, unknown> = obj;

  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    // Handle array indices
    const arrayMatch = part.match(/^(\w+)\[(\d+)\]$/);

    if (arrayMatch) {
      const [, key, indexStr] = arrayMatch;
      const index = parseInt(indexStr, 10);
      if (!current[key]) current[key] = [];
      const arr = current[key] as unknown[];
      if (!arr[index]) arr[index] = {};
      current = arr[index] as Record<string, unknown>;
    } else {
      if (!current[part]) current[part] = {};
      current = current[part] as Record<string, unknown>;
    }
  }

  const lastPart = parts[parts.length - 1];
  const arrayMatch = lastPart.match(/^(\w+)\[(\d+)\]$/);

  if (arrayMatch) {
    const [, key, indexStr] = arrayMatch;
    const index = parseInt(indexStr, 10);
    if (!current[key]) current[key] = [];
    (current[key] as unknown[])[index] = value;
  } else {
    current[lastPart] = value;
  }
}

// ============================================================================
// STORE CREATION
// ============================================================================

/**
 * Page builder Zustand store.
 *
 * Uses:
 * - immer: For immutable state updates with mutable syntax
 * - subscribeWithSelector: For granular subscriptions
 *
 * @example
 * // In a component
 * const page = usePageBuilderStore((state) => state.page);
 * const addComponent = usePageBuilderStore((state) => state.addComponent);
 *
 * // Add a hero component
 * addComponent("hero", 1, hero1Defaults);
 */
export const usePageBuilderStore = create<PageBuilderStore>()(
  subscribeWithSelector(
    immer((set, get) => ({
      // ─────────────────────────────────────────────────────────────────────
      // INITIAL STATE
      // ─────────────────────────────────────────────────────────────────────
      ...initialState,

      // ─────────────────────────────────────────────────────────────────────
      // PAGE ACTIONS
      // ─────────────────────────────────────────────────────────────────────

      initializePage: (page) => {
        set((state) => {
          state.page = page;
          state.selectedComponentId = null;
          state.viewport = "desktop";
          state.isDragging = false;
          state.draggingNewComponent = null;
          state.reorderingComponentId = null;
          state.dropTargetIndex = null;
          state.past = [];
          state.future = [];
          state.isDirty = false;
          state.isSaving = false;
        });
      },

      resetStore: () => {
        set(initialState);
      },

      updatePageMeta: (updates) => {
        set((state) => {
          if (!state.page) return;
          Object.assign(state.page, updates);
          state.isDirty = true;
        });
      },

      // ─────────────────────────────────────────────────────────────────────
      // COMPONENT ACTIONS
      // ─────────────────────────────────────────────────────────────────────

      addComponent: (type, variant, props, index) => {
        const id = generateComponentId();

        set((state) => {
          if (!state.page) return;

          // Save current state to history
          state.past.push({
            timestamp: Date.now(),
            components: JSON.parse(JSON.stringify(state.page.components)),
          });

          // Trim history if too long
          if (state.past.length > MAX_HISTORY_LENGTH) {
            state.past.shift();
          }

          // Clear future (new action invalidates redo stack)
          state.future = [];

          // Create new component instance
          const newComponent: ComponentInstance = {
            id,
            type,
            variant,
            props,
          };

          // Insert at specified index or append to end
          if (index !== undefined && index >= 0 && index <= state.page.components.length) {
            state.page.components.splice(index, 0, newComponent);
          } else {
            state.page.components.push(newComponent);
          }

          // Select the new component
          state.selectedComponentId = id;
          state.isDirty = true;
        });

        return id;
      },

      removeComponent: (componentId) => {
        set((state) => {
          if (!state.page) return;

          const index = state.page.components.findIndex((c) => c.id === componentId);
          if (index === -1) return;

          // Save to history
          state.past.push({
            timestamp: Date.now(),
            components: JSON.parse(JSON.stringify(state.page.components)),
          });

          if (state.past.length > MAX_HISTORY_LENGTH) {
            state.past.shift();
          }

          state.future = [];

          // Remove the component
          state.page.components.splice(index, 1);

          // Clear selection if removed component was selected
          if (state.selectedComponentId === componentId) {
            state.selectedComponentId = null;
          }

          state.isDirty = true;
        });
      },

      duplicateComponent: (componentId) => {
        const state = get();
        if (!state.page) return null;

        const index = state.page.components.findIndex((c) => c.id === componentId);
        if (index === -1) return null;

        const original = state.page.components[index];
        const newId = generateComponentId();

        set((state) => {
          if (!state.page) return;

          // Save to history
          state.past.push({
            timestamp: Date.now(),
            components: JSON.parse(JSON.stringify(state.page.components)),
          });

          if (state.past.length > MAX_HISTORY_LENGTH) {
            state.past.shift();
          }

          state.future = [];

          // Create duplicate with new ID
          const duplicate: ComponentInstance = {
            id: newId,
            type: original.type,
            variant: original.variant,
            props: JSON.parse(JSON.stringify(original.props)),
          };

          // Insert after original
          state.page.components.splice(index + 1, 0, duplicate);
          state.selectedComponentId = newId;
          state.isDirty = true;
        });

        return newId;
      },

      moveComponent: (componentId, newIndex) => {
        set((state) => {
          if (!state.page) return;

          const currentIndex = state.page.components.findIndex(
            (c) => c.id === componentId
          );
          if (currentIndex === -1) return;
          if (currentIndex === newIndex) return;

          // Save to history
          state.past.push({
            timestamp: Date.now(),
            components: JSON.parse(JSON.stringify(state.page.components)),
          });

          if (state.past.length > MAX_HISTORY_LENGTH) {
            state.past.shift();
          }

          state.future = [];

          // Remove from current position
          const [component] = state.page.components.splice(currentIndex, 1);

          // Adjust target index if needed
          const adjustedIndex = newIndex > currentIndex ? newIndex - 1 : newIndex;

          // Insert at new position
          state.page.components.splice(adjustedIndex, 0, component);
          state.isDirty = true;
        });
      },

      updateComponentProps: (componentId, props) => {
        set((state) => {
          if (!state.page) return;

          const component = state.page.components.find((c) => c.id === componentId);
          if (!component) return;

          // Save to history
          state.past.push({
            timestamp: Date.now(),
            components: JSON.parse(JSON.stringify(state.page.components)),
          });

          if (state.past.length > MAX_HISTORY_LENGTH) {
            state.past.shift();
          }

          state.future = [];

          // Deep merge props
          component.props = {
            ...component.props,
            ...props,
          };

          state.isDirty = true;
        });
      },

      updateComponentProp: (componentId, path, value) => {
        set((state) => {
          if (!state.page) return;

          const component = state.page.components.find((c) => c.id === componentId);
          if (!component) return;

          // Save to history
          state.past.push({
            timestamp: Date.now(),
            components: JSON.parse(JSON.stringify(state.page.components)),
          });

          if (state.past.length > MAX_HISTORY_LENGTH) {
            state.past.shift();
          }

          state.future = [];

          // Set nested value
          setNestedValue(component.props as Record<string, unknown>, path, value);
          state.isDirty = true;
        });
      },

      // ─────────────────────────────────────────────────────────────────────
      // SELECTION ACTIONS
      // ─────────────────────────────────────────────────────────────────────

      selectComponent: (componentId) => {
        set((state) => {
          state.selectedComponentId = componentId;
        });
      },

      clearSelection: () => {
        set((state) => {
          state.selectedComponentId = null;
        });
      },

      // ─────────────────────────────────────────────────────────────────────
      // VIEWPORT ACTIONS
      // ─────────────────────────────────────────────────────────────────────

      setViewport: (viewport) => {
        set((state) => {
          state.viewport = viewport;
        });
      },

      // ─────────────────────────────────────────────────────────────────────
      // DRAG ACTIONS
      // ─────────────────────────────────────────────────────────────────────

      startDraggingNew: (type, variant) => {
        set((state) => {
          state.isDragging = true;
          state.draggingNewComponent = { type, variant };
          state.reorderingComponentId = null;
        });
      },

      startReordering: (componentId) => {
        set((state) => {
          state.isDragging = true;
          state.draggingNewComponent = null;
          state.reorderingComponentId = componentId;
        });
      },

      setDropTargetIndex: (index) => {
        set((state) => {
          state.dropTargetIndex = index;
        });
      },

      endDrag: () => {
        set((state) => {
          state.isDragging = false;
          state.draggingNewComponent = null;
          state.reorderingComponentId = null;
          state.dropTargetIndex = null;
        });
      },

      // ─────────────────────────────────────────────────────────────────────
      // HISTORY ACTIONS
      // ─────────────────────────────────────────────────────────────────────

      undo: () => {
        set((state) => {
          if (!state.page || state.past.length === 0) return;

          // Get the last history entry
          const previous = state.past.pop()!;

          // Save current state to future
          state.future.push({
            timestamp: Date.now(),
            components: JSON.parse(JSON.stringify(state.page.components)),
          });

          // Restore previous state
          state.page.components = previous.components;
          state.isDirty = true;

          // Clear selection if component no longer exists
          if (
            state.selectedComponentId &&
            !state.page.components.find((c) => c.id === state.selectedComponentId)
          ) {
            state.selectedComponentId = null;
          }
        });
      },

      redo: () => {
        set((state) => {
          if (!state.page || state.future.length === 0) return;

          // Get the last future entry
          const next = state.future.pop()!;

          // Save current state to past
          state.past.push({
            timestamp: Date.now(),
            components: JSON.parse(JSON.stringify(state.page.components)),
          });

          // Restore next state
          state.page.components = next.components;
          state.isDirty = true;

          // Clear selection if component no longer exists
          if (
            state.selectedComponentId &&
            !state.page.components.find((c) => c.id === state.selectedComponentId)
          ) {
            state.selectedComponentId = null;
          }
        });
      },

      canUndo: () => {
        return get().past.length > 0;
      },

      canRedo: () => {
        return get().future.length > 0;
      },

      // ─────────────────────────────────────────────────────────────────────
      // SAVE ACTIONS
      // ─────────────────────────────────────────────────────────────────────

      markAsSaved: () => {
        set((state) => {
          state.isDirty = false;
        });
      },

      setIsSaving: (isSaving) => {
        set((state) => {
          state.isSaving = isSaving;
        });
      },
    }))
  )
);

// ============================================================================
// SELECTORS
// ============================================================================

/**
 * Get the currently selected component.
 *
 * @example
 * const selectedComponent = usePageBuilderStore(selectSelectedComponent);
 */
export const selectSelectedComponent = (
  state: PageBuilderStore
): ComponentInstance | null => {
  if (!state.page || !state.selectedComponentId) return null;
  return (
    state.page.components.find((c) => c.id === state.selectedComponentId) ?? null
  );
};

/**
 * Get the index of the currently selected component.
 *
 * @example
 * const selectedIndex = usePageBuilderStore(selectSelectedComponentIndex);
 */
export const selectSelectedComponentIndex = (
  state: PageBuilderStore
): number => {
  if (!state.page || !state.selectedComponentId) return -1;
  return state.page.components.findIndex(
    (c) => c.id === state.selectedComponentId
  );
};

/**
 * Get all components on the page.
 *
 * @example
 * const components = usePageBuilderStore(selectComponents);
 */
export const selectComponents = (
  state: PageBuilderStore
): ComponentInstance[] => {
  return state.page?.components ?? [];
};

/**
 * Get the total number of components on the page.
 *
 * @example
 * const count = usePageBuilderStore(selectComponentCount);
 */
export const selectComponentCount = (state: PageBuilderStore): number => {
  return state.page?.components.length ?? 0;
};
