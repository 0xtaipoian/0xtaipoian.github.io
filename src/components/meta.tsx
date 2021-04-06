import Head from 'next/head';
import React from 'react';

export const Meta: React.FC = () => (
  <Head>
    <link href="/icons/icon-512x512.png" rel="shortcut icon" />
    <link href="/icons/icon-512x512.png" rel="apple-touch-icon" />
    <link href="/icons/icon-512x512.png" rel="shortcut icon" sizes="512x512" type="image/png" />
    <link href="/icons/icon-96x96.png" rel="shortcut icon" sizes="96x96" type="image/png" />
    <link href="/icons/icon-32x32.png" rel="shortcut icon" sizes="32x32" type="image/png" />
    <link href="https://fonts.gstatic.com" rel="preconnect" />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
      rel="stylesheet"
    />
    <meta content="#000" name="theme-color" />
    <link href="/feed.xml" rel="alternate" type="application/rss+xml" />
    <meta
      content="I am 0xtaipoian, a citizen of a decentralized city, and this is my little personal blog."
      name="description"
    />
    <meta content="/icons/icon-512x512.png" property="og:image" />
  </Head>
);
