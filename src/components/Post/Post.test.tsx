import styled from '@emotion/styled';

export const Wrapper = styled.div`
  ul,
  ol {
    li + ul,
    li + ol {
      padding-left: 0;
    }
  }
`;
