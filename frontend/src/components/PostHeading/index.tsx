import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({
  children,
  url,
  as: TitleTag = 'h2',
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'text-2xl/tight mb-4 sm:text-4xl font-extrabold',
    h2: 'text-2xl/tight mb-4 sm:text-2xl font-bold',
  };
  const headingClasses = headingClassesMap[TitleTag];
  const commomClasses = '';
  const classes = clsx(headingClasses, commomClasses);

  return (
    <TitleTag className={classes}>
      <Link className="hover:text-blue-500 transition" href={url}>
        {children}
      </Link>
    </TitleTag>
  );
}
