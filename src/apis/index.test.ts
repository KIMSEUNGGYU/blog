// import { api, getDetailPost } from './index';
// import * as API from './';
// import * as notionCient from './notion/client';
import notionClient from './notion/client';
import notionApi from './notionRender/client';

import { getDetailPost, getPosts, getPostsAndTags } from './index';
// import * as api from './index';

import POST_PAGE from '@/fixture/postPage';
import PAGE from '@/fixture/notion-client/page';
import DATABASE from '@/fixture/notion-client/database';
import DATABASE_ITEM from '@/fixture/notion-client/database-item';

jest.mock('notion-client');
jest.mock('@notionhq/client');
// jest.mock('./index.ts');

describe('api', () => {
  beforeEach(() => {
    notionClient.databases.retrieve = jest.fn().mockResolvedValue(DATABASE);
    notionClient.databases.query = jest.fn().mockResolvedValue(DATABASE_ITEM);
    notionClient.pages.retrieve = jest.fn().mockResolvedValue(PAGE);
    notionApi.getPage = jest.fn().mockResolvedValue(POST_PAGE);
  });

  describe('getPostsAndTags', () => {
    it('posts 와 tags 를 반환한다.', async () => {
      const result = await getPostsAndTags('postId');

      expect(result).toEqual({ posts: [], tags: [] });
    });
  });

  describe('getPosts', () => {
    it('posts 를 반환한다.', async () => {
      const result = await getPosts('rootPostId');

      expect(result).toEqual([]);
    });
  });

  describe('getDetailPost', () => {
    it('recordMap 과 post 를 반환한다.', async () => {
      const result = await getDetailPost('rootPostId');

      expect(result).toEqual([]);
    });
  });
});
