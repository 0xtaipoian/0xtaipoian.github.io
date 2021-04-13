import React from 'react';
import { Box, BoxProps } from 'rebass/styled-components';
import styled from 'styled-components';
import { Tags } from './tags';

export interface PostBodyProps extends BoxProps {
  content: string;
  tags?: string[];
}

const PostBodyContainer = styled(Box)`
  line-height: 1.5;

  h2,
  h3 {
    font-weight: normal;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    margin-top: 3rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-top: 2.5rem;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: underline;
  }
`;

export const PostBody: React.FC<PostBodyProps> = ({ content, tags, ...props }) => (
  <PostBodyContainer {...props}>
    {/* eslint-disable-next-line react/no-danger */}
    <Box dangerouslySetInnerHTML={{ __html: content }} mb={[4, 5, 5]} />
    <Tags tags={tags} />
  </PostBodyContainer>
);
