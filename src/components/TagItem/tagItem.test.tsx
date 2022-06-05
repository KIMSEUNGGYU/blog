import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import TagItem from '.';

describe('TagItem', () => {
  const tagName = '전체보기';

  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  function renderComponent() {
    return render(
      <TagItem
        name={tagName} //
        selectedTag="#전체보기"
        onClick={handleClick}
      />,
    );
  }

  it('주어진 태그를 렌더링한다.', () => {
    const { container } = renderComponent();

    expect(container).toHaveTextContent(`#${tagName}`);
  });

  it('버튼을 클릭하면, handleClick 를 호출한다.', () => {
    renderComponent();

    userEvent.click(screen.getByRole('button', { name: `#${tagName}` }));

    expect(handleClick).toBeCalledWith(`#${tagName}`);
  });
});
