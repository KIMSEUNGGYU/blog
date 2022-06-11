import styled from '@emotion/styled';

export const PostItem = styled.li`
  list-style: none;
  background-color: ${({ theme }) => theme.background.second};
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    border: 1px solid #1890ff;
  }
  & div {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Title = styled.h1`
  margin-right: 1rem;
  & {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
`;

export const Description = styled.div`
  margin-top: 0.5rem;
  font-weight: 500;
  & span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CreatedAt = styled.p``;
