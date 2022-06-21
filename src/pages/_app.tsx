import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

import { useEffect } from 'react';

import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useRouter } from 'next/router';

import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import { ThemeProvider } from '@emotion/react';

import { Provider } from 'react-redux';

import store from '@/src/modules/store';

import GlobalStyle from '@/styles/globalStyle';
import dark from '@/styles/theme';

import DefaultLayout from '../layouts';

import * as gtag from '../libs/gtag';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => gtag.pageview(url);

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <DefaultSeo {...SEO} />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          strategy="afterInteractive" //
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
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
