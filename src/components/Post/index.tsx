import { NotionRenderer } from 'react-notion-x';

import Image from 'next/image';
import Link from 'next/link';

import { Code } from 'react-notion-x/build/third-party/code';

import { ExtendedRecordMap } from 'notion-types';

import * as S from './style';

type Props = {
  // 테스트 때문에 any 타입 추가???
  recordMap: ExtendedRecordMap | any;
};

export default function Post({ recordMap }: Props) {
  return (
    <S.NotionRenderGlobalStyle>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={true}
        components={{
          Code,
          nextImage: Image,
          nextLink: Link,
        }}
      />
    </S.NotionRenderGlobalStyle>
  );
}
