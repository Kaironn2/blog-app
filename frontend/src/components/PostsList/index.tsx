import { PostModel } from '@/models/post/post-model';
import { postRepository } from '@/repositories/post/api-post-repository';
import { PostCoverImage } from '../PostCoverImage';
import { apiRoutes } from '@/config/api';
import { PostHeading } from '../PostHeading';
import clsx from 'clsx';

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
              >
                {new Date(post.createdAt).toLocaleString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })}
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
