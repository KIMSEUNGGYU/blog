import styled from '@emotion/styled';

export const NotionRenderGlobalStyle = styled.div`
  ul,
  ol {
    li + ul,
    li + ol {
      padding-left: 0;
    }
  }
`;
