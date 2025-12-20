/**
 * Page Builder - Create Page
 *
 * This page renders the page builder for creating new landing pages.
 */

import { PageBuilder } from "@/components/page-builder/builder";
import type { PageDocument } from "@/lib/page-builder/types";

export default function CreatePageBuilderPage() {
  // Create a new empty page document
  const newPage: PageDocument = {
    id: crypto.randomUUID(),
    organizationId: "org_demo", // TODO: Get from auth context
    name: "Landing page",
    slug: "landing",
    components: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return <PageBuilder initialPage={newPage} />;
}
