import * as Sentry from '@sentry/react';
import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: !isDev,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
}

const App: React.FC<AppProps & { err: any }> = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
