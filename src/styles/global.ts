import { css } from '@emotion/react';

const global = css`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    margin: 0;
    padding: 0;
    background: #f7f7f7;
    box-sizing: border-box;
  }
  ul,
  ol {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
  button {
    all: unset;
  }
  h1,
  h2 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  a {
    cursor: text;
    text-decoration: none;
    color: black;
  }
`;

export default global;
