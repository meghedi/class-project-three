import React from "react";
// import Image from 'react-bootstrap/Image';
import HeaderImage from "./HeaderImage";


function Wrapper(props) {
  return (
    <div
      className="container-fluid"
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <HeaderImage />

      <h1 className= "display-4 mt-5" style= {{color: "black" , fontFamily: "Sofia"}}>Dining out is better when you share! </h1>
      {window.location.pathname === "/saved" ? (
         <p className="lead" style= {{color: "black", fontFamily: "Sofia"}} >
         Your Favorites foods and restaurants
       </p>
      ):(
      <p className="lead" style= {{color: "black", fontFamily: "Sofia"}} >
        Search for your favorite foods and best restaurants
      </p>
      )}
      <div>{props.children}</div>
    </div>
  );
}
export default Wrapper;
