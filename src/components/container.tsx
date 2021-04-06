import React from 'react';
import { Flex, FlexProps } from 'rebass/styled-components';
import styled from 'styled-components';

export const Container: React.FC<FlexProps> = styled(Flex)`
  @media screen and (min-width: 640px) {
    max-width: 640px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
  @media screen and (min-width: 1536px) {
    max-width: 1536px;
  }
`;

Container.defaultProps = {
  flexDirection: 'column',
  mb: 3,
  mx: 'auto',
  p: 3,
};
