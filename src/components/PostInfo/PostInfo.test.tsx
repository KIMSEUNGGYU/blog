import { render } from '@/src/test-utils/test-utils';

import PostInfo from '.';

import POSTS from '@/fixture/posts';

describe('PostInfo', () => {
  it('게시물의 제목, 생성일, 태그들을 렌더링한다.', () => {
    const post = POSTS[0];

    const { container } = render(<PostInfo post={post} />);

    expect(container).toHaveTextContent(post.title);
    expect(container).toHaveTextContent(post.createdTime);
    post.tags.map((tag) => {
      expect(container).toHaveTextContent(`#${tag.name}`);
    });
  });
});
