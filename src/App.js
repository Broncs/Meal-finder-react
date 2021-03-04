import Search from './components/Search';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 3rem;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Meal Finder</Title>
        <Search />
      </Container>
    </>
  );
}

export default App;
