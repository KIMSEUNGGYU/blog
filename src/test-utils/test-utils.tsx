import { ThemeProvider } from '@emotion/react';

import { render } from '@testing-library/react';

import theme from '@/styles/theme';
import React from 'react';

type Props = {
  children: React.ReactElement;
};
const AllTheProvider = ({ children }: Props) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

function customRender(ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>, options?: any) {
  return render(ui, { wrapper: AllTheProvider, ...options });
}

export * from '@testing-library/react';

export { customRender as render };
