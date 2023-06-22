import styled from 'styled-components';
export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 3px;
`;

export const StyledCell = styled.div`
  flex: 1;
  padding: 10px;
  color: var(--text-secondary);
  padding-right: 28px;
  padding-left: 28px;
  text-align: right;

  :first-child {
    text-align: start;
  }
`;
