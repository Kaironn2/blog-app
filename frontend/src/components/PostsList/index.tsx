import { PostModel } from '@/models/post/post-model';
import { postRepository } from '@/repositories/post/api-post-repository';
import { PostCoverImage } from '../PostCoverImage';
import { apiRoutes } from '@/config/api';
import { PostHeading } from '../PostHeading';
import clsx from 'clsx';
import { formatDatetime, formatRelativeDate } from '@/helpers/format-datetime';

export async function PostsList() {
  const posts: PostModel[] = (await postRepository.findAll()).slice(1);

  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-8',
        'sm:grid-cols-2',
        'lg:grid-cols-3'
      )}
    >
      {posts.map((post) => {
        const postLink = `${apiRoutes.posts}/${post.slug}`;

        return (
          <div className="flex flex-col gap-8" key={post.id}>
            <PostCoverImage
              href={postLink}
              alt={post.title}
              src={post.coverImageUrl}
            />

            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                dateTime={post.createdAt}
                className="text-slate-600 text-sm/tight"
                title={formatRelativeDate(post.createdAt)}
              >
                {formatDatetime(post.createdAt)}
              </time>

              <PostHeading url={postLink} as="h2">
                {post.title}
              </PostHeading>

              <p className="text-justify">{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
