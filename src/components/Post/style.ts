import styled from '@emotion/styled';

// notion 기본 스타일을 내 블로그에 맞게 custom
export const NotionRenderGlobalStyle = styled.div`
  ul,
  ol {
    li + ul,
    li + ol {
      padding-left: 0;
    }
  }

  main {
    margin: 0;
    max-width: 100%;
    width: 100%;
    padding: 0;
    margin-bottom: 5rem;
  }
`;
