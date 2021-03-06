import * as redux from 'react-redux';

import { render } from '@/src/test-utils/test-utils';

import given from 'given2';

import HomePage from '.';

import POSTS from '@/fixture/posts';

// π‘ TODO-GYU: E2E νμ€νΈ
// β κ΅³μ΄ ν΄λΉ νμ€νΈκ° νμνκ° κΆκΈ!
// λ λλ§ νμ€νΈλ§ νκ³  cypress μμ E2E νμ€νΈ ν  μμ 
describe('HomePage', () => {
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
    given('selectedTag', () => '#μ μ²΄λ³΄κΈ°');

    it('νκ·Έλ€μ λ λλ§νλ€', () => {
      const tags = [
        { id: '1', name: 'all' },
        { id: '2', name: 'λ¦¬μ‘νΈ' },
        { id: '3', name: 'λ°λλΌ' },
        { id: '4', name: 'κ°λ°νκ²½' },
      ];

      const { container } = render(<HomePage tags={tags} posts={POSTS} />);

      tags.forEach((tag) => {
        expect(container).toHaveTextContent(`#${tag.name}`);
      });
    });

    it('κ²μλ¬Όλ€μ λ λλ§νλ€', () => {
      const tags = [
        { id: '1', name: 'all' },
        { id: '2', name: 'λ¦¬μ‘νΈ' },
        { id: '3', name: 'λ°λλΌ' },
        { id: '4', name: 'κ°λ°νκ²½' },
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
});
