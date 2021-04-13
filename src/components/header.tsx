import Link from 'next/link';
import React from 'react';
import { Heading, HeadingProps } from 'rebass/styled-components';
import { Avatar } from './avatar';

export const Header: React.FC<HeadingProps> = () => (
  <Heading
    as="h2"
    fontSize={[4, 5, 5]}
    letterSpacing="tighter"
    mb={[4, 4, 5]}
    mt={[3, 4, 4]}
    textAlign={['center', 'left', 'left']}
  >
    <Link href="/">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>
        <Avatar
          fontSize={[3, 5]}
          justifyContent={['center', 'left', 'left']}
          name="Pager's Universe"
          picture="/logo.jpg"
          size={['3rem', '4rem']}
        />
      </a>
    </Link>
  </Heading>
);
