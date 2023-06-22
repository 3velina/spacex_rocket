import React from 'react';
import { StyledCell, StyledRow } from './style';

interface RowProps {
  row: Record<string, string>;
  headers: string[];
}

const TableRow: React.FC<RowProps> = ({ row, headers }) => (
  <StyledRow>
    {headers.map((header) => (
      <StyledCell key={header}>{row[header]}</StyledCell>
    ))}
  </StyledRow>
);

export default TableRow;
