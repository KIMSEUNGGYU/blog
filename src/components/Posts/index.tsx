import * as S from './styles';

import { Post } from '@/types/index';

import PostItem from '../PostItem';

type Props = {
  posts: Post[];
};

export default function Posts(props: Props) {
  const posts = props.posts;

  if (posts.length === 0) {
    return (
      <S.PostList>
        <p>등록된 게시물이 존재하지 않습니다.</p>
      </S.PostList>
    );
  }

  return (
    <S.PostList>
      {posts.map((post) => (
        <PostItem
          key={post.id} //
          post={post}
        />
      ))}
    </S.PostList>
  );
}
