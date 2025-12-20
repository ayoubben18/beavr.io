/**
 * Properties Panel
 *
 * Right sidebar that displays editable properties for the selected component.
 * Dynamically generates form fields based on the component schema.
 */

"use client";

import { useState } from "react";
import {
  usePageBuilderStore,
  selectSelectedComponent,
  isArrayGroup,
} from "@/lib/page-builder";
import { getSchema } from "@/lib/page-builder/registry";
import type { Field, Group, ArrayGroup, FieldGroup } from "@/lib/page-builder/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerEyeDropper,
  ColorPickerHueSlider,
  ColorPickerInput,
  ColorPickerSwatch,
  ColorPickerTrigger,
} from "@/components/ui/color-picker";
import ActionDialog from "@/components/shared/action-dialog";
import { ChevronDown, ChevronUp, Trash2, Plus, ExternalLink } from "lucide-react";

export function PropertiesPanel() {
  const selectedComponent = usePageBuilderStore(selectSelectedComponent);
  const updateComponentProp = usePageBuilderStore((s) => s.updateComponentProp);
  const removeComponent = usePageBuilderStore((s) => s.removeComponent);

  if (!selectedComponent) {
    return (
      <div className="w-80 border-l bg-background flex items-center justify-center">
        <div className="text-center text-muted-foreground p-6">
          <p className="text-sm">Select a component to edit its properties</p>
        </div>
      </div>
    );
  }

  const schema = getSchema(selectedComponent.type, selectedComponent.variant);

  if (!schema) {
    return (
      <div className="w-80 border-l bg-background p-4">
        <p className="text-sm text-red-500">Schema not found for this component</p>
      </div>
    );
  }

  const handleChange = (path: string, value: unknown) => {
    updateComponentProp(selectedComponent.id, path, value);
  };

  const handleDelete = () => {
    removeComponent(selectedComponent.id);
  };

  return (
    <div className="w-80 border-l bg-card flex flex-col">
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between">
        <h3 className="font-medium text-sm">{schema.label}</h3>
        <ActionDialog
          title="Delete Component"
          description={`Are you sure you want to delete this ${schema.label} component? This action cannot be undone.`}
          actionLabel="Delete"
          action={handleDelete}
          Icon={Trash2}
          variant="destructive"
        >
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
            <Trash2 className="h-4 w-4" />
          </Button>
        </ActionDialog>
      </div>

      {/* Properties */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {Object.entries(schema.groups).map(([groupKey, group]) => (
          <GroupRenderer
            key={groupKey}
            group={group}
            value={selectedComponent.props[groupKey] as Record<string, unknown>}
            onChange={(path, val) => handleChange(`${groupKey}.${path}`, val)}
            onChangeRoot={(val) => handleChange(groupKey, val)}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Renders a group (either FieldGroup or ArrayGroup)
 */
function GroupRenderer({
  group,
  value,
  onChange,
  onChangeRoot,
}: {
  group: Group;
  value: Record<string, unknown> | undefined;
  onChange: (path: string, value: unknown) => void;
  onChangeRoot: (value: unknown) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  if (isArrayGroup(group)) {
    return (
      <ArrayGroupRenderer
        group={group}
        value={value}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        onChange={onChange}
        onChangeRoot={onChangeRoot}
      />
    );
  }

  return (
    <FieldGroupRenderer
      group={group}
      value={value}
      isExpanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
      onChange={onChange}
    />
  );
}

/**
 * Renders a simple field group
 */
function FieldGroupRenderer({
  group,
  value,
  isExpanded,
  onToggle,
  onChange,
}: {
  group: FieldGroup;
  value: Record<string, unknown> | undefined;
  isExpanded: boolean;
  onToggle: () => void;
  onChange: (path: string, value: unknown) => void;
}) {
  return (
    <div className="border rounded-lg">
      {/* Header */}
      {group.collapsible ? (
        <button
          type="button"
          onClick={onToggle}
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium hover:bg-muted/50"
        >
          <span>{group.label}</span>
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      ) : (
        <div className="px-3 py-2 text-sm font-medium">{group.label}</div>
      )}

      {/* Fields */}
      {isExpanded && (
        <div className="px-3 pb-3 space-y-3">
          {Object.entries(group.fields).map(([fieldKey, field]) => (
            <FieldRenderer
              key={fieldKey}
              field={field}
              value={value?.[fieldKey]}
              onChange={(val) => onChange(fieldKey, val)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Renders an array group with items
 */
function ArrayGroupRenderer({
  group,
  value,
  isExpanded,
  onToggle,
  onChange,
  onChangeRoot,
}: {
  group: ArrayGroup;
  value: Record<string, unknown> | undefined;
  isExpanded: boolean;
  onToggle: () => void;
  onChange: (path: string, value: unknown) => void;
  onChangeRoot: (value: unknown) => void;
}) {
  const items = (value?.items as Array<Record<string, unknown>>) || [];
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const addItem = () => {
    // Create new item with empty values
    const newItem: Record<string, unknown> = {};
    Object.keys(group.itemFields).forEach((key) => {
      const field = group.itemFields[key];
      if (field.type === "color") {
        newItem[key] = "#141414";
      } else {
        newItem[key] = "";
      }
    });

    const newItems = [...items, newItem];
    onChangeRoot({ ...value, items: newItems });
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    onChangeRoot({ ...value, items: newItems });
  };

  const updateItem = (index: number, fieldKey: string, fieldValue: unknown) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [fieldKey]: fieldValue };
    onChangeRoot({ ...value, items: newItems });
  };

  const canAdd = group.maxItems === undefined || items.length < group.maxItems;
  const canRemove = group.minItems === undefined || items.length > group.minItems;

  return (
    <div className="border rounded-lg">
      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium hover:bg-muted/50"
      >
        <span>{group.label}</span>
        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>

      {isExpanded && (
        <div className="px-3 pb-3 space-y-3">
          {/* Shared fields */}
          {group.sharedFields && (
            <div className="space-y-3 pb-2 border-b">
              {Object.entries(group.sharedFields).map(([fieldKey, field]) => (
                <FieldRenderer
                  key={fieldKey}
                  field={field}
                  value={(value as Record<string, unknown>)?.[fieldKey]}
                  onChange={(val) => onChange(fieldKey, val)}
                />
              ))}
            </div>
          )}

          {/* Items */}
          {items.map((item, index) => (
            <div key={index} className="border rounded-lg">
              {/* Item header */}
              <div className="flex items-center justify-between px-3 py-2">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary"
                >
                  <span>
                    {group.itemLabel} {index + 1}
                  </span>
                  {expandedItems[index] !== false ? (
                    <ChevronUp className="h-3 w-3" />
                  ) : (
                    <ChevronDown className="h-3 w-3" />
                  )}
                </button>

                {canRemove && (
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Item fields */}
              {expandedItems[index] !== false && (
                <div className="px-3 pb-3 space-y-3">
                  {Object.entries(group.itemFields).map(([fieldKey, field]) => (
                    <FieldRenderer
                      key={fieldKey}
                      field={field}
                      value={item[fieldKey]}
                      onChange={(val) => updateItem(index, fieldKey, val)}
                      showExternalLink={field.type === "url" || field.type === "text"}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Add button */}
          {canAdd && (
            <Button variant="outline" size="sm" onClick={addItem} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              {group.addLabel || `Add ${group.itemLabel.toLowerCase()}`}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Renders a single field based on its type
 */
function FieldRenderer({
  field,
  value,
  onChange,
  showExternalLink = false,
}: {
  field: Field;
  value: unknown;
  onChange: (value: unknown) => void;
  showExternalLink?: boolean;
}) {
  const renderInput = () => {
    switch (field.type) {
      case "text":
        return (
          <div className="flex gap-2">
            <Input
              value={(value as string) || ""}
              onChange={(e) => onChange(e.target.value)}
              placeholder={field.placeholder}
              className="flex-1"
            />
            {showExternalLink && (
              <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </div>
        );

      case "textarea":
        return (
          <Textarea
            value={(value as string) || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            rows={3}
          />
        );

      case "number":
        return (
          <Input
            type="number"
            value={(value as number) || 0}
            onChange={(e) => onChange(Number(e.target.value))}
            min={field.min}
            max={field.max}
            className="w-20"
          />
        );

      case "color":
        return (
          <ColorPicker
            value={(value as string) || "#000000"}
            onValueChange={onChange}
            defaultFormat="hex"
          >
            <div className="flex items-center gap-2">
              <ColorPickerTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-2 flex-1 h-9 px-3 rounded-md border bg-background text-sm hover:bg-muted/50"
                >
                  <ColorPickerSwatch className="size-5 shrink-0" />
                  <span className="font-mono text-muted-foreground">
                    {(value as string) || "#000000"}
                  </span>
                </button>
              </ColorPickerTrigger>
            </div>
            <ColorPickerContent>
              <ColorPickerArea />
              <ColorPickerHueSlider />
              <div className="flex items-center gap-2">
                <ColorPickerEyeDropper />
                <ColorPickerInput />
              </div>
            </ColorPickerContent>
          </ColorPicker>
        );

      case "image":
        return (
          <div className="space-y-2">
            <Input
              value={(value as string) || ""}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Image URL"
            />
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 text-xs">
                From device
              </Button>
              <Button variant="outline" size="sm" className="flex-1 text-xs">
                From the web
              </Button>
            </div>
          </div>
        );

      case "url":
        return (
          <div className="flex gap-2">
            <Input
              value={(value as string) || ""}
              onChange={(e) => onChange(e.target.value)}
              placeholder={field.placeholder || "https://..."}
              className="flex-1"
            />
            {showExternalLink && (
              <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </div>
        );

      case "direction":
        return (
          <div className="flex border rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => onChange("ltr")}
              className={`flex-1 px-3 py-1.5 text-xs font-medium ${value === "ltr" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
            >
              LTR
            </button>
            <button
              type="button"
              onClick={() => onChange("rtl")}
              className={`flex-1 px-3 py-1.5 text-xs font-medium ${value === "rtl" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
            >
              RTL
            </button>
          </div>
        );

      default:
        return <div className="text-xs text-muted-foreground">Unknown field type</div>;
    }
  };

  return (
    <div className="space-y-1">
      {field.label && <span className="text-xs text-muted-foreground block">{field.label}</span>}
      {renderInput()}
    </div>
  );
}
