import PostPage from '@/page-components/post';

import { HOME_POSTS_DATABASE_ID } from 'src/constant';

import { getPosts, getDetailPost } from '@/src/apis';

export default function Post({ recordMap, post }: any) {
  return (
    <PostPage //
      recordMap={recordMap}
      post={post}
    />
  );
}

// 빌드될 때 실행
export const getStaticPaths = async () => {
  const postsDatabaseId = HOME_POSTS_DATABASE_ID;

  const posts = await getPosts(postsDatabaseId);

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps({ params }: any) {
  const postId = params.id;

  const { recordMap, post } = await getDetailPost(postId);

  return {
    props: {
      recordMap,
      post,
    },
  };
}
