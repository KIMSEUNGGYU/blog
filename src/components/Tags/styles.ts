import styled from '@emotion/styled';

export const TagList = styled.ul`
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.background.second};
  display: flex;
  border-radius: 5px;
  padding: 1rem;
  gap: 1rem;
  overflow-x: scroll;

  // 스크롤바 전체
  ::-webkit-scrollbar {
    height: 0.5rem;
  }
`;
