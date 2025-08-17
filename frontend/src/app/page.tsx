import { Container } from '@/components/Container';
import { FeaturedPost } from '@/components/FeaturedPost';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { PostModel } from '@/models/post/post-model';
import { postRepository } from '@/repositories/post/api-post-repository';
import { Suspense } from 'react';

export default async function Home() {
  const posts: PostModel[] = await postRepository.findAll();
  const featuredPost = posts[0];

  return (
    <Container>
      <Header />

      <FeaturedPost post={featuredPost} />

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </Container>
  );
}
