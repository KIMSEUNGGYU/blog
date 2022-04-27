import { render } from '@testing-library/react';

import HomePage from './';

describe('HomePage', () => {
  it('render header', () => {
    const { container } = render(<HomePage />);

    expect(container.innerHTML).toContain('<img alt="logo"');
    expect(container).toHaveTextContent('블로그');
    expect(container).toHaveTextContent('시리즈');
  });
});
