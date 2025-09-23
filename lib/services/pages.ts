import { rpc } from "@/lib/rpc-client";
import type {
  GetPagesSchema,
  CreatePageSchema,
  UpdatePageSchema,
} from "@/types/api/pages";

export const pagesService = {
  getPages: async (params: GetPagesSchema) => {
    const response = await rpc.api.pages.$get({
      query: {
        page: params.page.toString(),
        perPage: params.perPage.toString(),
        search: params.search,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch pages");
    }

    return response.json();
  },

  getPage: async (id: string) => {
    const response = await rpc.api.pages[":id"].$get({
      param: { id },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch page");
    }

    return response.json();
  },

  createPage: async (data: CreatePageSchema) => {
    const response = await rpc.api.pages.$post({
      json: data,
    });

    if (!response.ok) {
      throw new Error("Failed to create page");
    }

    return response.json();
  },

  updatePage: async (id: string, data: UpdatePageSchema) => {
    const response = await rpc.api.pages[":id"].$patch({
      param: { id },
      json: data,
    });

    if (!response.ok) {
      throw new Error("Failed to update page");
    }

    return response.json();
  },

  deletePage: async (id: string) => {
    const response = await rpc.api.pages[":id"].$delete({
      param: { id },
    });

    if (!response.ok) {
      throw new Error("Failed to delete page");
    }

    return response.json();
  },
};
