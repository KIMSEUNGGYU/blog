import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

import type { AppProps } from 'next/app';

import { Global, ThemeProvider } from '@emotion/react';

import { Provider } from 'react-redux';

import store from '@/src/modules/store';

import global from '@/styles/global';
import dark from '@/styles/theme';

import DefaultLayout from '../layouts';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <Provider store={store}>
        <ThemeProvider theme={dark}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ThemeProvider>
      </Provider>
    </>
  );
}
