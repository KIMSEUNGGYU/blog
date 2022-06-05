import { render } from '@testing-library/react';

import POSTS from '@/fixture/posts';

import Posts from '.';

import { Post } from '@/types/index';

describe('Posts', () => {
  function renderComponent(posts: Post[]) {
    return render(<Posts posts={posts} />);
  }

  describe('게시물(posts)가 주어진 경우', () => {
    it('전달 받은 모든 게시물을 렌더링한다', () => {
      const posts = POSTS;

      const { container } = renderComponent(posts);

      posts.forEach((post) => {
        expect(container).toHaveTextContent(post.title);
        expect(container).toHaveTextContent(post.createdTime);
        expect(container).toHaveTextContent(post.description);
        post.tags.map((tag) => {
          expect(container).toHaveTextContent(`#${tag.name}`);
        });
      });
    });
  });

  describe('게시물(posts)이 주어지지 않는 경우', () => {
    it('게시물이 존재하지 않는 문구를 렌더링한다.', () => {
      const { container } = renderComponent([]);

      expect(container).toHaveTextContent(`등록된 게시물이 존재하지 않습니다.`);
    });
  });
});
