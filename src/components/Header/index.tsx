import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './styles';

// TODO-GYU: Link 데이터 공통된 거끼리 정의해서 map 으로 Header 기능 리팩토링
export default function Header() {
  const router = useRouter();

  return (
    <S.Wrapper>
      <Link href="/" shallow={router.asPath === '/' ? true : false}>
        <a>
          <Image src="/logo.svg" alt="logo" width={180} height={41} />
        </a>
      </Link>
      <nav>
        {/* TODO-GYU: delete - 임시로 tooltip(title) 기능, 후에 기능 개발 시 제거 */}
        <Link href="/" shallow={router.asPath === '/' ? true : false}>
          <a data-testid="blog">
            <li className={router.asPath === '/' ? 'active' : ''}>블로그</li>
          </a>
        </Link>
        <li className="todo" title="👨‍💻 Oops! 개발 중입니다">
          시리즈
        </li>
        <li className="todo" title="👨‍💻 Oops! 개발 중입니다">
          나
        </li>
      </nav>
    </S.Wrapper>
  );
}
