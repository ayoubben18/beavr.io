/**
 * Builder Canvas
 *
 * The central area where the page preview is rendered.
 * Shows all components in order with selection support.
 */

"use client";

import { usePageBuilderStore, selectComponents } from "@/lib/page-builder";
import { getComponent } from "@/lib/page-builder/registry";
import type { ComponentInstance } from "@/lib/page-builder/types";

export function BuilderCanvas() {
  const components = usePageBuilderStore(selectComponents);
  const selectedId = usePageBuilderStore((s) => s.selectedComponentId);
  const selectComponent = usePageBuilderStore((s) => s.selectComponent);
  const viewport = usePageBuilderStore((s) => s.viewport);

  // Viewport widths
  const viewportWidths = {
    mobile: 375,
    tablet: 768,
    desktop: "100%",
  };

  const width = viewportWidths[viewport];

  return (
    <div className="flex-1 bg-muted/30 overflow-auto p-6">
      <div className="min-h-full flex justify-center">
        {/* Canvas container */}
        <div
          className="bg-white shadow-sm rounded-lg overflow-hidden transition-all duration-300"
          style={{
            width: typeof width === "number" ? `${width}px` : width,
            maxWidth: "100%",
          }}
        >
          {/* Page label */}
          <div className="px-3 py-1.5 bg-muted/50 border-b">
            <span className="text-xs text-muted-foreground">Landing page</span>
          </div>

          {/* Components */}
          <div className="min-h-[400px]">
            {components.length === 0 ? (
              <EmptyState />
            ) : (
              components.map((component) => (
                <ComponentWrapper
                  key={component.id}
                  component={component}
                  isSelected={component.id === selectedId}
                  onSelect={() => selectComponent(component.id)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Wrapper for each component with selection UI
 */
function ComponentWrapper({
  component,
  isSelected,
  onSelect,
}: {
  component: ComponentInstance;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const Component = getComponent(component.type, component.variant);

  if (!Component) {
    return (
      <div className="p-4 bg-red-50 text-red-600 text-sm">
        Unknown component: {component.type}-{component.variant}
      </div>
    );
  }

  return (
    <div
      onClick={onSelect}
      className={`
        relative cursor-pointer transition-all
        ${isSelected ? "ring-2 ring-primary ring-inset" : "hover:ring-1 hover:ring-primary/30 hover:ring-inset"}
      `}
    >
      {/* Component label */}
      {isSelected && (
        <div className="absolute -top-0 left-0 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-br z-10">
          {component.type.charAt(0).toUpperCase() + component.type.slice(1)}
        </div>
      )}

      {/* Render the actual component */}
      <Component {...(component.props as any)} />
    </div>
  );
}

/**
 * Empty state when no components added
 */
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] text-muted-foreground">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-4 opacity-50"
      >
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
      <p className="text-sm font-medium">No components yet</p>
      <p className="text-xs mt-1">Drag components from the left panel to start building</p>
    </div>
  );
}
