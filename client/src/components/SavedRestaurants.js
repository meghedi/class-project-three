import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SavedMedia from "./SavedMedia";

function SavedRestaurants() {
  const [restaurantState, setRestaurantState] = useState([]);

useEffect(() => {
    loadRestaurants();
}, []);

 function loadRestaurants(){
  const fetchData = async () => {
    const result = await API.getRestaurants();
    setRestaurantState([...result.data]);
  };

  fetchData();
 }   

  function deleteRestaurant(id){
    API.deleteRestaurant(id)
    .then(()=>loadRestaurants())
    .catch((err) => console.log(err));
  }

 
  return (
    <div>
      {restaurantState.length ? ( 
      <ul >
        {restaurantState.map((item) => (
          <li className="list-group-item mb-3" key={item._id}>
            <SavedMedia
              title={item.restaurant}
              imgsrc={item.image}
              rating={item.rating} 
              location={item.location}
              phone={item.phone}
              previewLink = {item.link}
              cuisines ={item.categories}
              handleDeleteRestuarant={deleteRestaurant} 
              id={item._id} />
          </li>
        ))}
      </ul>
      ): (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default SavedRestaurants;
