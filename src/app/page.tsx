import PostFeatured from '@/components/PostFeatured';
import PostsList from '@/components/PostsList';
import SpinLoader from '@/components/SpinLoader';
import React, { Suspense } from 'react';

const HomePage = async () => {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  );
};

export default HomePage;
