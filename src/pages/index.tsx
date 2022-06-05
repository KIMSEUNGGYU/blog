import { Tag, Post } from '@/types/index';

import HomePage from '@/page-components/home';

import request from 'src/api';

type Props = {
  tags: Tag[];
  posts: Post[];
};

export default function Index({ tags, posts }: Props) {
  return (
    <HomePage
      tags={tags} //
      posts={posts}
    />
  );
}

export async function getServerSideProps() {
  const { tags, posts } = await request('/api/');

  return {
    props: {
      tags,
      posts,
    },
  };
}
