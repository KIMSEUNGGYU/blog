import { GetDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

import notion from './notion/client';

export const getDatabaseForTag = async (databaseId: string) => {
  const tagsDatabase = (await notion.databases.retrieve({
    database_id: databaseId,
  })) as GetDatabaseResponse;

  return tagsDatabase;
};
