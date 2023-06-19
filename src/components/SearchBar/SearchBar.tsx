import SearchInput from '../SearchInput/SearchInput';
import { StyledSearchBar } from './style';

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <h3>SpaceX rockets</h3>
      <p>3 Results</p>
      <SearchInput />
    </StyledSearchBar>
  );
};

export default SearchBar;
