import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { PostReadApiDto } from "@/models/post/post-api-dto";
import { apiRoutes } from "@/config/api";
import axios from "axios";

export class ApiPostRepository implements PostRepository {
  private apiUrl = apiRoutes.posts;

  async findAll(): Promise<PostModel[]> {
    try {
      const { data } = await axios.get<PostReadApiDto[]>(this.apiUrl);

      return data.map((postFromApi: PostReadApiDto) => ({
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
      }));
    } catch (error) {
      throw new Error("Failed to fetch posts");
    }
  }
}
