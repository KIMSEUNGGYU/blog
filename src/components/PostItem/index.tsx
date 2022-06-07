import Link from 'next/link';

import { Post } from '@/types/index';

import * as S from './styles';

import PostTags from '@/components/common/PostTags';

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { title, createdTime, description, tags } = post;

  return (
    <S.PostItem>
      <Link
        href={{
          pathname: `/posts/${post.id}`,
          query: { post: JSON.stringify(post) },
        }}
        as={`/posts/${post.id}`}
      >
        <a>
          <div>
            <S.Title>{title}</S.Title>
          </div>
          <S.Description>
            <span>{description}</span>
          </S.Description>
          <S.Footer>
            <PostTags tags={tags} />
            <S.CreatedAt>{createdTime}</S.CreatedAt>
          </S.Footer>
        </a>
      </Link>
    </S.PostItem>
  );
}
