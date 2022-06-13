import React from 'react';

import userEvent from '@testing-library/user-event';

import { render, screen, fireEvent } from '@/src/test-utils/test-utils';

import { NextRouter } from 'next/router';

import { RouterContext } from 'next/dist/shared/lib/router-context';

import { createMockRouter } from '@/src/test-utils/createMockRouter';

import Header from '.';

describe('Header', () => {
  function renderComponent(router: NextRouter) {
    return render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>,
    );
  }

  describe('라우팅 테스트', () => {
    it('다른 페이지에서 로고를 클릭할 경우 "/" 로 이동한다', () => {
      const router = createMockRouter({ asPath: '/temp' });
      renderComponent(router);

      fireEvent.click(screen.getByAltText('logo'));

      expect(router.push).toBeCalledTimes(1);
      expect(router.push).toBeCalledWith('/', '/', { locale: undefined, scroll: undefined, shallow: false });
    });

    it('다른 페이지에서 블로그 메뉴를 클릭할 경우 "/" 로 이동한다', () => {
      const router = createMockRouter({ asPath: '/temp' });
      renderComponent(router);

      fireEvent.click(screen.getByText('블로그'));

      expect(router.push).toBeCalledTimes(1);
      expect(router.push).toBeCalledWith('/', '/', { locale: undefined, scroll: undefined, shallow: false });
    });

    it('"/" 페이지에서 logo 를 클릭한 경우 아무런 동작을 하지 않는다.', () => {
      const router = createMockRouter({ asPath: '/' });
      renderComponent(router);

      fireEvent.click(screen.getByAltText('logo'));

      expect(router.push).toBeCalledWith('/', '/', { locale: undefined, scroll: undefined, shallow: true });
    });

    it('"/" 페이지에서 블로그 메뉴를 클릭한 경우 아무런 동작을 하지 않는다.', () => {
      const router = createMockRouter({ asPath: '/' });
      renderComponent(router);

      fireEvent.click(screen.getByText('블로그'));

      expect(router.push).toBeCalledWith('/', '/', { locale: undefined, scroll: undefined, shallow: true });
    });
  });

  describe('렌더 테스트', () => {
    it('로고와 메뉴들이 렌더링된다.', () => {
      const router = createMockRouter({ asPath: '/' });
      const { container } = renderComponent(router);

      expect(container.innerHTML).toContain('<img alt="logo"');
      expect(container).toHaveTextContent('블로그');
      expect(container).toHaveTextContent('시리즈');
      expect(container).toHaveTextContent('나');
    });

    it('close ui 를 렌더링한다', () => {
      const router = createMockRouter({ asPath: '/temp' });
      renderComponent(router);
      const $menuImage = screen.getByAltText('menu');

      userEvent.click($menuImage);

      expect($menuImage).toHaveAttribute('alt', 'close');
    });
  });
});
