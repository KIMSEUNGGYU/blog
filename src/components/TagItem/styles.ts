import styled from '@emotion/styled';

export const TagItem = styled.li`
  margin-right: 1rem;
  button {
    padding: 0.5rem;
    border: 1px solid #f7f7f7;
    background-color: #f7f7f7;
    border-radius: 0.5rem;
    font-size: 16px;
  }
  button:hover {
    cursor: pointer;
    color: #40a9ff;
  }
  button.active {
    cursor: pointer;
    color: #096dd9;
    font-weight: bold;
  }
`;
