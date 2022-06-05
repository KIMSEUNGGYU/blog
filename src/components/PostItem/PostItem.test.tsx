import { render } from '@testing-library/react';

import PostItem from '.';

import POSTS from '@/fixture/posts';

describe('PostItem', () => {
  it('전달받은 post 데이터를 렌더링한다.', () => {
    const post = POSTS[0];

    const { container } = render(<PostItem post={post} />);

    expect(container).toHaveTextContent(post.title);
    expect(container).toHaveTextContent(post.createdTime);
    expect(container).toHaveTextContent(post.description);
    post.tags.map((tag) => {
      expect(container).toHaveTextContent(`#${tag.name}`);
    });
  });
});
