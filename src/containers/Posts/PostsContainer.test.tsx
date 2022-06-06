import * as redux from 'react-redux';

import { render } from '@testing-library/react';

import given from 'given2';

import PostsContainer from '.';

import POSTS from '@/fixture/posts';

jest.mock('react-redux');

describe('PostsContainer', () => {
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

  function renderContainer() {
    return render(<PostsContainer posts={POSTS} />);
  }

  describe('태그를 선택하지 않으면(기본 선택된 태그)', () => {
    given('selectedTag', () => '#전체보기');

    it('모든 게시물들을 렌더링한다.', () => {
      const { container } = renderContainer();

      POSTS.forEach(({ title, description, tags, createdTime }) => {
        expect(container).toHaveTextContent(title);
        expect(container).toHaveTextContent(description);
        tags.forEach((tag) => {
          expect(container).toHaveTextContent(tag.name);
        });
        expect(container).toHaveTextContent(createdTime);
      });
    });
  });

  describe('태그를 선택하면', () => {
    given('selectedTag', () => '#TAG1');

    it('선택된 태그와 관련있는 게시물들을 렌더링한다.', () => {
      const { container } = renderContainer();

      POSTS.filter((post) => post.tags.map((tag) => tag.name).includes('자료구조')).forEach(
        ({ title, description, tags, createdTime }) => {
          expect(container).toHaveTextContent(title);
          expect(container).toHaveTextContent(description);
          tags.forEach((tag) => {
            expect(container).toHaveTextContent(tag.name);
          });
          expect(container).toHaveTextContent(createdTime);
        },
      );
    });
  });
});
