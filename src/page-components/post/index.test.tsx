import * as redux from 'react-redux';

import { render } from '@/src/test-utils/test-utils';

import given from 'given2';

import PostPage from '.';

import POSTS from '@/fixture/posts';

jest.mock('react-notion-x');

jest.mock('react-notion-x/build/third-party/code', () => ({
  Code: () => <>Code</>,
}));

// π‘ TODO-GYU: E2E νμ€νΈ
// β κ΅³μ΄ ν΄λΉ νμ€νΈκ° νμνκ° κΆκΈ!
// λ λλ§ νμ€νΈλ§ νκ³  cypress μμ E2E νμ€νΈ ν  μμ 
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

  describe('λ λλ§ νμ€νΈ', () => {
    const post = POSTS[0];

    it('κ²μλ¬Όμ μ λ³΄(μ λͺ©, νκ·Έ λ±) λ₯Ό λ λλ§νλ€.', () => {
      const { container } = render(<PostPage post={post} recordMap={{}} />);

      expect(container).toHaveTextContent(post.title);
      expect(container).toHaveTextContent(post.createdTime);
      post.tags.map((tag) => {
        expect(container).toHaveTextContent(`#${tag.name}`);
      });
    });

    it('NotionRender λ₯Ό λ λλ§νλ€.', () => {
      const { container } = render(<PostPage post={post} recordMap={{}} />);

      expect(container).toHaveTextContent('NotionRender');
    });
  });
});
