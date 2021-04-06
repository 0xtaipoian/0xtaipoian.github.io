import React from 'react';
import { Flex, Heading } from 'rebass/styled-components';

export const Intro: React.FC = ({ ...props }) => (
  <Flex alignItems="center" as="section" flexDirection={['column', 'row', 'row']} my={4} {...props}>
    <Heading as="h1" fontSize={[6, 8, 8]} pr={[0, 4, 4]}>
      Blog.
    </Heading>
    <Heading
      as="h4"
      fontSize={3}
      fontWeight="normal"
      ml={[0, 0, 'auto']}
      mt={[3, 0, 0]}
      pl={[0, 4, 4]}
      textAlign={['center', 'right', 'right']}
    >
      A statically generated blog example using <a href="https://nextjs.org/">Next.js</a> and
      Forestry.io.
    </Heading>
  </Flex>
);
