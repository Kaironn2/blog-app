export type PostModel = {
    id: string
    title: string
    slug: string | null
    excerpt: string
    content: string
    coverImageUrl: string
    published: boolean
    createdAt: string
    updatedAt: string
    author: string
    category?: string | null
}
