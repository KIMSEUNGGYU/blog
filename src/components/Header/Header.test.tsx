import { render } from '@testing-library/react';

import Header from '.';

describe('Header', () => {
  it('render', () => {
    const { container } = render(<Header />);

    expect(container.innerHTML).toContain('<img alt="logo"');
    expect(container).toHaveTextContent('블로그');
    expect(container).toHaveTextContent('시리즈');
  });
});
