import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

import type { AppProps } from 'next/app';

import { DefaultSeo, NextSeo } from 'next-seo';

import SEO from '../next-seo.config';

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
        <DefaultSeo {...SEO} />
        {/* TODO-GYU: NextSEo 에러, 후에 수정되면 DefaultSEO로 변경 */}
        <NextSeo
          additionalMetaTags={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1, maximum-scale=1 user-scalable=no',
            },
          ]}
        />
        <Provider store={store}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </Provider>
      </ThemeProvider>
    </>
  );
}
