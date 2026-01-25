/**
 * FAQ1 Stories
 *
 * Simple accordion FAQ with title at top, full-width accordion items below.
 * Clean and minimal design with expand/collapse functionality.
 *
 * Key features:
 * - Configurable background color
 * - Accordion with expand/collapse functionality
 * - Responsive text sizing
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Faq1 } from "./Faq1";

const meta = {
  title: "PageBuilder/Components/Faq1",
  component: Faq1,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A simple accordion FAQ component with title and collapsible items.

## Features

- **Background Color**: Customizable section background
- **Title**: Centered heading with responsive sizing
- **Accordion**: Collapsible FAQ items with smooth animations
- **Clean Design**: Minimal styling with border separators

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.

| Container Width | Layout |
|-----------------|--------|
| < 768px | Smaller text, mobile padding |
| ≥ 768px (@3xl) | Larger text, increased padding |
| ≥ 1024px (@5xl) | Maximum text size |

## Props Structure

\`\`\`typescript
type Faq1Props = {
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
} satisfies Meta<typeof Faq1>;

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
      label: "Frequently Asked Questions",
    },
    questions: [
      {
        question: "What services do you offer?",
        answer:
          "We offer a comprehensive range of services including web development, mobile app development, UI/UX design, and digital marketing solutions tailored to your business needs.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
      },
      {
        question: "Do you offer ongoing support?",
        answer:
          "Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally after launch.",
      },
      {
        question: "What is your pricing structure?",
        answer:
          "Our pricing is project-based and depends on the scope of work. We provide detailed quotes after understanding your requirements. Contact us for a free consultation and estimate.",
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
      label: "Common Questions",
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
      label: "Got Questions? We Have Answers",
    },
    questions: Default.args.questions,
  },
};

/**
 * Many questions (8 items).
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
        story: "FAQ section with many questions to demonstrate scrolling accordion behavior.",
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
