import type { Meta, StoryObj } from "@storybook/react";

import { Services4 } from "./Services4";

/**
 * Services 4 Component
 *
 * Title centered at top with a list of text-only service items below.
 * Clean and simple design without images, featuring title and description per item.
 *
 * Uses CSS Container Queries for responsiveness based on parent container width.
 */
const meta: Meta<typeof Services4> = {
  title: "Page Builder/Services/Services4",
  component: Services4,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    config: {
      description: "Configuration options including background color",
    },
    title: {
      description: "Section title configuration",
    },
    services: {
      description: "Array of service items with title and description (no images)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Services4>;

const defaultServices = [
  {
    title: "Brand Strategy",
    description:
      "Define your brand identity, messaging, and market positioning to stand out from competitors and resonate with your target audience.",
  },
  {
    title: "Digital Marketing",
    description:
      "Reach your target audience through SEO, social media, and paid advertising campaigns designed to drive measurable results.",
  },
  {
    title: "Content Creation",
    description:
      "Engage your audience with compelling content across all digital channels, from blog posts to video production.",
  },
  {
    title: "Analytics & Insights",
    description:
      "Data-driven decision making with comprehensive analytics and reporting to optimize your marketing efforts.",
  },
];

/**
 * Default state with white background and 4 service items
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "How We Can Help",
    },
    services: defaultServices,
  },
};

/**
 * Gray background variation
 */
export const GrayBackground: Story = {
  args: {
    config: {
      bgColor: "#f5f5f5",
    },
    title: {
      label: "Our Expertise",
    },
    services: defaultServices,
  },
};

/**
 * Brand background color
 */
export const BrandBackground: Story = {
  args: {
    config: {
      bgColor: "#fef3e7",
    },
    title: {
      label: "What We Offer",
    },
    services: defaultServices,
  },
};

/**
 * Two service items
 */
export const TwoServices: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Core Services",
    },
    services: [
      {
        title: "Web Development",
        description:
          "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      },
      {
        title: "Mobile Apps",
        description:
          "Native and cross-platform mobile applications for iOS and Android that engage users on the go.",
      },
    ],
  },
};

/**
 * Many service items
 */
export const ManyServices: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Full Service Offerings",
    },
    services: [
      {
        title: "Strategy Consulting",
        description: "Expert guidance to define your digital strategy and roadmap.",
      },
      {
        title: "UX Research",
        description: "User research and testing to inform design decisions.",
      },
      {
        title: "UI Design",
        description: "Beautiful interfaces that delight users and drive engagement.",
      },
      {
        title: "Development",
        description: "Full-stack development using the latest technologies.",
      },
      {
        title: "Quality Assurance",
        description: "Comprehensive testing to ensure reliability and performance.",
      },
      {
        title: "Maintenance",
        description: "Ongoing support and updates to keep your product running smoothly.",
      },
    ],
  },
};

/**
 * Single service item
 */
export const SingleService: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Our Focus",
    },
    services: [
      {
        title: "Digital Transformation",
        description:
          "We help businesses modernize their operations and embrace digital technologies to stay competitive in today's rapidly evolving market landscape.",
      },
    ],
  },
};

/**
 * Mobile viewport simulation (375px)
 */
export const MobileView: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "How We Can Help",
    },
    services: defaultServices,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "375px" }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Tablet viewport simulation (768px)
 */
export const TabletView: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "How We Can Help",
    },
    services: defaultServices,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "768px" }}>
        <Story />
      </div>
    ),
  ],
};
