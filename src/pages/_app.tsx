import type { AppProps } from 'next/app';

import { Global } from '@emotion/react';

import { Provider } from 'react-redux';

import store from '@/src/modules/store';

import global from '@/styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
