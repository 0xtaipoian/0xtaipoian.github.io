import * as Sentry from '@sentry/react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
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

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App: React.FC<AppProps & { err: any }> = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
