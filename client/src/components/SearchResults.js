import React from "react";
import Media from "./Media";
import { Container, Row, Col } from "reactstrap";

function SearchResults(props) {
  return (
    <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            {props.results.map((result) => (
              <Media
                key={result.id}
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
    </Container>
  );
}

export default SearchResults;
