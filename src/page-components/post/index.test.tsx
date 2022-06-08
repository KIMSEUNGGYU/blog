import * as redux from 'react-redux';

import { render } from '@testing-library/react';

import given from 'given2';

import PostPage from '.';

import POSTS from '@/fixture/posts';

jest.mock('react-notion-x');

jest.mock('react-notion-x/build/third-party/code', () => ({
  Code: () => <>Code</>,
}));

// 💡 TODO-GYU: E2E 테스트
// ❓ 굳이 해당 테스트가 필요한가 궁금!
// 렌더링 테스트만 하고 cypress 에서 E2E 테스트 할 예정
describe('PostPage', () => {
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
    const post = POSTS[0];

    it('게시물의 정보(제목, 태그 등) 를 렌더링한다.', () => {
      const { container } = render(<PostPage post={post} recordMap={{}} />);

      expect(container).toHaveTextContent(post.title);
      expect(container).toHaveTextContent(post.createdTime);
      post.tags.map((tag) => {
        expect(container).toHaveTextContent(`#${tag.name}`);
      });
    });

    it('NotionRender 를 렌더링한다.', () => {
      const { container } = render(<PostPage post={post} recordMap={{}} />);

      expect(container).toHaveTextContent('NotionRender');
    });
  });
});
