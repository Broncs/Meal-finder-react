import Search from './components/Search';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Meal Finder</h1>
        <Search />
      </Container>
    </>
  );
}

export default App;
