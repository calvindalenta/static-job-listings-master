import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyle from "./components/styled/globalStyle";
import Header from "./components/styled/Header";
import data from "./data";
import Card from "./components/Card";

function App() {

  const cards = data.map(job => <Card job={job} />)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {cards}
    </ThemeProvider>
  );
}

export default App;
