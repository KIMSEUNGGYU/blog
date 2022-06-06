import { useSelector } from 'react-redux';

import { Post } from '../../types';

import { RootState } from '@/src/modules/store';

import { DEFAULT_SELECTED_TAG } from '@/src/constant';

import Posts from '@/src/components/Posts';

type Props = {
  posts: Post[];
};

export default function PostsContainer({ posts }: Props) {
  const { selectedTag } = useSelector((state: RootState) => state);

  const selectedTagTagName = selectedTag.slice(1);
  const getSelectedPosts = (post: Post) => {
    if (selectedTag === DEFAULT_SELECTED_TAG) {
      return post;
    }

    return post.tags.map((tag) => tag.name).includes(selectedTagTagName);
  };

  posts = posts.filter(getSelectedPosts);

  return (
    <Posts
      posts={posts} //
    />
  );
}
