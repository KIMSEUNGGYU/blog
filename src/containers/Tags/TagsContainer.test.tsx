import * as redux from 'react-redux';

import { screen, render } from '@/src/test-utils/test-utils';

import userEvent from '@testing-library/user-event';

import { setSelectedTag } from '@/src/modules/slice';

import TagsContainer from '.';

import TAGS from '@/fixture/tags';

jest.mock('react-redux');

describe('tagsContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();

    jest.spyOn(redux, 'useDispatch').mockImplementation(() => dispatch);
    jest.spyOn(redux, 'useSelector').mockImplementation((selector) =>
      selector({
        selectedTag: '#전체보기',
      }),
    );
  });

  function renderContainer() {
    return render(<TagsContainer tags={TAGS} />);
  }

  describe('태그를 선택하면', () => {
    it('선택된 태그 변경 기능을 dispatch 한다.', () => {
      const selectedTagName = `#${TAGS[0].name}`;

      renderContainer();
      userEvent.click(screen.getByRole('button', { name: selectedTagName }));

      expect(dispatch).toBeCalledWith(setSelectedTag(selectedTagName));
    });
  });
});
