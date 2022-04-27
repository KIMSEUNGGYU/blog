import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('render test', () => {
    render(<Header />);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});
