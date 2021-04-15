import Link from 'next/link';
import React from 'react';
import { Box, Flex, FlexProps, Heading, Text } from 'rebass/styled-components';
import { Avatar, DateFormatter } from '.';
import { Post } from '../interfaces';
import { CoverImage } from './cover-image';

export type HeroPostProps = Omit<Post, 'content'> & FlexProps;

export const HeroPost: React.FC<HeroPostProps> = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  ...props
}) => (
  <Flex as="section" mb={4} {...props} flexDirection="row" flexWrap="wrap">
    <Box mb={[3, 4]} width={[1, 1, 1, 2 / 3]}>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <CoverImage slug={slug} src={coverImage} title={title} />
        </a>
      </Link>
    </Box>
    <Box mb={[3, 4, 6]} pl={[0, 0, 4]} width={[1, 1, 1, 1 / 3]}>
      <Box>
        <Heading as="h3" fontSize={6} fontWeight="normal" lineHeight="tight" mb={3}>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>{title}</a>
          </Link>
        </Heading>
        <Box mb={3}>
          <DateFormatter dateString={date} fontSize={3} />
        </Box>
      </Box>
      <Box>
        <Text lineHeight="relaxed" mb={3}>
          {excerpt}
        </Text>
        <Avatar name={author.name} picture={author.picture} />
      </Box>
    </Box>
  </Flex>
);
