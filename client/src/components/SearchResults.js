import React from "react";
import Media from "./Media";

function SearchResults(props) {
  return(
    <>
    {props.results.length ? (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item mb-3" key={result.id}>
       <Media 
          restaurant={result.name} 
          image={result.image_url} 
          cuisines={result.categories}
          link = {result.link}
          handleSave={()=>props.handleSave({restaurant: result.name, cuisines:result.categories, image:result.image_url, link:result.link})}/>
          />
        </li>
      ))}
    </ul>
    ):(
      <h3></h3>
    )}
    </>
  );
}


export default SearchResults;
