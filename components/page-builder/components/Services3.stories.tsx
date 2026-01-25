import type { Meta, StoryObj } from "@storybook/react";

import { Services3 } from "./Services3";

/**
 * Services 3 Component
 *
 * Title at top with 2 large service cards below.
 * Each card features a title, description, and feature list with checkmarks.
 *
 * Uses CSS Container Queries for responsiveness based on parent container width.
 */
const meta: Meta<typeof Services3> = {
  title: "Page Builder/Services/Services3",
  component: Services3,
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
      description: "Array of service items with title and description",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Services3>;

const defaultServices = [
  {
    image: "",
    title: "Starter Package",
    description:
      "Perfect for small businesses and startups looking to establish their online presence with essential features.",
  },
  {
    image: "",
    title: "Enterprise Package",
    description:
      "Comprehensive solutions for established businesses ready to scale with advanced features and priority support.",
  },
];

/**
 * Default state with white background and 2 service cards
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Choose Your Plan",
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
      label: "Our Packages",
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
      label: "Service Tiers",
    },
    services: defaultServices,
  },
};

/**
 * Three service cards layout
 */
export const ThreeServices: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Choose Your Path",
    },
    services: [
      {
        image: "",
        title: "Basic",
        description:
          "Essential features for individuals and small projects getting started.",
      },
      {
        image: "",
        title: "Professional",
        description:
          "Advanced features for growing businesses with expanding needs.",
      },
      {
        image: "",
        title: "Enterprise",
        description:
          "Full-featured solutions for large organizations requiring maximum capabilities.",
      },
    ],
  },
};

/**
 * Four service cards layout
 */
export const FourServices: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Our Services",
    },
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
        description: "User-centered design for digital experiences.",
      },
      {
        image: "",
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and deployment.",
      },
    ],
  },
};

/**
 * Single service card
 */
export const SingleService: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Featured Service",
    },
    services: [
      {
        image: "",
        title: "Complete Solution",
        description:
          "Our comprehensive all-in-one package includes everything you need to succeed in the digital landscape with premium support.",
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
      label: "Choose Your Plan",
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
      label: "Choose Your Plan",
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
