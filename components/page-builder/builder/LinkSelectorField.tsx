"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, Link, Hash, FileText, ExternalLink } from "lucide-react";
import { usePageBuilderStore, selectComponents } from "@/lib/page-builder";
import { cn } from "@/lib/utils";

interface LinkSelectorFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function LinkSelectorField({
  value,
  onChange,
  placeholder = "Select link...",
}: LinkSelectorFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [urlInputValue, setUrlInputValue] = useState("");
  const components = usePageBuilderStore(selectComponents);

  // Generate section options from components
  const sections = components.map((component, index) => ({
    id: component.id,
    label: `${component.type.charAt(0).toUpperCase() + component.type.slice(1)} ${component.variant}`,
    anchor: `#${component.id}`,
    index: index + 1,
  }));

  const handleSectionSelect = (anchor: string) => {
    onChange(anchor);
    setIsOpen(false);
  };

  const handleUrlSubmit = () => {
    if (urlInputValue.trim()) {
      onChange(urlInputValue.trim());
      setUrlInputValue("");
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleUrlSubmit();
    }
  };

  // Display text for the button
  const displayValue = value || placeholder;
  const isPlaceholder = !value;

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className={cn(
            "w-full justify-between font-normal",
            isPlaceholder && "text-muted-foreground"
          )}
        >
          <span className="flex items-center gap-2 truncate">
            <Link className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{displayValue}</span>
          </span>
          <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0" align="start">
        <div className="flex flex-col">
          {/* Sections */}
          <div className="border-b">
            <div className="px-3 py-2 text-xs font-medium text-muted-foreground flex items-center gap-1.5">
              <Hash className="h-3 w-3" />
              Sections
            </div>
            <div className="max-h-40 overflow-auto">
              {sections.length === 0 ? (
                <div className="px-3 py-2 text-xs text-muted-foreground">
                  No sections on page
                </div>
              ) : (
                sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => handleSectionSelect(section.anchor)}
                    className={cn(
                      "flex items-center gap-2 w-full px-3 py-2 text-sm text-left hover:bg-muted/50 transition-colors",
                      value === section.anchor && "bg-muted"
                    )}
                  >
                    <span className="text-muted-foreground text-xs w-4">
                      {section.index}.
                    </span>
                    <span className="truncate">{section.label}</span>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Pages (placeholder) */}
          <div className="border-b">
            <div className="px-3 py-2 text-xs font-medium text-muted-foreground flex items-center gap-1.5">
              <FileText className="h-3 w-3" />
              Pages
            </div>
            <div className="px-3 py-2 text-xs text-muted-foreground">
              Coming soon
            </div>
          </div>

          {/* External URL */}
          <div>
            <div className="px-3 py-2 text-xs font-medium text-muted-foreground flex items-center gap-1.5">
              <ExternalLink className="h-3 w-3" />
              External URL
            </div>
            <div className="p-2">
              <div className="flex gap-2">
                <Input
                  value={urlInputValue}
                  onChange={(e) => setUrlInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="https://..."
                  className="flex-1 h-8 text-sm"
                />
                <Button
                  size="sm"
                  onClick={handleUrlSubmit}
                  disabled={!urlInputValue.trim()}
                  className="h-8"
                >
                  Set
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
