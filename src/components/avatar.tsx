import React from 'react';
import { Box, Flex, FlexProps, Image, Text } from 'rebass/styled-components';
import { Author } from '../interfaces/author';

export interface AvatarProps extends Author, Omit<FlexProps, 'name'> {
  size?: string | number | Array<string | number>;
  fontSize?: string | number | Array<string | number>;
}

export const Avatar: React.FC<AvatarProps> = ({
  name,
  picture,
  size = '3rem',
  fontSize = 3,
  ...props
}) => (
  <Flex alignItems="center" flexDirection="row" justifyContent="left" {...props}>
    <Box>
      <Image
        alt={name}
        height={size}
        src={picture}
        sx={{ borderRadius: 'circle', verticalAlign: 'top' }}
        width={size}
      />
    </Box>
    <Text fontSize={fontSize} ml={[2, 3, 3]}>
      <b>{name}</b>
    </Text>
  </Flex>
);
