import { PostModel } from '@/models/post/post-model';
import { PostCoverImage } from '../PostCoverImage';
import { apiRoutes } from '@/config/api';
import clsx from 'clsx';
import { PostSumary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries';

export async function PostsList() {
  const posts = (await findAllPublicPostsCached()).slice(1);
  console.log(`POSTS -> ${posts}`);
  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-8 mb-16',
        'sm:grid-cols-2',
        'lg:grid-cols-3'
      )}
    >
      {posts.map((post) => {
        const postLink = `post/${post.slug}`;

        return (
          <div className="flex flex-col gap-8" key={post.id}>
            <PostCoverImage
              href={postLink}
              alt={post.title}
              src={post.coverImageUrl}
            />

            <PostSumary
              postLink={postLink}
              postHeading="h2"
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
}
