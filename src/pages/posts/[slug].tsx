import { NextPage } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Box } from 'rebass/styled-components';
import { Container, Header, Layout, PostBody, PostHeader, PostTitle } from '../../components';
import { Post } from '../../interfaces';
import { getAllPosts, getPostBySlug, markdownToHtml } from '../../lib';

interface PostPageProps {
  post: Post;
  preview?: boolean;
}

const PostPage: NextPage<PostPageProps> = ({ post, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <Box as="article" mb={4}>
            <Head>
              <title>{post.title} | Pager Universe</title>
              <meta content={post.ogImage.url} property="og:image" />
              <meta content={`${post.title} | Pager Universe`} property="og:title" />
              <meta content={post.excerpt} property="og:description" />
              <meta content={post.excerpt} name="description" />
              <meta content={post.tags.join(', ')} name="keywords" />
            </Head>
            <PostHeader
              author={post.author}
              coverImage={post.coverImage}
              date={post.date}
              title={post.title}
            />
            <PostBody content={post.content} tags={post.tags} />
          </Box>
        )}
      </Container>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'tags',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export default PostPage;
