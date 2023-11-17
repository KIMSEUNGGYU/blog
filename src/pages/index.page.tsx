import { Tag, Post } from '@/types/index';

import HomePage from '@/page-components/home';

import { HOME_POSTS_DATABASE_ID } from 'src/constant';

import { getPostsAndTags } from '@/src/apis/index';

import { generateSiteMap } from 'src/libs/sitemap';
import { formatDate } from '@/src/utils/formatter';

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

export async function getStaticProps() {
  const postsDatabaseId = HOME_POSTS_DATABASE_ID;
  const DateFormat = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  } as const;

  const { tags, posts: _posts } = await getPostsAndTags(postsDatabaseId);
  const posts = _posts.map((post) => ({
    ...post,
    createdTime: formatDate(post.createdTime),
  }));

  try {
    await generateSiteMap(posts);
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      tags,
      posts,
    },
    revalidate: 10,
  };
}
