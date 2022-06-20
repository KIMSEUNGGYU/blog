import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: '김승규 블로그, SEUNGGYU',
  description: '개발자 김승규의 블로그 입니다. 좋은 컨텐츠를 생산하겠습니다.',
  canonical: 'https://kimseunggyu.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://kimseunggyu.vercel.app',
    site_name: '김승규 블로그',
    images: [
      {
        url: 'https://kimseunggyu.vercel.app/logo.svg',
        width: 800,
        height: 600,
        alt: 'Logo',
      },
    ],
    profile: {
      firstName: 'seunggyu',
      lastName: 'kim',
      username: 'seunggyu',
    },
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;
