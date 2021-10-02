import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styled/globalStyle";
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      WOW!
    </ThemeProvider>
  );
}

export default App;
