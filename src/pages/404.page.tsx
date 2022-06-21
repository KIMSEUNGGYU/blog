import { useRouter } from 'next/router';

import { NextSeo } from 'next-seo';

import ErrorPage from '@/components/common/Error';

export default function NotFoundPage() {
  const router = useRouter();

  const handleGoHome = () => router.push('/');

  return (
    <>
      <NextSeo
        title="SEUNGGYU - 404" //
      />
      <ErrorPage
        message="PAGE NOT FOUND" //
        description="페이지를 찾을 수 없습니다."
        buttonText="Go To Home"
        onClick={handleGoHome}
      />
    </>
  );
}
