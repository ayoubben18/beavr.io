import type { Meta, StoryObj } from "@storybook/react";
import { Testimonials4 } from "./Testimonials4";

/**
 * Testimonials 4 Component
 *
 * A centered testimonial carousel with overlapping avatars at the top.
 * Click on an avatar to view that person's testimonial.
 *
 * ## Features
 * - Overlapping avatars row at top (clickable)
 * - Single testimonial quote display
 * - Pagination dots for navigation
 * - Avatar selection highlights active testimonial
 *
 * ## Container Queries
 * Uses CSS Container Queries for responsiveness:
 * - @3xl (768px): Larger avatars and text
 * - @5xl (1024px): Maximum text size
 */
const meta = {
  title: "Page Builder/Testimonials/Testimonials4",
  component: Testimonials4,
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
      description: "Array of testimonial items with avatar image and description",
    },
    navigation: {
      description: "Navigation dot styling (icon color for active, border for inactive)",
    },
  },
} satisfies Meta<typeof Testimonials4>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default configuration with multiple testimonials and avatar placeholders.
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Loved by Customers",
    },
    testimonials: [
      {
        image: "",
        description:
          "An incredible experience from start to finish. The team truly understands what businesses need to succeed.",
      },
      {
        image: "",
        description:
          "We've tried many solutions, but this one stands head and shoulders above the rest. Absolutely recommend!",
      },
      {
        image: "",
        description:
          "The attention to detail and quality of service is unmatched. A true partner in our growth.",
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
 * With real avatar images.
 */
export const WithAvatars: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "What Our Clients Say",
    },
    testimonials: [
      {
        image: "https://i.pravatar.cc/150?img=1",
        description:
          "Working with this team has been transformative for our business. The results speak for themselves.",
      },
      {
        image: "https://i.pravatar.cc/150?img=2",
        description:
          "Professional, responsive, and incredibly knowledgeable. They exceeded all our expectations.",
      },
      {
        image: "https://i.pravatar.cc/150?img=3",
        description:
          "The best investment we've made this year. Our productivity has increased significantly.",
      },
      {
        image: "https://i.pravatar.cc/150?img=4",
        description:
          "Excellent support and a product that truly delivers on its promises. Highly recommended!",
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
      label: "Customer Reviews",
    },
    testimonials: [
      {
        image: "",
        description:
          "This product has completely changed how we approach our daily work. Highly recommended.",
      },
      {
        image: "",
        description:
          "Outstanding support and fantastic results. The team truly cares about customer success.",
      },
      {
        image: "",
        description:
          "Simple to use, powerful results. Everything we needed and more.",
      },
    ],
    navigation: {
      bgColor: "#ffffff",
      iconColor: "#141414",
      borderColor: "#d4d4d4",
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
      borderColor: "rgba(255,255,255,0.5)",
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
 * Single testimonial (no pagination).
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
        image: "https://i.pravatar.cc/150?img=5",
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
 * Many testimonials (5+).
 */
export const ManyTestimonials: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Our Happy Customers",
    },
    testimonials: [
      {
        image: "https://i.pravatar.cc/150?img=10",
        description: "Fantastic service and amazing results!",
      },
      {
        image: "https://i.pravatar.cc/150?img=11",
        description: "The best decision we made for our business.",
      },
      {
        image: "https://i.pravatar.cc/150?img=12",
        description: "Highly professional and reliable team.",
      },
      {
        image: "https://i.pravatar.cc/150?img=13",
        description: "Exceeded all our expectations.",
      },
      {
        image: "https://i.pravatar.cc/150?img=14",
        description: "A game-changer for our workflow.",
      },
      {
        image: "https://i.pravatar.cc/150?img=15",
        description: "Outstanding support and great value.",
      },
    ],
    navigation: {
      bgColor: "#ffffff",
      iconColor: "#692e0e",
      borderColor: "#e3e3e3",
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
