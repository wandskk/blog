import { postRepository } from '@/repositories/post';
import React from 'react';

const PostsList = async () => {
  const posts = await postRepository.findAll();

  return (
    <div>
      {posts.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default PostsList;
