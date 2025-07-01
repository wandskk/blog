import Container from '@/components/Container';
import Header from '@/components/Header';
import PostHeading from '@/components/PostHeading';
import PostsList from '@/components/PostsList';
import SpinLoader from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';

const HomePage = async () => {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='group-hover:scale-105 transition w-full h-full object-cover object-center'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
            priority
          />
        </Link>
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-07-01'
          >
            01/07/2025 10:00
          </time>

          <PostHeading url='#' as='h1'>
            Lorem ipsum dolor sit amet consectetur
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            itaque, tenetur nihil ipsa ab repellat. Fugit nesciunt nam libero
            placeat deserunt est id quia sit! Repellat est porro quis. Quas.
          </p>
        </div>
      </section>

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
