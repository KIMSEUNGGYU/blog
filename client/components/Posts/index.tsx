import * as S from './styles';

import PostItem from '../PostItem';

// TODO-GYU: DELTE
// 후에 api 요청 후 실제 데이터랑 연동
// 임시 정적인 데이터로 렌더링
import POSTS from '../../fixture/posts';

type PostsProps = {
  posts: any[];
};

export default function Posts(props: PostsProps) {
  const posts = props.posts || POSTS;

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
