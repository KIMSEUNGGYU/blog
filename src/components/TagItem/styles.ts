import styled from '@emotion/styled';

export const TagItem = styled.li`
  margin-right: 1rem;
  writing-mode: vertical-lr;
  button {
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.background.third};
    border: 1px solid ${({ theme }) => theme.background.fourth};
    border-radius: 0.5rem;
  }
  button:hover {
    cursor: pointer;
    font-weight: bold;
    color: ${({ theme }) => theme.color.hover};
  }
  button.active {
    cursor: pointer;
    color: ${({ theme }) => theme.color.active};
    font-weight: bold;
  }
`;
