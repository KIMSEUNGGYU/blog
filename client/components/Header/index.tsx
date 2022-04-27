import Image from 'next/image';

import * as S from './styles';

export default function Header() {
  return (
    <S.Wrapper>
      <Image src="/logo.svg" alt="logo" width={180} height={41} />
      <nav>
        <li>블로그</li>
        <li>시리즈</li>
      </nav>
    </S.Wrapper>
  );
}
