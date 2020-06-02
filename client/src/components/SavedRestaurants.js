import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import Media from "./Media";
import { Container, Row, Col } from "reactstrap";

import { auth0Context } from "../contexts/Auth0Context";

function SavedRestaurants() {
  const { user, getTokenSilently } = useContext(auth0Context);

  const [restaurantState, setRestaurantState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let token = await getTokenSilently();

      const result = await API.getRestaurants(user.sub, token);
      return result;
    };
    fetchData().then((result) => setRestaurantState([...result.data]));
  }, [getTokenSilently, user.sub]);

  function deleteRestaurant(id) {
    API.deleteRestaurant(id)
      .then(() => {
        const newRestaurantState = restaurantState.filter((r) => r._id !== id);
        console.log(newRestaurantState);
        setRestaurantState(newRestaurantState);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container className="mt-5">
      {/* <Row> */}
          {restaurantState.length ? (
            restaurantState.map((item) => (
              // <Col md="4" key={item._id} >
              <Media
                restaurant={item.restaurant}
                image={item.image}
                rating={item.rating}
                address={item.location}
                phone={item.phone}
                displayPhone={item.phone}
                link={item.link}
                cuisines={item.cuisines}
                handleDeleteRestuarant={deleteRestaurant}
                id={item._id}
              />
              // </Col>
            ))
          ) : (
            <h3>No Results to Display</h3>
          )}
      {/* </Row> */}
    </Container>
  );
}

export default SavedRestaurants;
