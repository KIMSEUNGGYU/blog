import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  p,
  button {
    margin-top: 2rem;
  }

  p {
    color: ${({ theme }) => theme.color.secondary};
    font-size: 1.2rem;
  }

  button {
    padding: 0.5rem;
    font-weight: bold;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.brand};
    cursor: pointer;
  }
  button:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
  button:active {
    background-color: ${({ theme }) => theme.color.active};
  }
`;
