import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

import type { AppProps } from 'next/app';

import Script from 'next/script';

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
            {
              name: 'naver-site-verification',
              content: '496484a3821dff90ab9dc2cdc616de03e8552300',
            },
            {
              name: 'google-site-verification',
              content: 'uQqvUZFzeArbL2J0vv77QKVE-_OKLeZoAiLb65buj_E',
            },
          ]}
        />
        {/* TODO-GYU: Script 태그(GA 스크립트 - document.tsx로 이동) */}
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G7QHB7RX9W" //
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-G7QHB7RX9W');
          `}
        </Script>
        <Provider store={store}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </Provider>
      </ThemeProvider>
    </>
  );
}
