import styled from 'styled-components';
export const StyledRow = styled.div`
  min-width: 1100px;
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
  text-align: end;

  :first-child {
    text-align: start;
  }
`;
