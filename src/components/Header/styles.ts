import styled from '@emotion/styled';

export const Wrapper = styled.header`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  position: relative;
  justify-content: space-between;

  .hamburger {
    display: none;
  }

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

  /* TODO-hamburger */
  @media screen and (max-width: 767px) {
    flex-direction: column;
    .hamburger {
      display: block;
      font-size: 36px;
      position: absolute;
      right: 0px;
    }
    nav {
      display: none;
      align-items: flex-end;
      flex-direction: column;
    }
    nav.active {
      display: flex;
    }
    li {
      padding: 8px 0;
      font-size: 1.5rem;
    }
  }
`;
