/**
 * BuilderTopBar Stories
 *
 * The BuilderTopBar is the navigation bar at the top of the page builder.
 * It displays page info, viewport controls, and action buttons.
 *
 * Key features:
 * - Page name and organization display
 * - Viewport size switcher (mobile/tablet/desktop)
 * - Undo/Redo buttons with state awareness
 * - Preview button
 * - Export PDF button
 * - Publish button with loading state
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { BuilderTopBar } from './BuilderTopBar';
import {
  defaultPageBuilderDecorator,
  savingStateDecorator,
  unsavedChangesDecorator,
  withPageBuilder,
} from '../../../.storybook/decorators/pageBuilderDecorator';

const meta = {
  title: 'PageBuilder/BuilderTopBar',
  component: BuilderTopBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The BuilderTopBar provides navigation and controls for the page builder.

## Features

- **Page Info**: Shows organization name, page name, and unsaved indicator
- **Viewport Switcher**: Toggle between mobile (375px), tablet (768px), and desktop (1440px) previews
- **Undo/Redo**: Navigate through edit history (disabled when unavailable)
- **Preview**: Open page in preview mode
- **Export PDF**: Download page as PDF
- **Publish**: Save and publish the page (shows loading state)

## State Integration

The component reads from the Zustand store:
- \`page.name\` for the page title
- \`viewport\` for active viewport size
- \`canUndo()\` / \`canRedo()\` for button states
- \`isDirty\` for unsaved changes indicator
- \`isSaving\` for publish button loading state
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-background">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BuilderTopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default state with desktop viewport selected.
 * Undo/Redo buttons are disabled (no history).
 */
export const Default: Story = {
  decorators: [defaultPageBuilderDecorator],
};

/**
 * State showing unsaved changes indicator.
 * The "(unsaved)" text appears next to the page name.
 */
export const UnsavedChanges: Story = {
  decorators: [unsavedChangesDecorator],
};

/**
 * State while saving/publishing.
 * The Publish button shows "Saving..." and is disabled.
 */
export const Saving: Story = {
  decorators: [savingStateDecorator],
};

/**
 * Mobile viewport selected.
 * The mobile icon is highlighted in the viewport switcher.
 */
export const MobileViewport: Story = {
  decorators: [
    withPageBuilder({
      viewport: 'mobile',
    }),
  ],
};

/**
 * Tablet viewport selected.
 * The tablet icon is highlighted in the viewport switcher.
 */
export const TabletViewport: Story = {
  decorators: [
    withPageBuilder({
      viewport: 'tablet',
    }),
  ],
};
