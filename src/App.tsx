import GlobalStyles from './styles/GlobalStyles';
import { StyledSectionContainer } from './styles/SectionContainer';
import SearchTable from './components/SearchTable';

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <section>
          <StyledSectionContainer>
            <SearchTable />
          </StyledSectionContainer>
        </section>
      </main>
    </>
  );
}

export default App;
