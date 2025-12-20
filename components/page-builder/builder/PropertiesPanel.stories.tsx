/**
 * PropertiesPanel Stories
 *
 * The PropertiesPanel is the right sidebar in the page builder that displays
 * editable properties for the currently selected component. It dynamically
 * generates form fields based on the component's schema.
 *
 * Key features:
 * - Dynamic form generation from component schemas
 * - Support for multiple field types (text, color, image, url, direction, etc.)
 * - Collapsible field groups
 * - Array groups with add/remove functionality
 * - Delete component action with confirmation dialog
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { PropertiesPanel } from './PropertiesPanel';
import {
  defaultPageBuilderDecorator,
  emptyPageDecorator,
  heroSelectedDecorator,
  noSelectionDecorator,
} from '../../../.storybook/decorators/pageBuilderDecorator';

const meta = {
  title: 'PageBuilder/PropertiesPanel',
  component: PropertiesPanel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The PropertiesPanel displays editable properties for the selected component in the page builder.

## Features

- **Dynamic Form Generation**: Forms are auto-generated from component schemas
- **Field Types**: Supports text, textarea, number, color, image, URL, and direction fields
- **Field Groups**: Related fields are organized in collapsible sections
- **Array Groups**: Manage lists of items (links, buttons) with add/remove capabilities
- **Custom ColorPicker**: Rich color selection with area picker, hue slider, and eyedropper

## Usage

The panel reads from the page builder Zustand store:
- Uses \`selectSelectedComponent\` to get the current component
- Uses \`getSchema()\` from registry to get the component's schema
- Calls \`updateComponentProp()\` when values change
- Calls \`removeComponent()\` when delete is confirmed
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-[600px] bg-background">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PropertiesPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default state with a Navbar component selected.
 * Shows the full properties panel with logo, links, and buttons groups.
 */
export const WithNavbarSelected: Story = {
  decorators: [defaultPageBuilderDecorator],
};

/**
 * State with a Hero component selected.
 * Shows different field types including direction toggle.
 */
export const WithHeroSelected: Story = {
  decorators: [heroSelectedDecorator],
};

/**
 * Empty state when no component is selected.
 * Shows a placeholder message prompting user to select a component.
 */
export const NoSelection: Story = {
  decorators: [noSelectionDecorator],
};

/**
 * State with an empty page (no components).
 * The panel shows the empty selection state.
 */
export const EmptyPage: Story = {
  decorators: [emptyPageDecorator],
};
