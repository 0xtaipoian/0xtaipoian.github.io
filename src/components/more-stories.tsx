import React from 'react';
import { Box, BoxProps, Heading } from 'rebass/styled-components';
import { Post } from '../interfaces';
import { PostPreview } from './post-preview';

export const MoreStories: React.FC<BoxProps & { posts: Post[] }> = ({ posts, ...props }) => (
  <Box as="section" {...props}>
    <Heading as="h2" fontSize={[6, 7, 7]} letterSpacing="tighter" mb={4}>
      More Stories
    </Heading>
    <Box
      mb={6}
      sx={{
        display: 'grid',
        gridRowGap: '5rem',
        rowGap: '5rem',
        columnGap: '4rem',
        gridColumnGap: '4rem',
        gridTemplateColumns: [
          'repeat(1,minmax(0,1fr))',
          'repeat(2,minmax(0,1fr))',
          'repeat(2,minmax(0,1fr))',
        ],
      }}
    >
      {posts.map(post => (
        <PostPreview
          key={post.slug}
          author={post.author}
          coverImage={post.coverImage}
          date={post.date}
          excerpt={post.excerpt}
          slug={post.slug}
          title={post.title}
        />
      ))}
    </Box>
  </Box>
);
