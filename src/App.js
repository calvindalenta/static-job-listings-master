import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyle from "./components/styled/globalStyle";
import Header from "./components/styled/Header";
import data from "./data";
import Card from "./components/Card";
import Cards from "./components/styled/Cards";
import { useState } from "react";
import FilterItem from "./components/FilterItem";

function App() {

  const [filter, setFilter] = useState([]);
  const filteredCards = data.filter(job => {
    if (filter.length === 0) return true;
    const tags = [job.role, job.level, ...job.tools, ...job.languages];
    return filter.every(keyword => tags.includes(keyword));
  });

  const cards = filteredCards.map(job => <Card key={job.logo} job={job} onClickTag={handleOnClickTag}/>)
  const filterItems = filter.map(item => <FilterItem>{item}</FilterItem>)

  function handleOnClickTag(keyword) {
    const newFilter = [...filter, keyword]
    setFilter(newFilter);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {filterItems}
      <Cards>
        {cards}
      </Cards>
    </ThemeProvider>
  );
}

export default App;
