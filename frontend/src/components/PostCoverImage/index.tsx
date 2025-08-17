import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type PostCoverImageProps = {
  alt: string;
  href: string;
  src: string;
  extraLinkClasses?: string;
  extraImageClasses?: string;
};

export function PostCoverImage({
  alt,
  href,
  src,
  extraLinkClasses,
  extraImageClasses,
}: PostCoverImageProps) {
  const linkClasses = clsx(
    'w-full overflow-hidden rounded-xl aspect-[16/9] relative group',
    extraLinkClasses
  );
  const imageClasses = clsx(
    'object-cover object-center group-hover:scale-105 transition',
    extraImageClasses
  );

  return (
    <Link href={href} className={linkClasses}>
      <Image
        className={imageClasses}
        src={src}
        width={1200}
        height={720}
        alt={alt}
      ></Image>
    </Link>
  );
}
