/**
 * Testimonials2 Stories
 *
 * 2-column testimonial layout with promotional content on one side
 * and stacked testimonial cards with avatars on the other.
 *
 * Key features:
 * - Configurable background color
 * - LTR/RTL layout direction support
 * - Title, description, and CTA button
 * - Testimonial cards with avatars
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Testimonials2 } from "./Testimonials2";

const meta = {
  title: "PageBuilder/Components/Testimonials2",
  component: Testimonials2,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A 2-column testimonial component with promotional content and stacked cards.

## Features

- **Background Color**: Customizable section background
- **Direction**: LTR (content left) or RTL (content right) layout
- **Title**: Section heading with responsive sizing
- **Description**: Supporting text for the section
- **CTA Button**: Call-to-action with customizable colors
- **Testimonials**: Cards with avatar images and quotes

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.

| Container Width | Layout |
|-----------------|--------|
| < 768px | Single column, stacked |
| ≥ 768px (@3xl) | 2-column side by side |

## Props Structure

\`\`\`typescript
type Testimonial2Props = {
  config: {
    bgColor: HexColor;
    direction: "ltr" | "rtl";
  };
  title: {
    label: string;
  };
  description: {
    content: string;
  };
  testimonials: Array<{
    image: string;       // Avatar URL
    description: string; // Quote text
  }>;
  cta: {
    label: string;
    bgColor: HexColor;
    textColor: HexColor;
    borderColor: HexColor;
  };
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
} satisfies Meta<typeof Testimonials2>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default layout with content on left, testimonials on right (LTR).
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
      direction: "ltr",
    },
    title: {
      label: "Trusted by Thousands",
    },
    description: {
      content:
        "Join the growing community of satisfied customers who have transformed their businesses with our solutions.",
    },
    testimonials: [
      {
        image: "",
        description:
          "The team went above and beyond to ensure our success. Truly a game-changer for our organization.",
      },
      {
        image: "",
        description:
          "Fast, reliable, and incredibly effective. We've seen a 40% increase in productivity since implementing this solution.",
      },
    ],
    cta: {
      label: "Read More Stories",
      bgColor: "#692e0e",
      textColor: "#ffffff",
      borderColor: "#692e0e",
    },
  },
};

/**
 * RTL layout with testimonials on left, content on right.
 */
export const RTLLayout: Story = {
  args: {
    ...Default.args,
    config: {
      bgColor: "#ffffff",
      direction: "rtl",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Right-to-left layout places testimonials on the left and content on the right.",
      },
    },
  },
};

/**
 * Gray background variant.
 */
export const GrayBackground: Story = {
  args: {
    ...Default.args,
    config: {
      ...Default.args.config,
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
      ...Default.args.config,
      bgColor: "#fef3c7",
    },
    cta: {
      label: "Read More Stories",
      bgColor: "#b45309",
      textColor: "#ffffff",
      borderColor: "#b45309",
    },
  },
};

/**
 * Multiple testimonials (4 cards).
 */
export const MultipleTestimonials: Story = {
  args: {
    ...Default.args,
    testimonials: [
      {
        image: "",
        description:
          "Outstanding service and incredible results. Would recommend to anyone.",
      },
      {
        image: "",
        description:
          "The best investment we've made for our company this year.",
      },
      {
        image: "",
        description:
          "Simple, intuitive, and powerful. Everything we needed.",
      },
      {
        image: "",
        description:
          "Our team productivity increased by 50% within the first month.",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple stacked testimonial cards in the right column.",
      },
    },
  },
};

/**
 * Single testimonial.
 */
export const SingleTestimonial: Story = {
  args: {
    ...Default.args,
    testimonials: [
      {
        image: "",
        description:
          "A truly transformative experience. Our company has never been more efficient or productive. I cannot recommend this solution highly enough to anyone looking to take their business to the next level.",
      },
    ],
  },
};

/**
 * Outline button variant.
 */
export const OutlineButton: Story = {
  args: {
    ...Default.args,
    cta: {
      label: "View All Reviews",
      bgColor: "#ffffff",
      textColor: "#141414",
      borderColor: "#e3e3e3",
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
        story: "Shows the mobile single-column layout with stacked sections.",
      },
    },
  },
};

/**
 * Tablet viewport simulation.
 * Container at 768px shows 2-column layout.
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
        story: "Shows the tablet 2-column layout at 768px (@3xl breakpoint).",
      },
    },
  },
};
