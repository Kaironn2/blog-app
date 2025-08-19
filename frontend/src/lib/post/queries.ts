import { postRepository } from '@/repositories/post/api-post-repository';
import { cache } from 'react';

export const findAllPublicPosts = cache(async () => {
  return await postRepository.findAllPublished();
});
