import React from "react";
import { Row } from "reactstrap";


function SearchForm(props) {
    return (
      <form>
        <div className="form-group" style={{margin: "20px auto", maxWidth:"600px", marginBottom:"40px"}}>
         <Row>
         <div className="col"  style={{paddingRight:"5px"}}>
          <input
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for your favorite food"
            id="search"
            onChange={props.handleInputChange}
            onKeyPress = {props.handleKeyPress}
          />
          </div>
          <div className="col" style={{paddingLeft:"5px"}}>
          <input
            name="location"
            type="text"
            className="form-control"
            placeholder="Los Angeles, CA"
            id="location"
            onChange={props.handleInputChange}
          />
         </div>
         <div>
          <button onClick={props.handleFormSubmit} className="btn btn-danger">
            Search
          </button>
 </div>
 </Row>
        </div>
      </form>
    );
  }


export default SearchForm;