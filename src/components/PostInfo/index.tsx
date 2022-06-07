import { Post } from '@/types/index';

import PostTags from '@/components/common/PostTags';

import * as S from './styles';

type Props = {
  post: Post;
};

export default function PostInfo({ post }: Props) {
  const { title, createdTime, tags } = post;

  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <p>{createdTime}</p>
      <PostTags tags={tags} />
    </S.Wrapper>
  );
}
