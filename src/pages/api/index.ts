import { NextApiRequest, NextApiResponse } from 'next';

import notion from './notion/client';

import { MultiSelectType } from '@/types/index';

import { HOME_POSTS_DATABASE_ID } from 'src/constant';

const getDatabaseForPosts = async (databaseId: string) => {
  const postsDatabase = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending',
      },
    ],
  });

  return postsDatabase;
};

const getDatabaseForTag = async (databaseId: string) => {
  const tagsDatabase = await notion.databases.retrieve({
    database_id: databaseId,
  });

  return tagsDatabase;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const postsDatabaseId = HOME_POSTS_DATABASE_ID;

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

  res.status(200).json({
    tags,
    posts,
  });
}
