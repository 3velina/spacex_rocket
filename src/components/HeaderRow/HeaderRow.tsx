import React from 'react';
import { StyledCell, StyledRow } from './style';

interface HeaderRowProps {
  headers: string[];
}

const HeaderRow: React.FC<HeaderRowProps> = ({ headers }) => (
  <StyledRow>
    {headers.map((header, index) => (
      <StyledCell key={index}>{header}</StyledCell>
    ))}
  </StyledRow>
);

export default HeaderRow;
