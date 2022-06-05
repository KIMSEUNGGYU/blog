import { Tag, Post } from '@/types/index';

import * as S from './styles';

import Header from '@/components/Header';
import Tags from '@/components/Tags';
import Posts from '@/components/Posts';

type Props = {
  tags: Tag[];
  posts: Post[];
};

export default function HomePage({ tags, posts }: Props) {
  return (
    <S.Container>
      <Header />
      <S.Divider />
      <Tags tags={tags} />
      <Posts posts={posts} />
    </S.Container>
  );
}
