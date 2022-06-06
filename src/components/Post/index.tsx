import { NotionRenderer } from 'react-notion-x';

import Image from 'next/image';
import Link from 'next/link';
import { Code } from 'react-notion-x/build/third-party/code';

import * as S from './style';

type Props = {
  recordMap: any;
};

export default function Post({ recordMap }: Props) {
  return (
    <S.NotionRenderGlobalStyle>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        components={{
          Code,
          nextImage: Image,
          nextLink: Link,
        }}
      />
    </S.NotionRenderGlobalStyle>
  );
}
