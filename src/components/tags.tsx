import React from 'react';
import { Box, Flex, FlexProps } from 'rebass/styled-components';
import styled from 'styled-components';

const TagsContainer: React.FC<FlexProps> = styled(Flex)`
  padding: 0;
  list-style: none;
`;

export const Tags: React.FC<{ tags: string[] }> = ({ tags, ...props }) => (
  <TagsContainer {...props} as="ul" flexDirection="row" flexWrap="wrap">
    {tags.map((tag, index) => (
      <Box
        key={index.toString()}
        as="li"
        fontSize={[1, 2, 2]}
        mb={[2, 3, 3]}
        mr={[2, 3, 3]}
        px={3}
        py={1}
        sx={{
          borderRadius: 'circle',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,1)',
        }}
        width="auto"
      >
        {tag}
      </Box>
    ))}
  </TagsContainer>
);
