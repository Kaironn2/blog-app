import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { PostApiDto } from "@/models/post/post-api-dto";
import { API_ROUTES as apiRoutes } from "@/config/api";

export class ApiPostRepository implements PostRepository {
    private apiUrl = apiRoutes.posts

    async findAll(): Promise<PostModel[]> {
        const response = await fetch(this.apiUrl)
        if (!response.ok) throw new Error('Failed to fetch posts')
        
        const data = await response.json()

        return data.map((postFromApi: PostApiDto) => ({
            id: postFromApi.id,
            title: postFromApi.title,
            excerpt: postFromApi.excerpt,
            content: postFromApi.content,
            slug: postFromApi.slug,
            author: postFromApi.author,
            coverImageUrl: postFromApi.cover_image,
            published: postFromApi.published,
            category: postFromApi.category,
            createdAt: postFromApi.created_at,
            updatedAt: postFromApi.updated_at,
        }))
    }
}