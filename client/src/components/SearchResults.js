import React, {useContext} from "react";
import Media from "./Media";
import { Container, Row, Col } from "reactstrap";
import {auth0Context} from "../contexts/Auth0Context";


function SearchResults(props) {
  const {
    user,
    loginWithRedirect,
  } = useContext(auth0Context);

  return (
    <Container className="mt-5">
        <Row>
          <Col className="ml-auto mr-auto" md="9">
            {props.results.map((result) => (
              <Media
                key={result.id}
                restaurant={result.name}
                image={result.image_url}
                rating={result.rating}
                cuisines={result.categories}
                address={result.location.display_address.join("")}
                displayPhone={result.display_phone}
                phone={result.phone}
                link={result.url}
                handleSave={() =>{
                  if(!user){
                    loginWithRedirect({});
                  }else{
                  props.handleSave({
                    restaurantId: result.id,
                    restaurant: result.name,
                    cuisines: result.categories,
                    location:result.location.display_address.join(", "),
                    phone:result.phone,
                    rating:result.rating,
                    image: result.image_url,
                    link: result.url
                  }, result.id)
                }
              }
                }
              />
            ))}
          </Col>
        </Row>
    </Container>
  );
}

export default SearchResults;
