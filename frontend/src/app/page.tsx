import { Container } from '@/components/Container';
import { FeaturedPost } from '@/components/FeaturedPost';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <Container>
      <Header />

      <FeaturedPost />

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </Container>
  );
}
