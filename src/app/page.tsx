import Container from '@/components/Container';
import Header from '@/components/Header';
import PostsList from '@/components/PostsList';
import SpinLoader from '@/components/SpinLoader';
import React, { Suspense } from 'react';

const HomePage = async () => {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
};

export default HomePage;
