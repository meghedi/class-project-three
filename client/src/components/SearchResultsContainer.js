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
      setResultState([...response.data.businesses]);
      console.log(response.data.businesses);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const saveRestaurant = searchData => {
    console.log(searchData);
    API.saveRestaurant(searchData).then((res)=>console.log(res)
     ).catch(err => console.log(err));
  }

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

  const handleSave = searchData =>{
    saveRestaurant(searchData);
  }

  return (
    <div>
      <SearchForm search={searchState} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} />
      <SearchResults results={resultState} handleSave={handleSave} />
    </div>
  );
}

export default SearchResultContainer;
