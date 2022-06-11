import styled from '@emotion/styled';

export const Wrapper = styled.header`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  img:hover {
    cursor: pointer;
  }
  nav {
    display: flex;
  }
  li {
    list-style: none;
    margin-left: 1rem;
    font-size: 2rem;
  }
  li:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.hover};
  }
  li.active {
    color: ${({ theme }) => theme.color.active};
  }

  /* TODO-GYU: DELETE - 기능 개발 전까지 임시 스타일 */
  li.todo {
    cursor: text;
    color: ${({ theme }) => theme.color.disable};
  }
`;
