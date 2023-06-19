import { StyledSearchInput } from './style';

const SearchInput = () => {
  return (
    <StyledSearchInput>
      <input type='text' placeholder='Search' />
      <div className='search-icon'>
        <img src='../../../search-icon.svg' alt='Search Icon' />
      </div>
    </StyledSearchInput>
  );
};

export default SearchInput;
