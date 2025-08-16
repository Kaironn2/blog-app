import { PostModel } from "@/models/post/post-model";
import { postRepository } from "@/repositories/post/api-post-repository";

export async function PostsList() {
  const posts: PostModel[] = await postRepository.findAll();

  return (
    <div>
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
