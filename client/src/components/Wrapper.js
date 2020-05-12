import React from "react";


function Wrapper(props){
   return (
       <div className="container">
    <div className="jumbotron text-center">
        <h1 className="display-4">Five Star Foodies </h1>
        <p className="lead">Search for your favorite food best restuarnats</p>
     </div>
     <div>
       {props.children}
     </div>
     </div>
   );
}

export default Wrapper;
