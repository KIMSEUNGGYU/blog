import styled from '@emotion/styled';

export const TagList = styled.ul`
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.background.second};

  display: flex;
  border-radius: 5px;
  padding: 1rem;

  // TODO-GYU: 스타일 적용
  // 태그 선택시 자동스크롤 및 UI 업데이트
  overflow-x: scroll;
`;
