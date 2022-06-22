import { render, screen, fireEvent } from '@/src/test-utils/test-utils';

import { RouterContext } from 'next/dist/shared/lib/router-context';

import { NextRouter } from 'next/router';

import { createMockRouter } from '@/src/test-utils/createMockRouter';

import Custom500 from './500.page';

describe('500 Page', () => {
  function renderComponent(router: NextRouter) {
    return render(
      <RouterContext.Provider value={router}>
        <Custom500 />
      </RouterContext.Provider>,
    );
  }

  // GYU: 현재는 getStaticProps 로 SSG 로 제어해서 build 시 check하기 때문에 현재는 500 page 나올 가능성 없음
  describe('Server Side 에러가 발생하면 ', () => {
    it('500 페이지를 렌더링한다.', () => {
      const router = createMockRouter({ asPath: '/' });
      renderComponent(router);

      expect(screen.getByTestId('error-page-main-image')).toBeInTheDocument();
      expect(screen.getByText('Internal Server Error')).toBeInTheDocument();
      expect(screen.getByText('🐛 알 수 없는 오류 발생')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Go To Home' })).toBeInTheDocument();
    });
  });

  describe('버튼을 클릭하면', () => {
    const router = createMockRouter({ asPath: '/temp' });

    it('홈으로 이동한다.', () => {
      renderComponent(router);

      fireEvent.click(screen.getByRole('button', { name: 'Go To Home' }));

      expect(router.push).toBeCalledWith('/');
    });
  });
});
