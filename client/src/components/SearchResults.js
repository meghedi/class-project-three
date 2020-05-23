import React from "react";
import Media from "./Media";
import { Container, Row, Col } from "reactstrap";

function SearchResults(props) {
  return (
    <Container>
      {props.results.length ? (
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            {props.results.map((result) => (
              <Media
                restaurant={result.name}
                image={result.image_url}
                cuisines={result.categories}
                link={result.link}
                handleSave={() =>
                  props.handleSave({
                    restaurant: result.name,
                    cuisines: result.categories,
                    image: result.image_url,
                    link: result.link,
                  })
                }
              />
            ))}
          </Col>
        </Row>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </Container>
  );
}

export default SearchResults;
