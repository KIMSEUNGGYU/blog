import { Client } from '@notionhq/client';
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

type WithAuth<P> = P & {
  auth?: string;
};

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// posts 요청때 사용
export const getDatabaseQuery = async (args: WithAuth<QueryDatabaseParameters>) => {
  const postsDatabase = await notion.databases.query(args);

  return postsDatabase;
};

// tagss 요청때 사용
export const getDatabaseRetrieve = async (databaseId: string) => {
  const tagsDatabase = await notion.databases.retrieve({
    database_id: databaseId,
  });

  return tagsDatabase;
};

export const getPageRetrieve = async (pageId: string) => {
  const postPage = await notion.pages.retrieve({
    page_id: pageId,
  });

  return postPage;
};
