import SearchInput from '../SearchInput/SearchInput';
import { StyledSearchBar } from './style';

interface SearchBarProps {
  resultCount: number | null;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  resultCount,
  setSearchTerm,
}) => {
  return (
    <StyledSearchBar>
      <h3>SpaceX rockets</h3>
      {resultCount === 1 ? (
        <p>{resultCount} Result</p>
      ) : resultCount ? (
        <p>{resultCount} Results</p>
      ) : (
        <p>No results</p>
      )}
      <SearchInput setSearchTerm={setSearchTerm} />
    </StyledSearchBar>
  );
};

export default SearchBar;
