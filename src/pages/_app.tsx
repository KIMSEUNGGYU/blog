import type { AppProps } from 'next/app';

import { Global } from '@emotion/react';

import { Provider } from 'react-redux';

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

import store from '@/src/modules/store';

import global from '@/styles/global';

import DefaultLayout from '../layouts';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <Provider store={store}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </Provider>
    </>
  );
}
