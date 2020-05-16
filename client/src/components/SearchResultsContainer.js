import React, { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import API from "../utils/API";

function SearchResultContainer() {
  const [searchState, setSearchState] = useState("");
  const [resultState, setResultState] = useState([]);

  let searcbyFood = (query) => {
    API.search(query)
    .then((response) => {
      console.log(response.data.businesses);
      setResultState([...response.data.businesses]);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    const searchRequest = {
      term: searchState,
      location: "91206",
      rating: "5",
      limit: 5
    };
    searcbyFood(searchRequest);  
  }

  const handleInputChange = event => {
    setSearchState(event.target.value);
  };

  return (
    <div>
      <SearchForm search={searchState} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} />
      <SearchResults results={resultState} />
    </div>
  );
}

export default SearchResultContainer;
