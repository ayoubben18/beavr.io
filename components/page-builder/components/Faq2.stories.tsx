/**
 * FAQ2 Stories
 *
 * 2-column layout with promotional content (title, description, CTA) on one side
 * and accordion FAQ items on the other. Supports LTR/RTL layout direction.
 *
 * Key features:
 * - Configurable background color
 * - LTR/RTL direction support
 * - Accordion with expand/collapse functionality
 * - CTA button with customizable colors
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Faq2 } from "./Faq2";

const meta = {
  title: "PageBuilder/Components/Faq2",
  component: Faq2,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A 2-column FAQ component with promotional content and accordion items.

## Features

- **Background Color**: Customizable section background
- **Direction**: LTR (content left, FAQ right) or RTL (FAQ left, content right)
- **Title & Description**: Promotional content column
- **CTA Button**: Customizable button with background, text, and border colors
- **Accordion FAQ**: Collapsible FAQ items on the other side

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.

| Container Width | Layout |
|-----------------|--------|
| < 768px | Single column, stacked vertically |
| ≥ 768px (@3xl) | Two columns side by side |
| ≥ 1024px (@5xl) | Maximum text size |

## Props Structure

\`\`\`typescript
type Faq2Props = {
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
  questions: Array<{
    question: string;
    answer: string;
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
} satisfies Meta<typeof Faq2>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultQuestions = [
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Simply reach out through our contact form or schedule a free consultation call. We'll discuss your needs and create a customized plan.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, bank transfers, and PayPal. For larger projects, we also offer flexible payment plans.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time. There are no long-term contracts or hidden fees.",
  },
];

/**
 * Default FAQ with content on left, accordion on right.
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
      direction: "ltr",
    },
    title: {
      label: "Got Questions?",
    },
    description: {
      content:
        "Find answers to commonly asked questions about our services, process, and policies. Can't find what you're looking for? Contact our support team.",
    },
    questions: defaultQuestions,
    cta: {
      label: "Contact Support",
      bgColor: "#692e0e",
      textColor: "#ffffff",
      borderColor: "#692e0e",
    },
  },
};

/**
 * RTL layout - FAQ on left, content on right.
 */
export const RTLLayout: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
      direction: "rtl",
    },
    title: {
      label: "Frequently Asked Questions",
    },
    description: {
      content:
        "We've compiled answers to the most common questions our customers ask. If you need more help, our team is just a click away.",
    },
    questions: defaultQuestions,
    cta: {
      label: "Get Help",
      bgColor: "#692e0e",
      textColor: "#ffffff",
      borderColor: "#692e0e",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "RTL layout places the accordion on the left and promotional content on the right.",
      },
    },
  },
};

/**
 * Gray background variant.
 */
export const GrayBackground: Story = {
  args: {
    config: {
      bgColor: "#f5f5f5",
      direction: "ltr",
    },
    title: {
      label: "Need Answers?",
    },
    description: {
      content:
        "Browse through our frequently asked questions or reach out to our friendly support team for personalized assistance.",
    },
    questions: defaultQuestions,
    cta: {
      label: "Talk to Us",
      bgColor: "#141414",
      textColor: "#ffffff",
      borderColor: "#141414",
    },
  },
};

/**
 * Brand colored background.
 */
export const BrandBackground: Story = {
  args: {
    config: {
      bgColor: "#fef3c7",
      direction: "ltr",
    },
    title: {
      label: "Have Questions?",
    },
    description: {
      content:
        "We believe in transparency and want to make sure you have all the information you need to make informed decisions.",
    },
    questions: defaultQuestions,
    cta: {
      label: "Ask a Question",
      bgColor: "#692e0e",
      textColor: "#ffffff",
      borderColor: "#692e0e",
    },
  },
};

/**
 * Many questions (6 items).
 */
export const ManyQuestions: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
      direction: "ltr",
    },
    title: {
      label: "Everything You Need to Know",
    },
    description: {
      content:
        "We've answered the most common questions here. Still have questions? Our support team is ready to help.",
    },
    questions: [
      ...defaultQuestions,
      {
        question: "Do you offer refunds?",
        answer:
          "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, we'll refund your payment.",
      },
      {
        question: "How secure is my data?",
        answer:
          "We use industry-standard encryption and security practices to protect your data. Your information is stored securely and never shared.",
      },
      {
        question: "Can I upgrade my plan?",
        answer:
          "Absolutely! You can upgrade your plan at any time. The new features will be available immediately.",
      },
    ],
    cta: {
      label: "Contact Support",
      bgColor: "#692e0e",
      textColor: "#ffffff",
      borderColor: "#692e0e",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "FAQ section with many questions to demonstrate scrolling accordion behavior.",
      },
    },
  },
};

/**
 * Outline button style.
 */
export const OutlineButton: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
      direction: "ltr",
    },
    title: {
      label: "Questions & Answers",
    },
    description: {
      content:
        "Find quick answers to common questions about our platform, pricing, and support options.",
    },
    questions: defaultQuestions,
    cta: {
      label: "Learn More",
      bgColor: "#ffffff",
      textColor: "#692e0e",
      borderColor: "#692e0e",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Outline button style with transparent background and colored border.",
      },
    },
  },
};

/**
 * Mobile viewport simulation.
 * Container constrained to 375px to show mobile layout.
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
        story: "Shows the mobile layout with single column, stacked vertically.",
      },
    },
  },
};

/**
 * Tablet viewport simulation.
 * Container at 768px.
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
        story: "Shows the tablet layout at 768px (@3xl breakpoint) with two columns.",
      },
    },
  },
};
