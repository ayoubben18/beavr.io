"use client";

import { pagesService } from "@/lib/services/pages";
import type {
  CreatePageSchema,
  GetPagesSchema,
  UpdatePageSchema,
} from "@/types/api/pages";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Query keys
const pagesKeys = {
  all: ["pages"] as const,
  lists: () => [...pagesKeys.all, "list"] as const,
  list: (params: any) => [...pagesKeys.lists(), params] as const,
  details: () => [...pagesKeys.all, "detail"] as const,
  detail: (id: string) => [...pagesKeys.details(), id] as const,
};

export function usePages(searchParams: GetPagesSchema) {
  return useQuery({
    queryKey: pagesKeys.list(searchParams),
    queryFn: () => pagesService.getPages(searchParams),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function usePage(id: string) {
  return useQuery({
    queryKey: pagesKeys.detail(id),
    queryFn: () => pagesService.getPage(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!id,
  });
}

export function useCreatePage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreatePageSchema) => pagesService.createPage(data),
    onSuccess: () => {
      // Invalidate and refetch pages list
      queryClient.invalidateQueries({ queryKey: pagesKeys.lists() });
    },
  });
}

export function useUpdatePage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdatePageSchema }) =>
      pagesService.updatePage(id, data),
    onSuccess: (_, variables) => {
      // Invalidate and refetch pages list and the specific page
      queryClient.invalidateQueries({ queryKey: pagesKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: pagesKeys.detail(variables.id),
      });
    },
  });
}

export function useDeletePage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => pagesService.deletePage(id),
    onSuccess: (_, id) => {
      // Invalidate and refetch pages list and remove the specific page from cache
      queryClient.invalidateQueries({ queryKey: pagesKeys.lists() });
      queryClient.removeQueries({ queryKey: pagesKeys.detail(id) });
    },
  });
}
