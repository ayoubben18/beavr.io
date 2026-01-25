/**
 * ============================================================================
 * FAQ COMPONENT SCHEMAS
 * ============================================================================
 *
 * Schema definitions for all FAQ component variants.
 * These schemas drive the sidebar editor UI generation.
 */

import type { ComponentSchema } from "../types";
import type { Faq1Props, Faq2Props, Faq3Props } from "../component-props";

// ============================================================================
// SHARED FIELD DEFINITIONS
// ============================================================================

/**
 * FAQ questions array group for all FAQ variants.
 */
const questionsArrayGroup = {
  kind: "array" as const,
  label: "Questions",
  collapsible: true,
  itemLabel: "Question",
  minItems: 1,
  maxItems: 20,
  addLabel: "Add question",
  itemFields: {
    question: {
      type: "text" as const,
      label: "Question",
      placeholder: "Enter the question...",
    },
    answer: {
      type: "textarea" as const,
      label: "Answer",
      placeholder: "Enter the answer...",
    },
  },
};

// ============================================================================
// FAQ 1
// ============================================================================

/**
 * FAQ 1 Schema
 *
 * Simple accordion FAQ with title at top, full-width accordion items below.
 * Clean and minimal design with expand/collapse functionality.
 */
export const faq1Schema: ComponentSchema<Faq1Props> = {
  type: "faq",
  variant: 1,
  label: "FAQ 1",
  thumbnail: "/thumbnails/faq-1.png",

  groups: {
    config: {
      kind: "group",
      label: "Style",
      collapsible: true,
      fields: {
        bgColor: {
          type: "color",
          label: "Background",
        },
      },
    },

    title: {
      kind: "group",
      label: "Title",
      collapsible: true,
      fields: {
        label: {
          type: "text",
          label: "Text",
          placeholder: "Enter title...",
        },
      },
    },

    questions: questionsArrayGroup,
  },

  defaults: {
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

// ============================================================================
// FAQ 2
// ============================================================================

/**
 * FAQ 2 Schema
 *
 * 2-column layout with title/description/CTA on one side,
 * accordion FAQ items on the other. Supports LTR/RTL direction.
 */
export const faq2Schema: ComponentSchema<Faq2Props> = {
  type: "faq",
  variant: 2,
  label: "FAQ 2",
  thumbnail: "/thumbnails/faq-2.png",

  groups: {
    config: {
      kind: "group",
      label: "Style",
      collapsible: true,
      fields: {
        bgColor: {
          type: "color",
          label: "Background",
        },
        direction: {
          type: "direction",
          label: "Layout",
        },
      },
    },

    title: {
      kind: "group",
      label: "Title",
      collapsible: true,
      fields: {
        label: {
          type: "text",
          label: "Text",
          placeholder: "Enter title...",
        },
      },
    },

    description: {
      kind: "group",
      label: "Description",
      collapsible: true,
      fields: {
        content: {
          type: "textarea",
          label: "Text",
          placeholder: "Enter description...",
        },
      },
    },

    questions: questionsArrayGroup,

    cta: {
      kind: "group",
      label: "Button",
      collapsible: true,
      fields: {
        label: {
          type: "text",
          label: "Text",
          placeholder: "Button text",
        },
        bgColor: {
          type: "color",
          label: "Background",
        },
        textColor: {
          type: "color",
          label: "Text Color",
        },
        borderColor: {
          type: "color",
          label: "Border",
        },
      },
    },
  },

  defaults: {
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
    questions: [
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
    ],
    cta: {
      label: "Contact Support",
      bgColor: "#692e0e",
      textColor: "#ffffff",
      borderColor: "#692e0e",
    },
  },
};

// ============================================================================
// FAQ 3
// ============================================================================

/**
 * FAQ 3 Schema
 *
 * Title centered, 2-column grid of Q&A items (not accordion).
 * Questions and answers are always visible - no expand/collapse.
 */
export const faq3Schema: ComponentSchema<Faq3Props> = {
  type: "faq",
  variant: 3,
  label: "FAQ 3",
  thumbnail: "/thumbnails/faq-3.png",

  groups: {
    config: {
      kind: "group",
      label: "Style",
      collapsible: true,
      fields: {
        bgColor: {
          type: "color",
          label: "Background",
        },
      },
    },

    title: {
      kind: "group",
      label: "Title",
      collapsible: true,
      fields: {
        label: {
          type: "text",
          label: "Text",
          placeholder: "Enter title...",
        },
      },
    },

    questions: questionsArrayGroup,
  },

  defaults: {
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

// ============================================================================
// FAQ 4
// ============================================================================

/**
 * FAQ 4 Schema
 *
 * Title at top, simple rows with question/answer separated by borders.
 * Clean rows with question bold, answer muted, border separators.
 */
export const faq4Schema: ComponentSchema<Faq1Props> = {
  type: "faq",
  variant: 4,
  label: "FAQ 4",
  thumbnail: "/thumbnails/faq-4.png",

  groups: {
    config: {
      kind: "group",
      label: "Style",
      collapsible: true,
      fields: {
        bgColor: {
          type: "color",
          label: "Background",
        },
      },
    },

    title: {
      kind: "group",
      label: "Title",
      collapsible: true,
      fields: {
        label: {
          type: "text",
          label: "Text",
          placeholder: "Enter title...",
        },
      },
    },

    questions: questionsArrayGroup,
  },

  defaults: {
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
