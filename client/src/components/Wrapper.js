import React from "react";
// import Image from 'react-bootstrap/Image';
import HeaderImage from "./HeaderImage";


function Wrapper(props) {
   return (
      <div className="container">

<HeaderImage/>
         
         <h1 className="display-4">Dining out is better when you share!! </h1>
         <p className="lead">Search for your favorite foods and best restaurants</p>

         <div>
            {props.children}
         </div>
      </div>
   );
}
export default Wrapper;