import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

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
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <Provider store={store}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </Provider>
      </ThemeProvider>
    </>
  );
}
