import notionApi from './client';

import { getPage } from './index';

jest.mock('notion-client');

describe('notion-client', () => {
  const mockFetch = (data: any) => {
    notionApi.getPage = jest.fn().mockResolvedValue(data);
  };

  describe('getPage', () => {
    beforeEach(() => {
      mockFetch([]);
    });

    it('database 를 반환한다.', async () => {
      const result = await getPage('pageId');
      expect(result).toEqual([]);
    });
  });
});
