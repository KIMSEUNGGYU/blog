import * as notionClient from './notion-client';
import notionApi from './notion-api/client';

import { Post, MultiSelectType } from '@/types/index';

export async function getDetailPost(postId: string) {
  const [recordMap, postPage]: any = await Promise.all([notionApi.getPage(postId), notionClient.getPage(postId)]);

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
    notionClient.getDatabase(postsDataId),
    notionClient.getDatabaseItem({
      database_id: postsDataId,
      sorts: [
        {
          timestamp: 'created_time',
          direction: 'descending',
        },
      ],
    }),
  ]);

  // THINK-GYU
  // 복잡한 데이터 형태인 경우 api response 형태를 어떻게 mock 해야하는지??

  // parse Tags
  const tags = (tagsDatabase.properties.tags as MultiSelectType).multi_select.options;

  // parse posts
  const posts = postsDatabase.results //
    .filter((value: any) => value.properties.title.title.length && value.properties.description['rich_text'].length) // 게시물이 있는 경우
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
  const postsDatabase = await notionClient.getDatabaseItem({
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
    .filter((value: any) => value.properties.title.title.length && value.properties.description['rich_text'].length) // 게시물이 있는 경우
    .map((value: any) => ({
      id: value.id,
      title: value.properties.title.title[0]['plain_text'],
      tags: value.properties.tags['multi_select'],
      description: value.properties.description['rich_text'][0]['plain_text'],
      createdTime: new Date(value.created_time).toLocaleDateString(),
    }));

  return posts;
}
