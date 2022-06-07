import { render } from '@testing-library/react';

import DefaultLayout from '.';

describe('Layout', () => {
  const TestComponent = () => <div>TestComponent</div>;

  const renderLayout = () => {
    return render(
      <DefaultLayout>
        <TestComponent />
      </DefaultLayout>,
    );
  };

  describe('Default Layout', () => {
    it('기본 레이아웃과 주어진 children 과 함께 렌더링된다.', () => {
      const { container } = renderLayout();

      // header 렌더 테스트
      expect(container.innerHTML).toContain('<img alt="logo"');
      expect(container).toHaveTextContent('블로그');
      expect(container).toHaveTextContent('시리즈');
      expect(container).toHaveTextContent('나');
      // 주어진 children 컴포넌트
      expect(container).toHaveTextContent('TestComponent');
    });
  });
});
