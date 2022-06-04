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
    img {
      width: 1rem;
      height: 1rem;
      position: absolute;
      top: 0;
      right: 0;
    }
    img:hover {
      cursor: pointer;
      filter: 'invert(44%) sepia(40%) saturate(3356%) hue-rotate(191deg) brightness(100%) contrast(102%)';
    }
  }
`;

export const Title = styled.h2`
  margin-right: 1rem;
  color: rgba(0, 0, 0, 0.85);
`;

export const CreatedAt = styled.p`
  font-weight: 600;
  color: rgba(0, 0, 0, 0.65);
`;

export const Contents = styled.div`
  margin-top: 0.5rem;
  & span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.65);
  }
`;

export const Tags = styled.ul`
  margin-top: 0.5rem;
  p {
    color: #1890ff;
  }
`;
