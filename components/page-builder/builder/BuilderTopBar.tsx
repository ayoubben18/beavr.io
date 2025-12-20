/**
 * Builder Top Bar
 *
 * Navigation bar with page info, viewport controls, and action buttons.
 */

"use client";

import { usePageBuilderStore } from "@/lib/page-builder";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Tablet,
  Monitor,
  Undo2,
  Redo2,
  Play,
  Download,
  PanelLeft,
  PanelRight,
} from "lucide-react";
import type { ViewportSize } from "@/lib/page-builder/types";

export function BuilderTopBar() {
  const page = usePageBuilderStore((s) => s.page);
  const viewport = usePageBuilderStore((s) => s.viewport);
  const setViewport = usePageBuilderStore((s) => s.setViewport);
  const undo = usePageBuilderStore((s) => s.undo);
  const redo = usePageBuilderStore((s) => s.redo);
  const canUndo = usePageBuilderStore((s) => s.canUndo);
  const canRedo = usePageBuilderStore((s) => s.canRedo);
  const isDirty = usePageBuilderStore((s) => s.isDirty);
  const isSaving = usePageBuilderStore((s) => s.isSaving);
  const isMarketplaceOpen = usePageBuilderStore((s) => s.isMarketplaceOpen);
  const isPropertiesPanelOpen = usePageBuilderStore((s) => s.isPropertiesPanelOpen);
  const toggleMarketplace = usePageBuilderStore((s) => s.toggleMarketplace);
  const togglePropertiesPanel = usePageBuilderStore((s) => s.togglePropertiesPanel);

  const viewportButtons: { size: ViewportSize; icon: typeof Monitor; label: string }[] = [
    { size: "mobile", icon: Smartphone, label: "Mobile" },
    { size: "tablet", icon: Tablet, label: "Tablet" },
    { size: "desktop", icon: Monitor, label: "Desktop" },
  ];

  return (
    <div className="h-16 border-b bg-card flex items-center justify-between px-4">
      {/* Left: Page info + Panel toggles */}
      <div className="flex items-center gap-3">
        {/* Marketplace toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMarketplace}
          className={`h-8 w-8 ${!isMarketplaceOpen ? 'text-muted-foreground' : ''}`}
          title={isMarketplaceOpen ? "Hide marketplace" : "Show marketplace"}
        >
          <PanelLeft className="h-4 w-4" />
        </Button>

        {/* Properties panel toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePropertiesPanel}
          className={`h-8 w-8 ${!isPropertiesPanelOpen ? 'text-muted-foreground' : ''}`}
          title={isPropertiesPanelOpen ? "Hide properties" : "Show properties"}
        >
          <PanelRight className="h-4 w-4" />
        </Button>

        <div className="h-6 w-px bg-border" />

        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Organization -</span>
            <span className="text-sm font-medium">{page?.name || "Untitled Page"}</span>
            {isDirty && <span className="text-xs text-muted-foreground">(unsaved)</span>}
          </div>
          <div className="text-xs text-muted-foreground">No domain defined</div>
        </div>
      </div>

      {/* Center: Viewport controls */}
      <div className="flex items-center gap-1 border rounded-lg p-1">
        {viewportButtons.map(({ size, icon: Icon, label }) => (
          <button
            type="button"
            key={size}
            onClick={() => setViewport(size)}
            className={`p-2 rounded ${viewport === size
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            title={label}
          >
            <Icon className="h-4 w-4" />
          </button>
        ))}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Undo/Redo */}
        <div className="flex items-center gap-1 mr-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={undo}
            disabled={!canUndo()}
            className="h-8 w-8"
          >
            <Undo2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={redo}
            disabled={!canRedo()}
            className="h-8 w-8"
          >
            <Redo2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Preview */}
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Play className="h-4 w-4" />
        </Button>

        {/* Export PDF */}
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export as PDF
        </Button>

        {/* Publish */}
        <Button size="sm" disabled={isSaving}>
          {isSaving ? "Saving..." : "Publish"}
        </Button>
      </div>
    </div>
  );
}
