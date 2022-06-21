import notionClient from './notion-client/client';
import notionApi from './notion-api/client';

import { getDetailPost, getPosts, getPostsAndTags } from './index';

import POST_PAGE from '@/fixture/notion-api/postPage';
import PAGE from '@/fixture/notion-client/page';
import DATABASE from '@/fixture/notion-client/database';
import DATABASE_ITEM from '@/fixture/notion-client/database-item';

jest.mock('notion-client');
jest.mock('@notionhq/client');

describe('api', () => {
  beforeEach(() => {
    notionClient.databases.retrieve = jest.fn().mockResolvedValue(DATABASE);
    notionClient.databases.query = jest.fn().mockResolvedValue(DATABASE_ITEM);
    notionClient.pages.retrieve = jest.fn().mockResolvedValue(PAGE);
    notionApi.getPage = jest.fn().mockResolvedValue(POST_PAGE);
  });

  describe('getPostsAndTags', () => {
    it('posts 와 tags 를 반환한다.', async () => {
      const mockResult = { posts: [], tags: [] };

      const result = await getPostsAndTags('postId');

      expect(result).toEqual(mockResult);
    });
  });

  describe('getPosts', () => {
    it('posts 를 반환한다.', async () => {
      const mockResult: any = [];

      const result = await getPosts('rootPostId');

      expect(result).toEqual(mockResult);
    });
  });

  describe('getDetailPost', () => {
    it('recordMap 과 post 를 반환한다.', async () => {
      const mockResult = {
        post: {
          createdTime: '3/17/2020',
          description: 'description',
          id: 'id',
          tags: 'tags',
          title: 'title',
        },
        recordMap: POST_PAGE,
      };

      const result = await getDetailPost('rootPostId');

      expect(result).toEqual(mockResult);
    });
  });
});
