import Head from 'next/head';
import React from 'react';

export interface MetaProps {
  lang?: string;
}

export const Meta: React.FC<MetaProps> = ({ lang = 'en' }) => (
  <Head>
    <meta
      content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0"
      name="viewport"
    />
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta content="black" name="apple-mobile-web-app-status-bar-style" />
    <meta content="true" name="HandheldFriendly" />
    <meta content={lang} httpEquiv="Content-Language" />
    <link href="/icons/icon-512x512.png" rel="apple-touch-icon" />
    <link href="/icons/icon-128x128.png" rel="apple-touch-icon-precomposed" />
    <link href="/icons/icon-512x512.png" rel="shortcut icon" sizes="512x512" />
    <link href="/icons/icon-196x196.png" rel="shortcut icon" sizes="196x196" />
    <link href="/icons/icon-192x192.png" rel="shortcut icon" sizes="192x192" />
    <link href="/icons/icon-128x128.png" rel="shortcut icon" sizes="128x128" />
    <link href="/icons/icon-96x96.png" rel="shortcut icon" sizes="96x96" />
    <link href="/icons/icon-32x32.png" rel="shortcut icon" sizes="32x32" />
    <link href="/icons/icon-32x32.png" rel="icon" type="image/png" />
    <link href="https://fonts.gstatic.com" rel="preconnect" />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
      rel="stylesheet"
    />
    <meta content="#000" name="theme-color" />
    <link href="/feed.xml" rel="alternate" type="application/rss+xml" />
    <meta
      content="I am Pager, an anon developer, and this is my little personal blog."
      name="description"
    />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VGWXB3NBPG" />
    <script
      /* eslint-disable react/no-danger */
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VGWXB3NBPG');
        `,
      }}
      /* eslint-enable react/no-danger */
    />
  </Head>
);
