import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 5rem 0 3rem 0;

  @media screen and (max-width: ${({ theme }) => theme.size.tablet}) {
    h1 {
      font-size: 1.1rem;
    }
    font-size: 0.7rem;
  }

  & > p {
    margin-top: 0.5rem;
    font-weight: 600;
  }
`;
