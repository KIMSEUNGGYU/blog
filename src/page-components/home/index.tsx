import { Tag, Post } from '@/types/index';

import * as S from './styles';

import Header from '@/components/Header';
import TagsContainer from '@/src/containers/Tags';
import PostsContainer from '@/src/containers/Posts/';

type Props = {
  tags: Tag[];
  posts: Post[];
};

export default function HomePage({ tags, posts }: Props) {
  return (
    <S.Container>
      <Header />
      <S.Divider />
      <TagsContainer
        tags={tags} //
      />
      <PostsContainer
        posts={posts} //
      />
    </S.Container>
  );
}
