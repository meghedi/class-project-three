import React from "react";
import { Form, Row, FormGroup, Col } from "reactstrap";

function SearchForm(props) {
  return (
    <Form>
      <Row form className="justify-content-center">
        <Col md={3} className="px-3">
          <FormGroup>
            <input
              name="search"
              type="text"
              className="form-control"
              placeholder="Search for your favorite food"
              id="search"
              onChange={props.handleInputChange}
              onKeyPress={props.handleKeyPress}
            />
          </FormGroup>
        </Col>
        <Col md={3} className="px-3">
          <FormGroup>
            <input
              name="location"
              type="text"
              className="form-control"
              placeholder="Los Angeles, CA"
              id="location"
              onChange={props.handleInputChange}
            />
          </FormGroup>
        </Col>
        <Col md={1} className="mb-3">
          <button onClick={props.handleFormSubmit} className="btn btn-danger">
            Search
          </button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchForm;
