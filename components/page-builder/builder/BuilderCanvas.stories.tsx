/**
 * BuilderCanvas Stories
 *
 * The BuilderCanvas is the central preview area where page components are rendered.
 * It shows all components in order with selection support and responsive viewport.
 *
 * Key features:
 * - Renders components from the page builder store
 * - Responsive viewport preview (mobile/tablet/desktop)
 * - Component selection with visual indicator
 * - Empty state when no components added
 * - Component label on selection
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { BuilderCanvas } from './BuilderCanvas';
import {
  defaultPageBuilderDecorator,
  emptyPageDecorator,
  heroSelectedDecorator,
  withPageBuilder,
} from '../../../.storybook/decorators/pageBuilderDecorator';

const meta = {
  title: 'PageBuilder/BuilderCanvas',
  component: BuilderCanvas,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The BuilderCanvas renders the page preview with all components.

## Features

- **Component Rendering**: Each component is rendered using its registered React component
- **Selection**: Click a component to select it and show properties in sidebar
- **Visual Feedback**: Selected component shows a ring and label
- **Responsive Preview**: Canvas width adjusts based on viewport setting
- **Empty State**: Helpful message when no components are added

## State Integration

The canvas reads from the Zustand store:
- \`selectComponents\` selector for component list
- \`selectedComponentId\` for highlighting
- \`viewport\` for responsive width
- \`selectComponent()\` action when clicking components
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-[600px] bg-background flex">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BuilderCanvas>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default state with navbar and hero components.
 * Navbar is selected (showing the selection ring and label).
 */
export const Default: Story = {
  decorators: [defaultPageBuilderDecorator],
};

/**
 * State with hero component selected.
 * The hero section shows the selection indicator.
 */
export const HeroSelected: Story = {
  decorators: [heroSelectedDecorator],
};

/**
 * Empty state when no components are on the page.
 * Shows a placeholder with instructions.
 */
export const Empty: Story = {
  decorators: [emptyPageDecorator],
};

/**
 * Mobile viewport (375px width).
 * Canvas is centered and shows mobile-sized preview.
 */
export const MobileViewport: Story = {
  decorators: [
    withPageBuilder({
      viewport: 'mobile',
      selectedComponentId: 'comp_navbar1',
    }),
  ],
};

/**
 * Tablet viewport (768px width).
 * Canvas shows tablet-sized preview.
 */
export const TabletViewport: Story = {
  decorators: [
    withPageBuilder({
      viewport: 'tablet',
      selectedComponentId: 'comp_navbar1',
    }),
  ],
};

/**
 * Desktop viewport (full width).
 * Canvas expands to full available width.
 */
export const DesktopViewport: Story = {
  decorators: [
    withPageBuilder({
      viewport: 'desktop',
      selectedComponentId: 'comp_navbar1',
    }),
  ],
};
