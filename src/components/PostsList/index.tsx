import React from 'react';
import PostCoverImage from '@/components/PostCoverImage';
import PostSummary from '@/components/PostSummary';
import { findAllPublicPosts } from '@/lib/post/queries';

const PostsList = async () => {
  const posts = await findAllPublicPosts();

  return (
    <section className='grid grid-cols-1 mb-16 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {posts.slice(1).map(post => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className='flex flex-col gap-4 group' key={post.id}>
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />

            <PostSummary
              postHeading='h2'
              postLink={postLink}
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </section>
  );
};

export default PostsList;
