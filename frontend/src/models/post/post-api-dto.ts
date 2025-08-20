import { AuthorApiDto } from '../author/author-api-dto';
import { CategoryApiDto } from '../category/category-api-dto';

export type PostReadApiDto = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author: AuthorApiDto;
  category?: CategoryApiDto;
  published: boolean;
  created_at: string;
  updated_at: string;
};
