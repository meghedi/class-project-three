import React from "react";
import Media from "./Media";
import { Container, Row, Col } from "reactstrap";

function SearchResults(props) {
  return (
    <Container className="mt-5">
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            {props.results.map((result) => (
              <Media
                key={result.id}
                restaurant={result.name}
                image={result.image_url}
                cuisines={result.categories}
                address={result.location.display_address}
                displayPhone={result.display_phone}
                phone={result.phone}
                link={result.url}
                handleSave={() =>
                  props.handleSave({
                    restaurant: result.name,
                    cuisines: result.categories,
                    address:result.location.display_address,
                    phone:result.phone,
                    rating:result.rating,
                    image: result.image_url,
                    link: result.url
                  })
                }
              />
            ))}
          </Col>
        </Row>
    </Container>
  );
}

export default SearchResults;
