import Image from 'next/image';

import * as S from './styles';

export default function Header() {
  return (
    <S.Wrapper>
      <Image src="/logo.svg" alt="logo" width={180} height={41} />
      <nav>
        {/* TODO-GYU: delete - 임시로 tooltip 기능, 후에 기능 개발 시 제거 */}
        <li title="현재 페이지입니다">블로그</li>
        <li title="👨‍💻 Oops! 개발 중입니다">시리즈</li>
        <li title="👨‍💻 Oops! 개발 중입니다">나</li>
      </nav>
    </S.Wrapper>
  );
}
