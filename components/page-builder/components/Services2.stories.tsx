/**
 * Services2 Stories
 *
 * Services carousel with title centered and cards in a row.
 * Navigation arrows and pagination dots for cycling through services.
 *
 * Key features:
 * - Configurable background color
 * - Title centered at top (left on desktop)
 * - Navigation arrows for pagination
 * - Service cards with icons/images, titles, and descriptions
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Services2 } from "./Services2";

const meta = {
  title: "PageBuilder/Components/Services2",
  component: Services2,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A carousel-style services component similar to Testimonials1.

## Features

- **Background Color**: Customizable section background
- **Title**: Section heading with responsive sizing
- **Navigation**: Arrows and pagination dots for multi-page content
- **Service Cards**: Cards with icon, title, and description

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.

| Container Width | Layout |
|-----------------|--------|
| < 576px | Single column cards |
| ≥ 576px (@xl) | 2-column grid |
| ≥ 768px (@3xl) | 3-column grid |
| ≥ 1024px (@5xl) | 4-column grid |

## Props Structure

\`\`\`typescript
type Services2Props = {
  config: {
    bgColor: HexColor;
  };
  title: {
    label: string;
  };
  navigation: {
    bgColor: HexColor;
    textColor: HexColor;
    borderColor: HexColor;
  };
  services: Array<{
    image: string;       // Icon/image URL
    title: string;       // Service title
    description: string; // Service description
  }>;
};
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="@container">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Services2>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default layout with 4 service cards.
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "What We Offer",
    },
    navigation: {
      bgColor: "#ffffff",
      textColor: "#141414",
      borderColor: "#e3e3e3",
    },
    services: [
      {
        image: "",
        title: "Strategy & Consulting",
        description:
          "Expert guidance to define your digital strategy and roadmap.",
      },
      {
        image: "",
        title: "Product Design",
        description:
          "End-to-end product design from concept to polished interface.",
      },
      {
        image: "",
        title: "Development",
        description:
          "Full-stack development using the latest technologies and frameworks.",
      },
      {
        image: "",
        title: "Quality Assurance",
        description:
          "Comprehensive testing to ensure reliability and performance.",
      },
    ],
  },
};

/**
 * Gray background variant.
 */
export const GrayBackground: Story = {
  args: {
    ...Default.args,
    config: {
      bgColor: "#f5f5f5",
    },
  },
};

/**
 * Brand colored background.
 */
export const BrandBackground: Story = {
  args: {
    ...Default.args,
    config: {
      bgColor: "#fef3c7",
    },
  },
};

/**
 * Multiple pages of services (8 items = 2 pages).
 */
export const MultiplePages: Story = {
  args: {
    ...Default.args,
    services: [
      {
        image: "",
        title: "Strategy",
        description: "Define your digital roadmap for success.",
      },
      {
        image: "",
        title: "Design",
        description: "Create engaging user experiences.",
      },
      {
        image: "",
        title: "Development",
        description: "Build with the latest technologies.",
      },
      {
        image: "",
        title: "Testing",
        description: "Ensure quality and reliability.",
      },
      {
        image: "",
        title: "Deployment",
        description: "Launch with confidence.",
      },
      {
        image: "",
        title: "Maintenance",
        description: "Ongoing support and updates.",
      },
      {
        image: "",
        title: "Analytics",
        description: "Measure and optimize performance.",
      },
      {
        image: "",
        title: "Security",
        description: "Protect your digital assets.",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "With 8 services, the component shows 2 pages with navigation arrows and dots.",
      },
    },
  },
};

/**
 * Single service card (no navigation needed).
 */
export const SingleService: Story = {
  args: {
    ...Default.args,
    services: [
      {
        image: "",
        title: "Full-Service Development",
        description:
          "We provide end-to-end development services from strategy to deployment and ongoing maintenance.",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "With only one service, navigation controls are hidden.",
      },
    },
  },
};

/**
 * Two services.
 */
export const TwoServices: Story = {
  args: {
    ...Default.args,
    services: [
      {
        image: "",
        title: "Consulting",
        description:
          "Expert guidance to define your digital strategy and roadmap for success.",
      },
      {
        image: "",
        title: "Implementation",
        description:
          "Full-stack development and deployment using the latest technologies.",
      },
    ],
  },
};

/**
 * Dark navigation buttons.
 */
export const DarkNavigation: Story = {
  args: {
    ...Default.args,
    navigation: {
      bgColor: "#141414",
      textColor: "#ffffff",
      borderColor: "#141414",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Dark styled navigation buttons for contrast.",
      },
    },
  },
};

/**
 * Mobile viewport simulation.
 * Container constrained to 375px to show single column layout.
 */
export const MobileView: Story = {
  args: Default.args,
  decorators: [
    (Story) => (
      <div className="@container max-w-[375px] mx-auto border">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Shows the mobile single-column layout with stacked cards.",
      },
    },
  },
};

/**
 * Tablet viewport simulation.
 * Container at 768px shows 3-column layout.
 */
export const TabletView: Story = {
  args: Default.args,
  decorators: [
    (Story) => (
      <div className="@container max-w-[768px] mx-auto border">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Shows the tablet 3-column layout at 768px (@3xl breakpoint).",
      },
    },
  },
};
