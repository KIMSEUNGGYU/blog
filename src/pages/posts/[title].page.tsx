import { ArticleJsonLd, NextSeo } from 'next-seo';

import SEO from '@/src/next-seo.config';

import PostPage from '@/page-components/post';

import { HOME_POSTS_DATABASE_ID } from 'src/constant';

import { getPosts, getDetailPost, getPostItemByTitle } from '@/src/apis';

import { Post } from '@/types/index';

import { EXPORT_NAME_GET_STATIC_PATHS } from 'next/dist/build/babel/plugins/next-ssg-transform';
type Props = {
  recordMap: any;
  post: Post;
};

export default function PostDetail({ recordMap, post }: Props) {
  return (
    <>
      <NextSeo
        {...SEO}
        title={post.title} //
        description={post.description}
        openGraph={{
          title: post.title,
          description: post.description,
          url: `https://kimseunggyu.vercel.app/posts/${post.id}`,
        }}
      />
      {/* TODO-GYU: ArticleJsonLd 가 필요한가?, SEO 최적화에서 AMP 제공? */}
      <ArticleJsonLd
        url={`https://kimseunggyu.vercel.app/posts/${post.id}`} //
        title={post.title}
        images={['/logo.svg']}
        datePublished={post.createdTime}
        authorName={'김승규'}
        description={post.description}
      />
      <PostPage //
        recordMap={recordMap}
        post={post}
      />
    </>
  );
}

// 빌드될 때 실행
export const getStaticPaths = async () => {
  const postsDatabaseId = HOME_POSTS_DATABASE_ID;

  const posts = await getPosts(postsDatabaseId);

  const paths = posts.map((post: Post) => ({
    params: { title: post.title },
  }));

  return { paths, fallback: 'blocking' };
};

export async function getStaticProps({ params }: any) {
  const postId = params.title;

  const result = await getPostItemByTitle(postId);
  if (!result) {
    return { props: {} };
  }

  const { recordMap, post } = await getDetailPost(result.id);
  return {
    props: {
      recordMap,
      post,
    },
    revalidate: 10,
  };
}
