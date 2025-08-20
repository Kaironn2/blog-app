import { PostModel } from '@/models/post/post-model';
import { PostCoverImage } from '../PostCoverImage';
import { apiRoutes } from '@/config/api';
import { PostSumary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries';

export async function FeaturedPost() {
  const post = (await findAllPublicPostsCached())[0];
  const postLink = `post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        alt={post.title}
        href={postLink}
        src={post.coverImageUrl}
      />

      <PostSumary
        postLink={postLink}
        postHeading="h2"
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        title={post.title}
      />
    </section>
  );
}
