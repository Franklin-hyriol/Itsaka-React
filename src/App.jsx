import GlobalStyle from "./Global.styled"
import styled, {ThemeProvider} from "styled-components";
import Theme from "./Theme.styled";
import Navbar from "./components/Navbar";

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Container>
        <Navbar />
      </Container>
    </ThemeProvider>
  )
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;



