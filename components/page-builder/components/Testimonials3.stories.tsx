import type { Meta, StoryObj } from "@storybook/react";
import { Testimonials3 } from "./Testimonials3";

/**
 * Testimonials 3 Component
 *
 * A centered testimonial carousel that displays one quote at a time.
 * Features a large quote icon, prominent text, and navigation controls.
 *
 * ## Features
 * - Large centered quote display
 * - Single testimonial visible at a time
 * - Navigation arrows and pagination dots
 * - No avatar visible (text-focused)
 * - Customizable navigation styling
 *
 * ## Container Queries
 * Uses CSS Container Queries for responsiveness:
 * - @3xl (768px): Larger text, more spacing
 * - @5xl (1024px): Maximum text size
 */
const meta = {
  title: "Page Builder/Testimonials/Testimonials3",
  component: Testimonials3,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    config: {
      description: "Configuration object with background color",
    },
    title: {
      description: "Section title configuration",
    },
    testimonials: {
      description: "Array of testimonial items with image and description",
    },
    navigation: {
      description: "Navigation button styling (background, icon, border colors)",
    },
  },
} satisfies Meta<typeof Testimonials3>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default configuration with multiple testimonials.
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Customer Stories",
    },
    testimonials: [
      {
        image: "",
        description:
          "Working with this team has been an absolute pleasure. Their attention to detail and commitment to quality is unmatched in the industry.",
      },
      {
        image: "",
        description:
          "The level of professionalism and expertise exceeded all our expectations. We couldn't be happier with the results.",
      },
      {
        image: "",
        description:
          "A truly transformative experience. Our company has never been more efficient or productive.",
      },
    ],
    navigation: {
      bgColor: "#ffffff",
      iconColor: "#141414",
      borderColor: "#e3e3e3",
    },
  },
};

/**
 * With gray background for contrast.
 */
export const GrayBackground: Story = {
  args: {
    config: {
      bgColor: "#f5f5f5",
    },
    title: {
      label: "What People Say",
    },
    testimonials: [
      {
        image: "",
        description:
          "This product has completely changed how we approach our daily work. Highly recommended for teams of any size.",
      },
      {
        image: "",
        description:
          "Outstanding support and fantastic results. The team truly cares about their customers' success.",
      },
    ],
    navigation: {
      bgColor: "#ffffff",
      iconColor: "#141414",
      borderColor: "#e3e3e3",
    },
  },
};

/**
 * With brand-colored background.
 */
export const BrandBackground: Story = {
  args: {
    config: {
      bgColor: "#692e0e",
    },
    title: {
      label: "Hear From Our Clients",
    },
    testimonials: [
      {
        image: "",
        description:
          "An exceptional experience from start to finish. The team delivered beyond our expectations.",
      },
      {
        image: "",
        description:
          "Their expertise and dedication made all the difference. We achieved results we never thought possible.",
      },
      {
        image: "",
        description:
          "Professional, responsive, and incredibly knowledgeable. A true partner in our success.",
      },
    ],
    navigation: {
      bgColor: "transparent",
      iconColor: "#ffffff",
      borderColor: "#ffffff",
    },
  },
  decorators: [
    (Story) => (
      <div className="[&_h2]:text-white [&_p]:text-white/90 [&_svg]:text-white/30">
        <Story />
      </div>
    ),
  ],
};

/**
 * Single testimonial (no navigation shown).
 */
export const SingleTestimonial: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Featured Review",
    },
    testimonials: [
      {
        image: "",
        description:
          "This is the single most impactful decision we made for our business this year. The ROI speaks for itself.",
      },
    ],
    navigation: {
      bgColor: "#ffffff",
      iconColor: "#141414",
      borderColor: "#e3e3e3",
    },
  },
};

/**
 * Dark navigation style on light background.
 */
export const DarkNavigation: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Trusted Reviews",
    },
    testimonials: [
      {
        image: "",
        description:
          "The perfect solution for our needs. Simple, effective, and reliable.",
      },
      {
        image: "",
        description:
          "We saw immediate improvements after implementation. Couldn't be happier.",
      },
      {
        image: "",
        description:
          "Top-notch service and a product that truly delivers on its promises.",
      },
      {
        image: "",
        description:
          "A game-changer for our workflow. Our team productivity has skyrocketed.",
      },
    ],
    navigation: {
      bgColor: "#141414",
      iconColor: "#ffffff",
      borderColor: "#141414",
    },
  },
};

/**
 * Mobile viewport simulation (narrow container).
 */
export const MobileView: Story = {
  args: {
    ...Default.args,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "375px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Tablet viewport simulation (medium container).
 */
export const TabletView: Story = {
  args: {
    ...Default.args,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "768px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};
