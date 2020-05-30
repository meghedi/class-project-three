import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import SavedMedia from "./SavedMedia";
import { Container, Row, Col } from "reactstrap";

import { auth0Context } from "../contexts/Auth0Context";


function SavedRestaurants() {

  const {
    isLoading,
    user,
    getTokenSilently,
  } = useContext(auth0Context);


  const [restaurantState, setRestaurantState] = useState([]);

useEffect(() => {
  if(!isLoading) loadRestaurants();
}, [getTokenSilently]);

 function loadRestaurants(){

  const fetchData = async () => {
    let token = await getTokenSilently();

   const result =  await API.getRestaurants(user.sub,token);
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


<Container className="mt-5">
      <Row>
        <Col className="ml-auto mr-auto" md="9">
          {restaurantState.length ? (
              restaurantState.map((item) => (
                  <SavedMedia
                    key={item._id}
                    title={item.restaurant}
                    imgsrc={item.image}
                    rating={item.rating}
                    location={item.location}
                    phone={item.phone}
                    previewLink={item.link}
                    cuisines={item.cuisines}
                    handleDeleteRestuarant={deleteRestaurant}
                    id={item._id}
                  />
              ))
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
/*
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
              cuisines ={item.cuisines}
              handleDeleteRestuarant={deleteRestaurant} 
              id={item._id} />
          </li>
        ))}
      </ul>
      ): (
        <h3>No Results to Display</h3>
      )}
    </div>
  );*/
}

export default SavedRestaurants;
