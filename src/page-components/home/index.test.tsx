import * as redux from 'react-redux';

import { render } from '@/src/test-utils/test-utils';

import given from 'given2';

import HomePage from '.';

import POSTS from '@/fixture/posts';

// 💡 TODO-GYU: E2E 테스트
// ❓ 굳이 해당 테스트가 필요한가 궁금!
// 렌더링 테스트만 하고 cypress 에서 E2E 테스트 할 예정describe('HomePage', () => {
const dispatch = jest.fn();
beforeEach(() => {
  dispatch.mockClear();

  jest.spyOn(redux, 'useDispatch').mockImplementation(() => dispatch);
  jest.spyOn(redux, 'useSelector').mockImplementation((selector) =>
    selector({
      selectedTag: given.selectedTag,
    }),
  );
});

describe('렌더링 테스트', () => {
  given('selectedTag', () => '#전체보기');

  it('태그들을 렌더링한다', () => {
    const tags = [
      { id: '1', name: 'all' },
      { id: '2', name: '리액트' },
      { id: '3', name: '바닐라' },
      { id: '4', name: '개발환경' },
    ];

    const { container } = render(<HomePage tags={tags} posts={POSTS} />);

    tags.forEach((tag) => {
      expect(container).toHaveTextContent(`#${tag.name}`);
    });
  });

  it('게시물들을 렌더링한다', () => {
    const tags = [
      { id: '1', name: 'all' },
      { id: '2', name: '리액트' },
      { id: '3', name: '바닐라' },
      { id: '4', name: '개발환경' },
    ];

    const { container } = render(<HomePage tags={tags} posts={POSTS} />);

    POSTS.forEach((post) => {
      expect(container).toHaveTextContent(post.title);
      expect(container).toHaveTextContent(post.createdTime);
      expect(container).toHaveTextContent(post.description);
      post.tags.map((tag) => {
        expect(container).toHaveTextContent(`#${tag.name}`);
      });
    });
  });
});
