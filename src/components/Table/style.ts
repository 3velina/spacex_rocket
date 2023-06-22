import styled from 'styled-components';

export const StyledTable = styled.div`
  /* overflow-x: auto; */
`;

export const StyledTableContainer = styled.div`
  /* min-width: 1100px; */
  overflow-x: scroll;

  div:first-child {
    background-color: none;
  }
`;

export const StyledNoResultsParagraph = styled.p`
  padding: 20px 28px;
  color: var(--text-secondary);
`;
