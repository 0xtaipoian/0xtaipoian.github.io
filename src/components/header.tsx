import Link from 'next/link';
import React from 'react';
import { Heading, HeadingProps } from 'rebass/styled-components';

export const Header: React.FC<HeadingProps> = () => (
  <Heading as="h2" fontSize={[4, 5, 5]} letterSpacing="tighter" mb={5} mt={4}>
    <Link href="/">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>Blog</a>
    </Link>
    .
  </Heading>
);
