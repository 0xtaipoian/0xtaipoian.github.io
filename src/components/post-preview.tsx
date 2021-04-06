import Link from 'next/link';
import React from 'react';
import { Box, BoxProps, Heading, Text } from 'rebass/styled-components';
import { Author } from '../interfaces';
import { Avatar } from './avatar';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';

export interface PostPreviewProps extends BoxProps {
  excerpt: string;
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  slug: string;
}

export const PostPreview: React.FC<PostPreviewProps> = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  ...props
}) => (
  <Box {...props}>
    <CoverImage mb={3} slug={slug} src={coverImage} title={title} />
    <Heading as="h3" fontSize={5} fontWeight="normal" lineHeight="tight" mb={3}>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>{title}</a>
      </Link>
    </Heading>
    <DateFormatter dateString={date} mb={3} />
    <Text lineHeight="relaxed" mb={3}>
      {excerpt}
    </Text>
    <Avatar name={author.name} picture={author.picture} />
  </Box>
);
