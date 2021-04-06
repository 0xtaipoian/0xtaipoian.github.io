import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledHr = styled.hr`
  border-width: 0 0 1px 0;
  border-color: #ccc;
`;

export const SectionSeparator: React.FC<HTMLAttributes<HTMLHRElement>> = ({ ...props }) => (
  <StyledHr {...props} />
);
