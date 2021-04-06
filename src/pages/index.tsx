import Head from 'next/head';
import React from 'react';
import { Container, HeroPost, Intro, Layout, MoreStories } from '../components';
import { getAllPosts } from '../lib/api';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with Forestry</title>
        </Head>
        <Container>
          <Intro />
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
