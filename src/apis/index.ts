import * as notionClient from './notion-client';
import notionApi from './notion-api/client';

import { Post, MultiSelectType } from '@/types/index';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

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

type Tag = Extract<PageObjectResponse['properties'][string], { type: 'multi_select' }>;
type Description = Extract<PageObjectResponse['properties'][string], { type: 'rich_text' }>;
type Title = Extract<PageObjectResponse['properties'][string], { type: 'title' }>;
type Temporary = Extract<PageObjectResponse['properties'][string], { type: 'checkbox' }>;
type PostProperties = {
  tags: Tag;
  description: Description;
  title: Title;
  temporary: Temporary;
};

export async function getPostsAndTags(postsDataId: string) {
  const [tagsDatabase, postsDatabase] = await Promise.all([
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

  // 복잡한 데이터 형태인 경우 api response 형태를 어떻게 mock 해야하는지??
  const tags = (tagsDatabase.properties.tags as MultiSelectType).multi_select.options;
  const posts = (postsDatabase.results as PageObjectResponse[]) //
    .filter((value) => !(value.properties as PostProperties).temporary.checkbox)
    .map((value) => ({
      id: value.id,
      title: (value.properties as PostProperties).title.title[0]['plain_text'],
      tags: (value.properties as PostProperties).tags['multi_select'],
      description: (value.properties as PostProperties).description['rich_text'][0]['plain_text'],
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

  const posts = (postsDatabase.results as PageObjectResponse[]) //
    .filter((value) => !(value.properties as PostProperties).temporary.checkbox)
    .map((value) => {
      const properties = value.properties as PostProperties;
      return {
        title: properties.title.title[0]['plain_text'],
        tags: properties.tags['multi_select'],
        description: properties.description['rich_text'][0]['plain_text'],
        id: value.id,
        createdTime: new Date(value.created_time).toLocaleDateString(),
      };
    });

  return posts;
}
