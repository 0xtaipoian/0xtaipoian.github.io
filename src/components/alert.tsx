import React from 'react';
import { Box } from 'rebass/styled-components';
import { PreviewLayout } from '../interfaces';
import { Container } from './container';

export const Alert: React.FC<PreviewLayout> = ({ preview }) => (
  <>
    {preview ? (
      <Container>
        <Box>
          <>
            This page is a preview. <a href="/api/exit-preview">Click here</a> to exit preview mode.
          </>
        </Box>
      </Container>
    ) : null}
  </>
);
