import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

import type { AppProps } from 'next/app';

import { ThemeProvider } from '@emotion/react';

import { Provider } from 'react-redux';

import store from '@/src/modules/store';

import GlobalStyle from '@/styles/globalStyle';
import dark from '@/styles/theme';

import DefaultLayout from '../layouts';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Provider store={store}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </Provider>
      </ThemeProvider>
    </>
  );
}
