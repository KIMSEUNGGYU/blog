import { useState } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

// TODO-GYU: DELETE
// 시리즈, 나 기능 구현시 최종 형태로 수정
const links = [
  { path: '/', label: '블로그', title: '' },
  { path: '', label: '시리즈', title: '👨‍💻 Oops! 개발 중입니다' }, // 개발중
  { path: '', label: '나', title: '👨‍💻 Oops! 개발 중입니다' }, // 개발중
];

// TODO-GYU: Link 데이터 공통된 거끼리 정의해서 map 으로 Header 기능 리팩토링
export default function Header() {
  const router = useRouter();

  const [toggle, setToggle] = useState(false);

  const changeToggle = () => setToggle(() => !toggle);

  return (
    <S.Wrapper>
      <Link href="/" shallow={router.asPath === '/' ? true : false}>
        <a>
          <Image
            src="/logo.svg" //
            alt="logo"
            width={180}
            height={41}
          />
        </a>
      </Link>
      <div className="hamburger" onClick={changeToggle}>
        <Image
          src={toggle ? '/close.svg' : '/menu.svg'} //
          alt={toggle ? 'close' : 'menu'}
          width={30}
          height={41}
        />
      </div>
      <nav className={toggle ? 'active' : ''}>
        {/* TODO-GYU: delete -
          //  임시로 tooltip(title) 기능, 후에 기능 개발 시 제거 
        */}
        {links.map((link) => (
          <Link
            key={link.label} //
            href={link.path}
            shallow={router.asPath === link.path ? true : false}
          >
            <a onClick={() => setToggle(false)}>
              <li
                title={link.title} //
                className={
                  router.asPath === link.path
                    ? 'active' //
                    : link.path === ''
                    ? 'todo'
                    : ''
                }
              >
                {link.label}
              </li>
            </a>
          </Link>
        ))}
      </nav>
    </S.Wrapper>
  );
}
