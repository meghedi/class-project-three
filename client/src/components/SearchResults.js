import React from "react";

function SearchResults(props) {
  return(
    <>
    {props.results.length ? (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item mb-3" key={result.id}>
          here
        </li>
      ))}
    </ul>
    ):(
      <h3>No Results to Display</h3>
    )}
    </>
  );
}


export default SearchResults;
