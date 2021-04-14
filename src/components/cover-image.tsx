import Link from 'next/link';
import React from 'react';
import { Box, BoxProps, Image } from 'rebass/styled-components';

export interface CoverImageProps extends BoxProps {
  title: string;
  src: string;
  slug?: string;
}

export const CoverImage: React.FC<CoverImageProps> = ({ title, src, slug, ...props }) => {
  const image = (
    <Box
      m="0px"
      sx={{
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
      }}
      {...props}
    >
      <Box pt="50%" />
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <Image
        alt={`Cover Image for ${title}`}
        height="0px"
        maxHeight="100%"
        maxWidth="100%"
        minHeight="100%"
        minWidth="100%"
        src={src}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          padding: 0,
          border: 'none',
          boxSizing: 'border-box',
          margin: 'auto',
          objectFit: 'cover',
        }}
        width="0px"
      />
    </Box>
  );

  return (
    <Box
      sx={{
        transition: 'box-shadow 300ms ease-out',
        ':hover': {
          boxShadow: 'large',
        },
      }}
    >
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </Box>
  );
};
