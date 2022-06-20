// import { api, getDetailPost } from './index';
import * as API from './';
import notion from './notion/client';

jest.mock('notion-client');

describe('api', () => {
  const mockFetch = (data: any) => {
    notion.databases.retrieve = jest.fn().mockResolvedValue(data);
    notion.databases.query = jest.fn().mockResolvedValue(data);
    notion.pages.retrieve = jest.fn().mockResolvedValue(data);
    API.api.getPage = jest.fn().mockResolvedValue(data);
    API.getDetailPost = jest.fn().mockResolvedValue(data);
  };

  describe('getDetailPost', () => {
    beforeEach(() => {
      mockFetch([]);
    });

    it('database 를 반환한다.', async () => {
      const result = await API.getDetailPost('postId');
      expect(result).toEqual([]);
    });
  });
});
