import TableRow from '../TableRow';
import HeaderRow from '../HeaderRow';
import { StyledNoResultsParagraph, StyledTableContainer } from './style';
import { useEffect } from 'react';

interface TableProps {
  headers: string[];
  rows: Record<string, string>[];
  searchTerm: string;
  setResultCount: (resultCount: number) => void;
}

const Table = ({ headers, rows, searchTerm, setResultCount }: TableProps) => {
  const filteredRows = searchTerm
    ? rows.filter((row) =>
        Object.values(row).some((value) =>
          value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : rows;

  useEffect(() => {
    setResultCount(filteredRows.length);
  }, [filteredRows]);

  return filteredRows.length > 0 ? (
    <StyledTableContainer>
      <HeaderRow headers={headers} />
      {filteredRows.map((row, rowIndex) => (
        <TableRow key={rowIndex} row={row} headers={headers} />
      ))}
    </StyledTableContainer>
  ) : (
    <StyledNoResultsParagraph>Nothing found...</StyledNoResultsParagraph>
  );
};

export default Table;
