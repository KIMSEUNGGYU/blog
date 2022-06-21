import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

import notion from './client';

type WithAuth<P> = P & {
  auth?: string;
};

export const getDatabaseItem = async (args: WithAuth<QueryDatabaseParameters>) => {
  const database = await notion.databases.query(args);

  return database;
};

export const getDatabase = async (databaseId: string) => {
  const database = await notion.databases.retrieve({
    database_id: databaseId,
  });

  return database;
};

export const getPage = async (pageId: string) => {
  const page = await notion.pages.retrieve({
    page_id: pageId,
  });

  return page;
};
