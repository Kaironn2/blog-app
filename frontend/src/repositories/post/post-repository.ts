import { PostQueryParams } from '@/config/mount-posts-url';
import { PostModel } from '@/models/post/post-model';

export interface PostRepository {
  findAll(params: PostQueryParams): Promise<PostModel[]>;
  findAllPublished(): Promise<PostModel[]>;
  findBySlug(slug: string): Promise<PostModel>;
}
