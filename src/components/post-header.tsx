import React from 'react';
import { Box, Flex, FlexProps } from 'rebass/styled-components';
import { Post } from '../interfaces';
import { Avatar } from './avatar';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';
import { PostTitle } from './post-title';

export type PostHeaderProps = Omit<Post, 'ogImage' | 'slug' | 'content'> & FlexProps;

export const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  coverImage,
  date,
  author,
  ...props
}) => (
  <Flex flexDirection="column" {...props}>
    <PostTitle mb={4}>{title}</PostTitle>
    <Box display={['none', 'block', 'block']} mb={4}>
      <Avatar mb={3} name={author.name} picture={author.picture} />
    </Box>
    <Box mb={[4, 5, 5]}>
      <CoverImage src={coverImage} title={title} />
    </Box>
    <Box>
      <Box display={['block', 'none', 'none']} mb={3}>
        <Avatar mb={3} name={author.name} picture={author.picture} />
      </Box>
      <Box>
        <DateFormatter dateString={date} />
      </Box>
    </Box>
  </Flex>
);
