import { Tag, Post } from '@/types/index';

import TagsContainer from '@/src/containers/Tags';
import PostsContainer from '@/src/containers/Posts/';

type Props = {
  tags: Tag[];
  posts: Post[];
};

export default function HomePage({ tags, posts }: Props) {
  return (
    <>
      <TagsContainer
        tags={tags} //
      />
      <PostsContainer
        posts={posts} //
      />
    </>
  );
}
