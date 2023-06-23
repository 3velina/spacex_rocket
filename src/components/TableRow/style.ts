import styled from 'styled-components';
export const StyledRow = styled.div`
  min-width: 1100px;
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
  text-align: end;
  padding-right: 24px;

  &:first-of-type {
    text-align: start;
    padding-left: 30px;
  }
`;
