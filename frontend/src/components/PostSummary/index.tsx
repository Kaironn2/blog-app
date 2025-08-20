import { PostHeading } from '../PostHeading';
import { PostDate } from '../PostDate';

type PostSumaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSumary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSumaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <PostDate dateTime={createdAt} />

      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>

      <p className="text-justify">{excerpt}</p>
    </div>
  );
}
