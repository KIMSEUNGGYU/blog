import { render } from '@testing-library/react';

import Tags from './';

describe('Tags', () => {
  // TODO-GYU : 테스트 케이스 추가
  // - props 로 tags 인자 받는 형태로 변경하기
  // - tags 가 없는 경우 있는 경우 테스트 하기

  it('render - tags 가 있는 경우', () => {
    const tags = [
      { id: 1, name: 'all' },
      { id: 2, name: '리액트' },
      { id: 3, name: '바닐라' },
      { id: 4, name: '개발환경' },
    ];

    const { container } = render(<Tags tags={tags} />);

    tags.forEach((tag) => {
      expect(container).toHaveTextContent(`#${tag.name}`);
    });
  });

  it('render - tags 가 존재하지 않는 경우', () => {
    const { container } = render(<Tags tags={[]} />);

    expect(container).toHaveTextContent(`태그가 존재하지 않습니다.`);
  });
});
