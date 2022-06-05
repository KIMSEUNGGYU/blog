import { render } from '@testing-library/react';

import { Tag } from '@/types/index';
import Tags from '.';

describe('Tags', () => {
  function renderComponent(tags: Tag[]) {
    return render(<Tags tags={tags} />);
  }

  describe('태그(tags)가 주어진 경우 ', () => {
    it('전달 받은 모든 태그를 렌더링한다.', () => {
      const tags = [
        { id: '1', name: 'all' },
        { id: '2', name: '리액트' },
        { id: '3', name: '바닐라' },
        { id: '4', name: '개발환경' },
      ];

      const { container } = renderComponent(tags);

      tags.forEach((tag) => {
        expect(container).toHaveTextContent(`#${tag.name}`);
      });
    });
  });

  describe('태그(tags)가 주어지지 않은 경우', () => {
    it('#전체보기 를 렌더링한다.', () => {
      const { container } = renderComponent([]);

      expect(container).toHaveTextContent(`#전체보기`);
    });
  });
});
