import React from 'react';
import Posted from '../posted/Posted';

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Posted key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
