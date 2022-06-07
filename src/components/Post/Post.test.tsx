import { render } from '@testing-library/react';

import Post from '.';

jest.mock('react-notion-x');

jest.mock('react-notion-x/build/third-party/code', () => ({
  Code: () => <>Code</>,
}));

// ❓ THINK-GYU: 3-party 라이브러리를 테스트에 대하여 좋은 테스트 방법 찾기
// Post 는 NotionRender 를 활용하여 NotionContents 렌더링하는 컴포넌트
describe('Post', () => {
  it('노션에 등록된 컨텐츠를 렌더링한다', () => {
    const { container } = render(<Post recordMap={{}} />);

    // ❓ THINK-GYU: 3-party 라이브러리를 mocking 했는데,
    // 렌더 테스트할 때 실제 인자로 하는게 나은지(즉, 실제 데이터 형태를 전달해서 처리하는게 나을까?, 아니면 그냥 렌더만 되는지 확인하는게 나을까?)
    expect(container).toHaveTextContent('NotionRender');
  });
});
