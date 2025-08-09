const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export const apiRoutes = {
  posts: `${API_BASE_URL}/posts/`,
  authors: `${API_BASE_URL}/authors/`,
  categories: `${API_BASE_URL}/categories/`,
};
