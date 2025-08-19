import { apiRoutes } from './api';

export type PostQueryParams = {
  published?: boolean;
  category?: string;
  author?: number;
  title?: string;
  created_after?: string;
  created_before?: string;
};

export function mountPostsUrl(params?: PostQueryParams) {
  const baseUrl = apiRoutes.posts;
  const searchParams = new URLSearchParams();

  if (params?.published !== undefined) {
    searchParams.set('published', String(params.published));
  }

  if (params?.category) {
    searchParams.set('category', String(params.category));
  }

  if (params?.author !== undefined) {
    searchParams.set('author', String(params.author));
  }

  if (params?.title) {
    searchParams.set('title', String(params.title));
  }

  if (params?.created_after) {
    searchParams.set('created_after', String(params.created_after));
  }

  if (params?.created_before) {
    searchParams.set('created_before', String(params.created_before));
  }

  return searchParams.toString()
    ? `${baseUrl}?${searchParams.toString()}`
    : baseUrl;
}
