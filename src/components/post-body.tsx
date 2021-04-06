import React from 'react';
import { Box, BoxProps } from 'rebass/styled-components';
import styled from 'styled-components';

export interface PostBodyProps extends BoxProps {
  content: string;
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
`;

export const PostBody: React.FC<PostBodyProps> = ({ content, ...props }) => (
  <PostBodyContainer {...props}>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </PostBodyContainer>
);
