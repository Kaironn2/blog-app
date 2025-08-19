import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { PostReadApiDto } from '@/models/post/post-api-dto';
import { apiRoutes } from '@/config/api';
import { mountPostsUrl, PostQueryParams } from '@/config/mount-posts-url';
import axios from 'axios';

export class ApiPostRepository implements PostRepository {
  private mapPost(postFromApi: PostReadApiDto): PostModel {
    return {
      id: postFromApi.id,
      title: postFromApi.title,
      excerpt: postFromApi.excerpt,
      content: postFromApi.content,
      slug: postFromApi.slug,
      author: postFromApi.author.username,
      coverImageUrl: postFromApi.cover_image,
      published: postFromApi.published,
      category: postFromApi.category?.name,
      createdAt: postFromApi.created_at,
      updatedAt: postFromApi.updated_at,
    };
  }

  async findAll(params: PostQueryParams): Promise<PostModel[]> {
    const url = mountPostsUrl(params);
    const { data } = await axios.get<PostReadApiDto[]>(url);
    return data.map(this.mapPost);
  }

  async findAllPublished(): Promise<PostModel[]> {
    return this.findAll({ published: true });
  }
}

export const postRepository = new ApiPostRepository();
