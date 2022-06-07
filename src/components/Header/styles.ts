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
    color: #40a9ff;
  }
  li:active {
    color: #096dd9;
  }
  li.active {
    color: #096dd9;
  }

  /* TODO-GYU: DELETE - 기능 개발 전까지 임시 스타일 */
  li.todo {
    cursor: text;
    color: black;
  }
`;
