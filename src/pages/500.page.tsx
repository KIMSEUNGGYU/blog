import { useRouter } from 'next/router';

import { NextSeo } from 'next-seo';

import ErrorPage from '@/components/common/Error';

export default function Custom500() {
  const router = useRouter();

  const handleGoHome = () => router.push('/');

  return (
    <>
      <NextSeo
        title="SEUNGGYU - 500" //
      />
      <ErrorPage
        message="Internal Server Error" //
        description="🐛 알 수 없는 오류 발생"
        buttonText="Go To Home"
        onClick={handleGoHome}
      />
    </>
  );
}
