import styled from 'styled-components';
export const StyledRow = styled.div`
  padding-right: 28px;
  padding-left: 28px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledCell = styled.div`
  flex: 1;
  padding: 10px;
  color: var(--text-secondary);
  font-weight: 500;
  text-align: right;

  :first-child {
    text-align: start;
  }
`;
