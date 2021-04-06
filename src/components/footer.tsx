import React from 'react';
import { Box, BoxProps, Flex, Heading } from 'rebass/styled-components';
import { Container } from './container';

export const Footer: React.FC<BoxProps> = () => (
  <Box
    as="footer"
    backgroundColor="#fcfcfc"
    sx={{
      borderTop: '1px solid #efefef',
    }}
  >
    <Container>
      <Flex
        alignContent="center"
        flexDirection={['column', 'row', 'row']}
        justifyContent="center"
        py={5}
      >
        <Heading
          as="h3"
          fontSize={5}
          pr={[0, 3, 3]}
          textAlign="center"
          width={['100%', '50%', '50%']}
        >
          Statically Generated with Next.js.
        </Heading>
        <Box pl={[0, 3, 3]} textAlign="center" width={['100%', '50%', '50%']}>
          <a href="https://nextjs.org/docs/basic-features/pages">Read Documentation</a>
        </Box>
      </Flex>
    </Container>
  </Box>
);
