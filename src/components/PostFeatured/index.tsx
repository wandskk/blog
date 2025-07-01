import React from 'react';
import PostCoverImage from '@/components/PostCoverImage';
import PostSummary from '@/components/PostSummary';
import { findAllPublicPosts } from '@/lib/post/queries';

const PostFeatured = async () => {
  const posts = await findAllPublicPosts();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 720,
          src: post.coverImageUrl,
          alt: post.title,
          priority: true,
        }}
      />

      <PostSummary
        postHeading='h1'
        postLink={postLink}
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
      />
    </section>
  );
};

export default PostFeatured;
