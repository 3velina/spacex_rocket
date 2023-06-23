import styled from 'styled-components';
export const StyledRow = styled.div`
  min-width: 1100px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 26px;
  padding-left: 28px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const StyledCell = styled.div`
  flex: 1;
  padding: 10px;
  color: var(--text-secondary);
  font-weight: 500;
  text-align: end;

  &:first-of-type {
    text-align: start;
  }
`;
