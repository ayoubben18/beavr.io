/**
 * Page Builder
 *
 * Main wrapper component that combines all builder elements:
 * - Top bar (navigation & actions)
 * - Component marketplace (left sidebar)
 * - Canvas (center)
 * - Properties panel (right sidebar)
 */

"use client";

import { useEffect } from "react";
import { usePageBuilderStore } from "@/lib/page-builder";
import type { PageDocument } from "@/lib/page-builder/types";
import { BuilderTopBar } from "./BuilderTopBar";
import { ComponentMarketplace } from "./ComponentMarketplace";
import { BuilderCanvas } from "./BuilderCanvas";
import { PropertiesPanel } from "./PropertiesPanel";

type PageBuilderProps = {
  /**
   * Initial page data to load into the builder.
   * Can be an existing page or a new empty page.
   */
  initialPage: PageDocument;
};

export function PageBuilder({ initialPage }: PageBuilderProps) {
  const initializePage = usePageBuilderStore((s) => s.initializePage);
  const resetStore = usePageBuilderStore((s) => s.resetStore);
  const isMarketplaceOpen = usePageBuilderStore((s) => s.isMarketplaceOpen);
  const isPropertiesPanelOpen = usePageBuilderStore((s) => s.isPropertiesPanelOpen);

  // Initialize the store with the page data
  useEffect(() => {
    initializePage(initialPage);

    // Cleanup on unmount
    return () => {
      resetStore();
    };
  }, [initialPage, initializePage, resetStore]);

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <BuilderTopBar />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Component Marketplace */}
        {isMarketplaceOpen && <ComponentMarketplace />}

        {/* Center: Canvas */}
        <BuilderCanvas />

        {/* Right: Properties Panel */}
        {isPropertiesPanelOpen && <PropertiesPanel />}
      </div>
    </div>
  );
}
