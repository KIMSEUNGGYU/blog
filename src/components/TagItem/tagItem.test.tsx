import { render } from '@testing-library/react';

import TagItem from '.';

describe('TagItem', () => {
  const tagName = 'all';

  // TODO-GYU: 테스트 코드 추가
  // - name 인자가 주어지지 않는 경우 추가
  // - 클릭한 경우 추가
  // - faker 라이브러리를 통해 임의의 값으로 처리

  it('render', () => {
    const { container } = render(<TagItem name={tagName} />);

    expect(container).toHaveTextContent(`#${tagName}`);
  });
});
