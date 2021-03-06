import * as S from './styles';

import Header from '@/components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <S.Container>
      <Header />
      <S.Divider />
      <S.Main>{children}</S.Main>
    </S.Container>
  );
}
