import SearchBar from './components/SearchBar';
import GlobalStyles from './styles/GlobalStyles';
import { StyledSectionContainer } from './styles/SectionContainer';

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <section>
          <StyledSectionContainer>
            <SearchBar />
          </StyledSectionContainer>
        </section>
      </main>
    </>
  );
}

export default App;
