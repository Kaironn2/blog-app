import { findPostBySlugCached } from '@/lib/post/queries';
import { Suspense } from 'react';
import { SpinLoader } from '../SpinLoader';
import Image from 'next/image';
import { PostHeading } from '../PostHeading';
import { PostDate } from '../PostDate';

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);
  return (
    <Suspense fallback={<SpinLoader />}>
      <article className="mb-16">
        <header className="group flex flex-col gap-4 mb-4">
          <Image
            className="rounded-xl"
            src={post.coverImageUrl}
            width={1200}
            height={720}
            alt={post.title}
          />

          <PostHeading>{post.title}</PostHeading>

          <p>
            {post.author} | <PostDate dateTime={post.createdAt} />
          </p>
        </header>

        <p className="mb-4 text-xl text-slate-600 font-extrabold">
          {post.excerpt}
        </p>

        <div>{post.content}</div>
      </article>
    </Suspense>
  );
}
