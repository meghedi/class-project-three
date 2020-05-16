import React from "react";

function SearchForm(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for your favorite food"
            id="search"
            onChange={props.handleInputChange}
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
          </button>
        </div>
      </form>
    );
  }


export default SearchForm;