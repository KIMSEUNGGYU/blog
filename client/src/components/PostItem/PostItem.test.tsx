import { render } from '@testing-library/react';

import PostItem from '.';

import POSTS from '../../../fixture/posts';

describe('PostItem', () => {
  it('render', () => {
    const post = POSTS[0];

    const { container } = render(<PostItem post={post} />);

    expect(container).toHaveTextContent(post.title);
    expect(container).toHaveTextContent(post.createdAt);
    expect(container).toHaveTextContent(post.contents);
    post.tags.map((tag) => {
      expect(container).toHaveTextContent(tag);
    });
  });
});
