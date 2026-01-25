/**
 * Services1 Stories
 *
 * 2-column services layout with promotional content on one side
 * and a 2x2 grid of service cards on the other.
 *
 * Key features:
 * - Configurable background color
 * - LTR/RTL layout direction support
 * - Title, description, and CTA button
 * - Service cards with icons/images, titles, and descriptions
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Services1 } from "./Services1";

const meta = {
  title: "PageBuilder/Components/Services1",
  component: Services1,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A 2-column services component with promotional content and a 2x2 service card grid.

## Features

- **Background Color**: Customizable section background
- **Direction**: LTR (content left) or RTL (content right) layout
- **Title**: Section heading with responsive sizing
- **Description**: Supporting text for the section
- **CTA Button**: Call-to-action with customizable colors
- **Service Cards**: 2x2 grid with icon, title, and description

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.

| Container Width | Layout |
|-----------------|--------|
| < 576px | Single column cards, stacked |
| ≥ 576px (@xl) | 2x2 card grid |
| ≥ 768px (@3xl) | 2-column layout (content + grid) |

## Props Structure

\`\`\`typescript
type Services1Props = {
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
  services: Array<{
    image: string;       // Icon/image URL
    title: string;       // Service title
    description: string; // Service description
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
} satisfies Meta<typeof Services1>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default layout with content on left, services grid on right (LTR).
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
      direction: "ltr",
    },
    title: {
      label: "Our Services",
    },
    description: {
      content:
        "We offer a comprehensive range of solutions designed to help your business grow and succeed in the digital landscape.",
    },
    services: [
      {
        image: "",
        title: "Web Development",
        description:
          "Custom websites and web applications built with modern technologies.",
      },
      {
        image: "",
        title: "Mobile Apps",
        description:
          "Native and cross-platform mobile applications for iOS and Android.",
      },
      {
        image: "",
        title: "UI/UX Design",
        description:
          "User-centered design that creates engaging digital experiences.",
      },
      {
        image: "",
        title: "Cloud Solutions",
        description:
          "Scalable cloud infrastructure and deployment services.",
      },
    ],
    cta: {
      label: "View All Services",
      bgColor: "#692e0e",
      textColor: "#ffffff",
      borderColor: "#692e0e",
    },
  },
};

/**
 * RTL layout with services grid on left, content on right.
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
          "Right-to-left layout places the service grid on the left and content on the right.",
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
      label: "View All Services",
      bgColor: "#b45309",
      textColor: "#ffffff",
      borderColor: "#b45309",
    },
  },
};

/**
 * Six services showing grid adaptation.
 */
export const SixServices: Story = {
  args: {
    ...Default.args,
    services: [
      {
        image: "",
        title: "Web Development",
        description: "Custom websites built with modern technologies.",
      },
      {
        image: "",
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications.",
      },
      {
        image: "",
        title: "UI/UX Design",
        description: "User-centered design that engages.",
      },
      {
        image: "",
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure services.",
      },
      {
        image: "",
        title: "Data Analytics",
        description: "Turn data into actionable insights.",
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
        story: "Six service cards showing the 2-column grid adaptation.",
      },
    },
  },
};

/**
 * Two services only.
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
 * Outline button variant.
 */
export const OutlineButton: Story = {
  args: {
    ...Default.args,
    cta: {
      label: "Explore Services",
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
