import { getDatabaseQuery, getDatabaseRetrieve, getPageRetrieve } from './notion';

import { Post, MultiSelectType } from '@/types/index';

import { NotionAPI } from 'notion-client';
const api = new NotionAPI();

export async function getDetailPost(postId: string) {
  const [recordMap, postPage]: any = await Promise.all([api.getPage(postId), await getPageRetrieve(postId)]);

  const post: Post = {
    id: postPage.id,
    title: postPage.properties.title.title[0]['plain_text'],
    tags: postPage.properties.tags['multi_select'],
    description: postPage.properties.description['rich_text'][0]['plain_text'],
    createdTime: new Date(postPage.created_time).toLocaleDateString(),
  };

  return {
    recordMap,
    post,
  };
}

export async function getPostsAndTags(postsDataId: string) {
  const [tagsDatabase, postsDatabase]: any = await Promise.all([
    getDatabaseRetrieve(postsDataId),
    getDatabaseQuery({
      database_id: postsDataId,
      sorts: [
        {
          timestamp: 'created_time',
          direction: 'descending',
        },
      ],
    }),
  ]);

  // parse Tags
  const tags = (tagsDatabase.properties.tags as MultiSelectType).multi_select.options;

  // parse posts
  const posts = postsDatabase.results //
    .map((value: any) => ({
      id: value.id,
      title: value.properties.title.title[0]['plain_text'],
      tags: value.properties.tags['multi_select'],
      description: value.properties.description['rich_text'][0]['plain_text'],
      createdTime: new Date(value.created_time).toLocaleDateString(),
    }));

  return {
    tags,
    posts,
  };
}

export async function getPosts(rootPostId: string) {
  const postsDatabase = await getDatabaseQuery({
    database_id: rootPostId,
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending',
      },
    ],
  });

  // parse posts
  const posts = postsDatabase.results //
    .map((value: any) => ({
      id: value.id,
      title: value.properties.title.title[0]['plain_text'],
      tags: value.properties.tags['multi_select'],
      description: value.properties.description['rich_text'][0]['plain_text'],
      createdTime: new Date(value.created_time).toLocaleDateString(),
    }));

  return posts;
}
