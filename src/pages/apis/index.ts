import notion from './notion/client';

export const getDatabaseForPosts = async (databaseId: string) => {
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

export const getDatabaseForTag = async (databaseId: string) => {
  const tagsDatabase = await notion.databases.retrieve({
    database_id: databaseId,
  });

  return tagsDatabase;
};
