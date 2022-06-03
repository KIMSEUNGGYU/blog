import * as S from './styles';

import Header from '../../components/Header/';
import Tags from '../../components/Tags';

export default function Home() {
  return (
    <S.Container>
      <Header />
      <S.Divider />
      {/* TODO-GYUI
      - 임시로 null 처리 원래 배열 타입
       */}
      <Tags tags={null} />
    </S.Container>
  );
}
