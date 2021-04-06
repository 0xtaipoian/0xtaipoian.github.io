import React from 'react';
import { Box, Flex, FlexProps, Image, Text } from 'rebass/styled-components';
import { Author } from '../interfaces/author';

export type AvatarProps = Author & FlexProps;

export const Avatar: React.FC<AvatarProps> = ({ name, picture }) => (
  <Flex alignItems="center" flexDirection="row" justifyContent="left">
    <Box>
      <Image alt={name} height="3rem" src={picture} sx={{ borderRadius: 'circle' }} width="3rem" />
    </Box>
    <Text fontSize={3} ml={2}>
      <b>{name}</b>
    </Text>
  </Flex>
);
