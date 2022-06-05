import styled from '@emotion/styled';

export const PostItem = styled.li`
  list-style: none;
  background-color: white;
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
    color: rgba(0, 0, 0, 0.85);
  }
`;

export const Description = styled.div`
  margin-top: 0.5rem;
  & span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.65);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Tags = styled.ul`
  display: flex;
  margin-top: 0.5rem;
  p {
    color: #1890ff;
  }

  li {
    margin-right: 0.6rem;
  }
`;

export const CreatedAt = styled.p`
  font-weight: 600;
  color: rgba(0, 0, 0, 0.65);
`;
