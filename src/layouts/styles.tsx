import styled from '@emotion/styled';

export const Container = styled.div`
  width: 80%;
  max-width: 980px;
  margin: 0 auto;
`;

export const Divider = styled.hr`
  width: 100%;
  position: absolute;
  left: 0;
  border-color: ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.border};
  margin: 0;
`;

export const Main = styled.main`
  margin-top: 5rem;
`;
