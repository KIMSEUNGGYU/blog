import { Tag, Post, MultiSelectType } from '@/types/index';

import { getDatabaseForTag, getDatabaseForPosts } from '@/apis/index';

import { HOME_POSTS_DATABASE_ID } from 'src/constant';

import HomePage from '@/page-components/home';

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
  const postsDatabaseId = HOME_POSTS_DATABASE_ID || '';

  // parse Tags
  const tagsDatabase = await getDatabaseForTag(postsDatabaseId);
  const tags = (tagsDatabase.properties.tags as MultiSelectType).multi_select.options;

  // parse posts
  const postsDatabase = await getDatabaseForPosts(postsDatabaseId);
  const posts = postsDatabase.results //
    .map((value: any) => ({
      id: value.id,
      title: value.properties.title.title[0]['plain_text'],
      tags: value.properties.tags['multi_select'],
      description: value.properties.description['rich_text'][0]['plain_text'],
      createdTime: new Date(value.created_time).toLocaleDateString(),
    }));

  return {
    props: {
      tags,
      posts,
    },
  };
}
