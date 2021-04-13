import {
  Github as GithubIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
} from '@styled-icons/boxicons-logos';
import { Link as LinkIcon } from '@styled-icons/boxicons-regular';
import React from 'react';
import { Box, BoxProps, Flex, Heading, Link } from 'rebass/styled-components';
import styled from 'styled-components';
import { Container } from './container';
import { SubscribeBox } from './subscribe-box';

const StyledList = styled.ul`
  list-style: none;
  padding: 0px;

  li {
    float: left;
    margin-right: 12px;
  }

  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const Footer: React.FC<BoxProps> = () => (
  <Box
    as="footer"
    backgroundColor="#fcfcfc"
    sx={{
      borderTop: '1px solid #efefef',
    }}
  >
    <Container>
      <Flex flexDirection={['column', 'row', 'row']} py={5}>
        <Box width={[1, 1 / 2, 1 / 2, 2 / 3]}>
          <Heading
            as="h3"
            fontSize={[3, 4]}
            lineHeight="heading"
            mb={4}
            pr={[0, 3, 3]}
            textAlign="left"
          >
            Blogging about Coding, Crypto, Banana Smoothies and Video Games.
          </Heading>
          <StyledList>
            <li>
              <Link href="https://0xtaipoian.github.io" target="_blank">
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a>
                  <LinkIcon size="36px" />
                </a>
                {/* eslint-enable jsx-a11y/anchor-is-valid */}
              </Link>
            </li>
            <li>
              <Link href="https://github.com/0xtaipoian" target="_blank">
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a>
                  <GithubIcon size="36px" />
                </a>
                {/* eslint-enable jsx-a11y/anchor-is-valid */}
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/0xtaipoian" target="_blank">
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a>
                  <TwitterIcon size="36px" />
                </a>
                {/* eslint-enable jsx-a11y/anchor-is-valid */}
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/0xtaipoian/">
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a>
                  <InstagramIcon size="36px" />
                </a>
                {/* eslint-enable jsx-a11y/anchor-is-valid */}
              </Link>
            </li>
          </StyledList>
        </Box>
        <Box pl={[0, 3, 3]} textAlign="center" width={[1, 1 / 2, 1 / 2, 1 / 3]}>
          <SubscribeBox />
        </Box>
      </Flex>
    </Container>
  </Box>
);
