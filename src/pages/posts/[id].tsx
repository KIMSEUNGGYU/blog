import { GetServerSideProps } from 'next';

import request from '@/src/api';

import PostPage from '@/page-components/post';

export default function Post({ recordMap, post }: any) {
  return (
    <PostPage //
      recordMap={recordMap}
      post={post}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async function (context) {
  const postId = context.query.id;
  const post = context.query.post as string;

  const { recordMap } = await request(`api/posts/${postId}`);

  return {
    props: {
      recordMap,
      post: JSON.parse(post),
    },
  };
};