import { PostModel } from '@/models/post/post-model';

export interface PostRepository {
  findAllPublished(): Promise<PostModel[]>;
}
