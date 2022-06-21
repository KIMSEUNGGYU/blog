import { render, screen, fireEvent } from '@/src/test-utils/test-utils';

import { RouterContext } from 'next/dist/shared/lib/router-context';

import { NextRouter } from 'next/router';

import { createMockRouter } from '@/src/test-utils/createMockRouter';

import NotFoundPage from './404.page';

describe('404 Page', () => {
  function renderComponent(router: NextRouter) {
    return render(
      <RouterContext.Provider value={router}>
        <NotFoundPage />
      </RouterContext.Provider>,
    );
  }

  describe('존재하지 않는 URL 인 경우', () => {
    const router = createMockRouter({ asPath: '/temp' });

    it('404 페이지를 렌더링한다.', () => {
      renderComponent(router);

      expect(screen.getByTestId('error-page-main-image')).toBeInTheDocument();
      expect(screen.getByText('PAGE NOT FOUND')).toBeInTheDocument();
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
