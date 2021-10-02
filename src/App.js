import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyle from "./components/styled/globalStyle";
import Header from "./components/styled/Header";
import data from "./data";
import Card from "./components/Card";
import Cards from "./components/styled/Cards";

function App() {

  const cards = data.map(job => <Card job={job} onClickTag={handleOnClickTag}/>)

  function handleOnClickTag(e) {
    console.log(e);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Cards>
        {cards}
      </Cards>
    </ThemeProvider>
  );
}

export default App;
