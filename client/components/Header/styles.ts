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
`;
