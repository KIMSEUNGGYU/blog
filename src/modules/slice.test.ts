import reducer, { initialState, setSelectedTag } from './slice';

import TAGS from '@/fixture/tags';

// reducer 테스트
describe('reducer', () => {
  describe('setSelectedTag', () => {
    it('changes tags', () => {
      const selectedTag = '#TAG1';

      const state = reducer(initialState, setSelectedTag(selectedTag));

      expect(state.selectedTag).toBe(selectedTag);
    });
  });
});
