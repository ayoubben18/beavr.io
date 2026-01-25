/**
 * FAQ3 Stories
 *
 * Title centered at top, 2-column grid of Q&A items (not accordion).
 * Questions and answers are always visible - no expand/collapse.
 *
 * Key features:
 * - Configurable background color
 * - 2-column grid layout on larger screens
 * - Always visible answers (no accordion)
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Faq3 } from "./Faq3";

const meta = {
  title: "PageBuilder/Components/Faq3",
  component: Faq3,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A grid-based FAQ component with title and always-visible Q&A items.

## Features

- **Background Color**: Customizable section background
- **Title**: Centered heading with responsive sizing
- **Grid Layout**: 2-column grid on larger screens
- **Always Visible**: Questions and answers always shown (no accordion)

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.

| Container Width | Layout |
|-----------------|--------|
| < 768px | Single column, smaller text |
| ≥ 768px (@3xl) | 2-column grid, larger text |
| ≥ 1024px (@5xl) | Maximum text size |

## Props Structure

\`\`\`typescript
type Faq3Props = {
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
} satisfies Meta<typeof Faq3>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default FAQ with 6 questions in a 2-column grid.
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Common Questions",
    },
    questions: [
      {
        question: "What makes you different?",
        answer:
          "Our unique approach combines cutting-edge technology with personalized service, ensuring solutions that truly fit your needs.",
      },
      {
        question: "Do you work with small businesses?",
        answer:
          "Absolutely! We work with businesses of all sizes, from startups to enterprise companies.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We serve a wide range of industries including healthcare, finance, e-commerce, education, and more.",
      },
      {
        question: "How do you ensure quality?",
        answer:
          "We follow rigorous quality assurance processes including code reviews, testing, and client feedback at every stage.",
      },
      {
        question: "Can I see examples of your work?",
        answer:
          "Yes! Visit our portfolio page to see case studies and examples of our past projects.",
      },
      {
        question: "What if I need changes after launch?",
        answer:
          "We offer revision periods and ongoing maintenance packages to accommodate post-launch changes and updates.",
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
      label: "Have Questions? Here Are the Answers",
    },
    questions: Default.args.questions,
  },
};

/**
 * Four questions (even grid).
 */
export const FourQuestions: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Quick Answers",
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
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "FAQ with 4 questions showing an even 2x2 grid layout.",
      },
    },
  },
};

/**
 * Many questions (8 items) showing grid flexibility.
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
        question: "Can I see your portfolio?",
        answer: "Yes, visit our portfolio page or request a detailed case study.",
      },
      {
        question: "What technologies do you use?",
        answer: "We use modern technologies including React, Next.js, Node.js, and more.",
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
        story: "FAQ section with 8 questions in a 2-column grid layout.",
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
        story: "Minimal FAQ with just one question-answer pair spanning full width.",
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
        story: "Shows the mobile layout with single column and smaller text.",
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
        story: "Shows the tablet layout at 768px with 2-column grid.",
      },
    },
  },
};
