import { PostModel } from '@/models/post/post-model';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { apiRoutes } from '@/config/api';

type FeaturedPostProps = {
  post: PostModel;
};

export function FeaturedPost({ post }: FeaturedPostProps) {
  const postLink = `${apiRoutes.posts}/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        alt={post.title}
        href={postLink}
        src={post.coverImageUrl}
      />

      <div className="flex flex-col gap-4 sm:justify-center">
        <time dateTime="2025-08-16" className="text-slate-600 text-sm/tight">
          16/08/2025 04:54
        </time>

        <PostHeading url={postLink} as="h1">
          {post.title}
        </PostHeading>

        <p className="text-justify">{post.excerpt}</p>
      </div>
    </section>
  );
}
