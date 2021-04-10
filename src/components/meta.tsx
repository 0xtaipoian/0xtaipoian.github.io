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
      content="I am 0xtaipoian, an anon developer, and this is my little personal blog."
      name="description"
    />
    <meta content="/icons/icon-512x512.png" property="og:image" />
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
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
        !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/bc0d458fc5d2b0a9fde01cfad/4ecb172472c3fa9bfa40ebee2.js");
        `,
      }}
      id="mcjs"
      /* eslint-enable react/no-danger */
    />
  </Head>
);
