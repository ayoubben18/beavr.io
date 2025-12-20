/**
 * ComponentMarketplace Stories
 *
 * The ComponentMarketplace is the left sidebar in the page builder that shows
 * available components organized by category. Users can click components to
 * add them to the canvas.
 *
 * Key features:
 * - Components organized by category (Navbar, Hero, etc.)
 * - Search functionality to filter components
 * - Collapsible category sections
 * - Component cards with thumbnails and labels
 * - Click to add components to the canvas
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ComponentMarketplace } from './ComponentMarketplace';
import { defaultPageBuilderDecorator } from '../../../.storybook/decorators/pageBuilderDecorator';

const meta = {
  title: 'PageBuilder/ComponentMarketplace',
  component: ComponentMarketplace,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The ComponentMarketplace displays available components that can be added to the page.

## Features

- **Category Organization**: Components grouped by type (Navbar, Hero, About, etc.)
- **Search**: Filter components by name
- **Collapsible Sections**: Expand/collapse categories
- **Component Cards**: Visual preview with thumbnail and label
- **Click to Add**: Clicking a card adds the component to the canvas

## Data Flow

1. \`getMarketplaceComponentsByCategory()\` retrieves available components from registry
2. Components are filtered by search term
3. Clicking a card calls \`addComponent()\` with default props from schema
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    defaultPageBuilderDecorator,
    (Story) => (
      <div className="h-[600px] bg-background">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ComponentMarketplace>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default state showing all available components.
 * Categories are expanded by default.
 */
export const Default: Story = {};

/**
 * Interactive demo - click components to add them to the page.
 * Open the Actions panel to see the addComponent calls.
 */
export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Click on any component card to add it to the canvas. The component will be added with its default props from the schema.',
      },
    },
  },
};
