import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

const PostCoverImage = ({ linkProps, imageProps }: PostCoverImageProps) => {
  return (
    <Link
      className={clsx(
        'w-full',
        'h-full',
        'overflow-hidden',
        'rounded-xl',
        linkProps.className,
      )}
      {...linkProps}
    >
      <Image
        {...imageProps}
        alt={imageProps.alt}
        className={clsx(
          'group-hover:scale-105',
          'transition',
          'w-full',
          'h-full',
          'object-cover',
          'object-center',
          imageProps.className,
        )}
      />
    </Link>
  );
};

export default PostCoverImage;
