import styled from '@emotion/styled';

export const Tags = styled.ul`
  display: flex;
  margin-top: 0.5rem;

  li {
    margin-right: 0.6rem;
  }

  p {
    color: ${({ theme }) => theme.color.brand};
    font-weight: 600;
  }
`;
