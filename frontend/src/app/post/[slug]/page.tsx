import { SinglePost } from '@/components/SinglePost';
import { findPostBySlugCached } from '@/lib/post/queries';
import { Metadata } from 'next';

type PostSlugPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return (
    <>
      <SinglePost slug={post.slug} />
    </>
  );
}
