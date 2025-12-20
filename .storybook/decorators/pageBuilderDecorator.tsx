/**
 * Page Builder Store Decorator for Storybook
 *
 * This decorator initializes the page builder Zustand store with mock data
 * before rendering stories that depend on it.
 */

import type { Decorator } from '@storybook/nextjs-vite';
import { useEffect } from 'react';

import { hero1Schema } from '../../lib/page-builder/schemas/hero';
import { navbar1Schema } from '../../lib/page-builder/schemas/navbar';
import { usePageBuilderStore } from '../../lib/page-builder/store';
import type { ComponentInstance, PageDocument } from '../../lib/page-builder/types';

/**
 * Mock component instances for stories
 */
export const mockNavbarComponent: ComponentInstance = {
  id: 'comp_navbar1',
  type: 'navbar',
  variant: 1,
  props: navbar1Schema.defaults,
};

export const mockHeroComponent: ComponentInstance = {
  id: 'comp_hero1',
  type: 'hero',
  variant: 1,
  props: hero1Schema.defaults,
};

/**
 * Mock page document with sample components
 */
export const mockPageDocument: PageDocument = {
  id: 'page_1',
  organizationId: 'org_mock',
  name: 'Sample Landing Page',
  slug: 'sample-landing',
  components: [mockNavbarComponent, mockHeroComponent],
  createdAt: new Date(),
  updatedAt: new Date(),
};

/**
 * Empty page document for empty state stories
 */
export const emptyPageDocument: PageDocument = {
  id: 'page_2',
  organizationId: 'org_mock',
  name: 'Empty Page',
  slug: 'empty-page',
  components: [],
  createdAt: new Date(),
  updatedAt: new Date(),
};

/**
 * Options for configuring the page builder decorator
 */
export type PageBuilderDecoratorOptions = {
  /** Page document to initialize with */
  page?: PageDocument;
  /** ID of component to select initially */
  selectedComponentId?: string | null;
  /** Viewport size */
  viewport?: 'mobile' | 'tablet' | 'desktop';
  /** Whether the page has unsaved changes */
  isDirty?: boolean;
  /** Whether a save is in progress */
  isSaving?: boolean;
};

/**
 * Creates a decorator that initializes the page builder store
 * with the specified options.
 *
 * @example
 * ```tsx
 * export const WithSelectedComponent: Story = {
 *   decorators: [
 *     withPageBuilder({
 *       page: mockPageDocument,
 *       selectedComponentId: 'comp_navbar1',
 *     }),
 *   ],
 * };
 * ```
 */
export function withPageBuilder(options: PageBuilderDecoratorOptions = {}): Decorator {
  const {
    page = mockPageDocument,
    selectedComponentId = null,
    viewport = 'desktop',
    isDirty = false,
    isSaving = false,
  } = options;

  return function PageBuilderDecorator(Story) {
    useEffect(() => {
      const store = usePageBuilderStore.getState();

      // Initialize the store
      store.initializePage(page);

      if (selectedComponentId) {
        store.selectComponent(selectedComponentId);
      }

      store.setViewport(viewport);

      // Set dirty/saving state manually through the store
      usePageBuilderStore.setState({ isDirty, isSaving });

      // Cleanup on unmount
      return () => {
        usePageBuilderStore.getState().resetStore();
      };
    }, []);

    return <Story />;
  };
}

/**
 * Default decorator with a sample page and navbar selected
 */
export const defaultPageBuilderDecorator = withPageBuilder({
  page: mockPageDocument,
  selectedComponentId: 'comp_navbar1',
});

/**
 * Decorator with no component selected
 */
export const noSelectionDecorator = withPageBuilder({
  page: mockPageDocument,
  selectedComponentId: null,
});

/**
 * Decorator with empty page
 */
export const emptyPageDecorator = withPageBuilder({
  page: emptyPageDocument,
  selectedComponentId: null,
});

/**
 * Decorator with hero component selected
 */
export const heroSelectedDecorator = withPageBuilder({
  page: mockPageDocument,
  selectedComponentId: 'comp_hero1',
});

/**
 * Decorator showing saving state
 */
export const savingStateDecorator = withPageBuilder({
  page: mockPageDocument,
  isDirty: false,
  isSaving: true,
});

/**
 * Decorator showing unsaved changes
 */
export const unsavedChangesDecorator = withPageBuilder({
  page: mockPageDocument,
  isDirty: true,
  isSaving: false,
});
