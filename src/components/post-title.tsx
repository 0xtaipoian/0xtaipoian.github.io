import React from 'react';
import { Heading, HeadingProps } from 'rebass/styled-components';

export const PostTitle: React.FC<HeadingProps> = ({ children, ...props }) => (
  <Heading
    as="h1"
    fontSize={[6, 7, 8]}
    sx={{
      letterSpacing: '-.04em',
    }}
    textAlign={['center', 'left', 'left']}
    {...props}
  >
    {children}
  </Heading>
);
