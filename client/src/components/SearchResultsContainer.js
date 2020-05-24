import React, { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import API from "../utils/API";
import FoodCard from "./FoodCard";


function SearchResultContainer() {
  const [searchState, setSearchState] = useState("");
  const [locationState, setLocationState] = useState("Los Angeles, CA");

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
      location: locationState,
      rating: "5",
      limit: 5
    };
    searcbyFood(searchRequest);  
  }

  const handleInputChange = event => {
    setSearchState(event.target.value);
    setLocationState(event.target.value);
  };

  const handleSave = searchData =>{
    console.log(searchData);
    saveRestaurant(searchData);
  }

  const keyPressed = event =>{
    if (event.key === "Enter") {handleFormSubmit(event)}
  } 

  return (
    <div>
      <SearchForm search={searchState} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} handleKeyPress={keyPressed}/>
      <FoodCard handleSelect={searcbyFood} />
      <SearchResults results={resultState} handleSave={handleSave} />
    </div>
  );
}

export default SearchResultContainer;
