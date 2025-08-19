import { formatDatetime, formatRelativeDate } from '@/helpers/format-datetime';
import { PostHeading } from '../PostHeading';

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
      <time
        dateTime={createdAt}
        className="text-slate-600 text-sm/tight"
        title={formatRelativeDate(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>

      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>

      <p className="text-justify">{excerpt}</p>
    </div>
  );
}
