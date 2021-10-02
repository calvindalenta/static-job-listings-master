import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyle from "./components/styled/globalStyle";
import Header from "./components/styled/Header";
import data from "./data";
import Card from "./components/Card";
import Cards from "./components/styled/Cards";
import { useState } from "react";
import FilterItem from "./components/FilterItem";
import StyledFilter from "./components/styled/Filter.styled";
import CloseButton from "./components/styled/CloseButton";
import FilterTags from "./components/styled/FilterTags";

function App() {

  const [filter, setFilter] = useState([]);
  const filteredCards = data.filter(job => {
    if (filter.length === 0) return true;
    const tags = [job.role, job.level, ...job.tools, ...job.languages];
    return filter.every(keyword => tags.includes(keyword));
  });

  const cards = filteredCards.map(job => <Card key={job.logo} job={job} onClickTag={handleOnClickTag}/>)
  const filterItems = filter.map((item, index) => <FilterItem key={index} itemName={item} index={index} onClick={handleOnClickFilterItem}></FilterItem>)

  function handleOnClickTag(keyword) {
    if (filter.includes(keyword)) return;
    const newFilter = [...filter, keyword]
    setFilter(newFilter);
  }

  function handleOnClickFilterItem(index){
    const newFilter = filter.slice()
    newFilter.splice(index, 1);
    setFilter(newFilter);
  }

  function handleCloseButton(){
    setFilter([]);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Cards>
        {filterItems.length !== 0 && 
        <StyledFilter>
          <FilterTags>{filterItems}</FilterTags>
          <CloseButton onClick={handleCloseButton}>Close</CloseButton>
        </StyledFilter>
        }
        {cards}
      </Cards>
    </ThemeProvider>
  );
}

export default App;
