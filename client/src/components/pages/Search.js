import React from "react";
import SearchResultContainer from '../SearchResultsContainer';
import Wrapper from "../Wrapper";
import Footer from "../Footer";
import Foodcard from "../FoodCard";


function Search() {
  return (
    <Wrapper>
      <SearchResultContainer />
      <Foodcard />
      <Footer />
    </Wrapper>
  );
}

export default Search;
