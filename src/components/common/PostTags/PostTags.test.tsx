import { render, screen, fireEvent } from '@/src/test-utils/test-utils';

import tags from '@/fixture/tags';

import PostTags from '.';

describe('PostTags', () => {
  function renderComponent() {
    return render(<PostTags tags={tags} />);
  }

  describe('렌더 테스트', () => {
    it('주어진 태그들을 렌더링한다.', () => {
      renderComponent();

      tags.forEach((tag) => {
        expect(screen.getByText(`#${tag.name}`)).toBeInTheDocument();
      });
    });
  });
});
