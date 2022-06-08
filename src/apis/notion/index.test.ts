import notion from './client';

import { getDatabase, getDatabaseItem, getPage } from './index';

describe('@notion/client', () => {
  const mockFetch = (data: any) => {
    notion.databases.retrieve = jest.fn().mockResolvedValue(data);
    notion.databases.query = jest.fn().mockResolvedValue(data);
    notion.pages.retrieve = jest.fn().mockResolvedValue(data);
  };

  describe('getDatabase', () => {
    beforeEach(() => {
      mockFetch([]);
    });

    it('database 를 반환한다.', async () => {
      const result = await getDatabase('databaseId');

      expect(result).toEqual([]);
    });
  });

  describe('getDatabaseItem', () => {
    beforeEach(() => {
      mockFetch([]);
    });

    it('databaseItem 을 반환한다.', async () => {
      const result = await getDatabaseItem({
        database_id: 'databaseId',
      });

      expect(result).toEqual([]);
    });
  });

  describe('getPage', () => {
    beforeEach(() => {
      mockFetch([]);
    });

    it('page 를 반환한다.', async () => {
      const result = await getPage('pageId');

      expect(result).toEqual([]);
    });
  });
});
