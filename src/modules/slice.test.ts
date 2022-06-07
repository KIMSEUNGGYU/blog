import reducer, { initialState, setSelectedTag, setSelectedPost } from './slice';

import POSTS from '@/fixture/posts';

// reducer 테스트
describe('reducer', () => {
  describe('setSelectedTag', () => {
    it('changes tags', () => {
      const selectedTag = '#TAG1';

      const state = reducer(initialState, setSelectedTag(selectedTag));

      expect(state.selectedTag).toBe(selectedTag);
    });
  });

  describe('setSelectedPost', () => {
    it('changes selectedPost', () => {
      const selectedPost = POSTS[0];

      const state = reducer(initialState, setSelectedPost(selectedPost));

      expect(state.selectedPost).toBe(selectedPost);
    });
  });
});
