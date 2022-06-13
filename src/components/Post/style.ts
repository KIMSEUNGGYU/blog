import styled from '@emotion/styled';

// notion 기본 스타일을 내 블로그에 맞게 custom
export const NotionRenderGlobalStyle = styled.div`
  main {
    margin: 0;
    max-width: 100%;
    width: 100%;
    padding: 0;
    margin-bottom: 5rem;

    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.notion};

    @media screen and (max-width: ${({ theme }) => theme.size.tablet}) {
      font-size: 1rem;

      .notion-code {
        overflow-y: hidden;
      }
    }
  }

  ul,
  ol {
    width: 100%;
    li + ul,
    li + ol {
      padding-left: 0;
    }
  }
`;
