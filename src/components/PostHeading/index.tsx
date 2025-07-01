import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

const PostHeading = ({ children, url, as: Tag = 'h2' }: PostHeadingProps) => {
  const headingClassesMap = {
    h1: 'text-2xl/tight sm:text-4xl/tight',
    h2: 'text-2xl/tight sm:text-4xl/tight',
  };

  const commonClasses = 'font-extrabold';

  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
};

export default PostHeading;
