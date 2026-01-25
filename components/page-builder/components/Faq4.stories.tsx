/**
 * FAQ4 Stories
 *
 * Title at top, simple rows with question/answer separated by borders.
 * Clean rows with question bold, answer muted, border separators.
 *
 * Key features:
 * - Configurable background color
 * - Clean bordered rows layout
 * - Question bold, answer muted styling
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Faq4 } from "./Faq4";

const meta = {
  title: "PageBuilder/Components/Faq4",
  component: Faq4,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A simple FAQ component with bordered rows and clean styling.

## Features

- **Background Color**: Customizable section background
- **Title**: Centered heading with responsive sizing
- **Bordered Rows**: Questions separated by horizontal borders
- **Clean Typography**: Question bold, answer in muted color

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.

| Container Width | Layout |
|-----------------|--------|
| < 768px | Smaller text, mobile padding |
| ≥ 768px (@3xl) | Larger text, increased padding |
| ≥ 1024px (@5xl) | Maximum text size |

## Props Structure

\`\`\`typescript
type Faq4Props = {
  config: {
    bgColor: HexColor;
  };
  title: {
    label: string;
  };
  questions: Array<{
    question: string;
    answer: string;
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
} satisfies Meta<typeof Faq4>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default FAQ with 4 questions.
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Questions & Answers",
    },
    questions: [
      {
        question: "Is there a free trial available?",
        answer:
          "Yes, we offer a 14-day free trial with full access to all features. No credit card required.",
      },
      {
        question: "How secure is my data?",
        answer:
          "We use industry-standard encryption and security practices to protect your data. Your information is never shared with third parties.",
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer:
          "Yes, you can change your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
      },
      {
        question: "Do you offer team plans?",
        answer:
          "Yes, we have team and enterprise plans with additional features like shared workspaces, admin controls, and priority support.",
      },
    ],
  },
};

/**
 * Gray background variant.
 */
export const GrayBackground: Story = {
  args: {
    config: {
      bgColor: "#f5f5f5",
    },
    title: {
      label: "Frequently Asked Questions",
    },
    questions: Default.args.questions,
  },
};

/**
 * Brand colored background.
 */
export const BrandBackground: Story = {
  args: {
    config: {
      bgColor: "#fef3c7",
    },
    title: {
      label: "Got Questions?",
    },
    questions: Default.args.questions,
  },
};

/**
 * Many questions (6 items).
 */
export const ManyQuestions: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Everything You Need to Know",
    },
    questions: [
      {
        question: "What services do you offer?",
        answer: "We offer web development, mobile app development, and UI/UX design services.",
      },
      {
        question: "How long does a project take?",
        answer: "Timelines vary from 2 weeks for simple projects to 6 months for complex ones.",
      },
      {
        question: "Do you offer support?",
        answer: "Yes, we have various support and maintenance packages available.",
      },
      {
        question: "What is your pricing?",
        answer: "Our pricing is project-based. Contact us for a free quote.",
      },
      {
        question: "Do you work with startups?",
        answer: "Absolutely! We love working with startups and have special packages for them.",
      },
      {
        question: "How do I get started?",
        answer: "Simply reach out through our contact form or schedule a free consultation.",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "FAQ section with 6 questions to show the bordered rows pattern.",
      },
    },
  },
};

/**
 * Single question.
 */
export const SingleQuestion: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Quick Answer",
    },
    questions: [
      {
        question: "How do I contact support?",
        answer:
          "You can reach our support team via email at support@example.com, through our live chat on the website, or by calling our helpline at 1-800-SUPPORT during business hours.",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal FAQ with just one question-answer pair.",
      },
    },
  },
};

/**
 * Two questions.
 */
export const TwoQuestions: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Common Questions",
    },
    questions: [
      {
        question: "What is your refund policy?",
        answer:
          "We offer a full refund within 30 days of purchase if you're not satisfied with our service.",
      },
      {
        question: "Do you offer custom solutions?",
        answer:
          "Yes, we can customize our solutions to meet your specific needs. Contact us to discuss your requirements.",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "FAQ with 2 questions showing the border between items.",
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
        story: "Shows the mobile layout with smaller text and reduced padding.",
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
        story: "Shows the tablet layout at 768px (@3xl breakpoint).",
      },
    },
  },
};
