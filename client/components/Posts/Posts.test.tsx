import { render } from '@testing-library/react';

import POSTS from '../../fixture/posts';

import Posts from '.';

describe('Posts', () => {
  it('render - posts 가 있는 경우', () => {
    const posts = POSTS;

    const { container } = render(<Posts posts={posts} />);

    posts.forEach((post) => {
      expect(container).toHaveTextContent(post.title);
      expect(container).toHaveTextContent(post.createdAt);
      expect(container).toHaveTextContent(post.contents);
      post.tags.map((tag) => {
        expect(container).toHaveTextContent(tag);
      });
    });
  });

  it('render - posts 가 존재하지 않는 경우', () => {
    const { container } = render(<Posts posts={[]} />);

    expect(container).toHaveTextContent(`등록된 게시물이 존재하지 않습니다.`);
  });
});
