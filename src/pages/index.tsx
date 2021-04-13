import Head from 'next/head';
import React from 'react';
import { Container, Header, HeroPost, Layout, MoreStories } from '../components';
import { getAllPosts } from '../lib/api';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>Pager&apos;s Universe</title>
        </Head>
        <Container>
          <Header />
          {heroPost && (
            <HeroPost
              author={heroPost.author}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              excerpt={heroPost.excerpt}
              slug={heroPost.slug}
              title={heroPost.title}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
}
