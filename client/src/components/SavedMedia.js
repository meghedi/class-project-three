import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody} from "reactstrap";

function SavedMedia({id, title, imgsrc, cuisines, previewLink, location, rating, phone, handleDeleteRestuarant}) {
  return (
    <>
      <div className="section">
        <Card className="mb-3" body outline color="primary">
          <CardTitle>
            <h1>{title}</h1>
          </CardTitle>
          <CardImg
            alt={title}
            src={imgsrc}
            style={{ width: "50%", margin: "auto" }}
            top
            ></CardImg>

          <CardBody style={{ position: "relative" }}>

              <ul className="list-group list-group-flush center">
                <li className="list-group-item">Rating: {rating}</li>
                <li className="list-group-item">Cuisines: 
                {cuisines.map((category)=>(
                   <span key={category.alias}>{category.title}, </span>
                ))}
                </li>
                <li className="list-group-item">Phone: <a href={`tel:${phone}`}>{phone}</a></li>
                <li className="list-group-item">Address : {location}</li>
                <a href={previewLink} className="list-group-item list-group-item-action">
                  Yelp Listing
                </a>
              </ul>
              {window.location.pathname === "/saved" ? (
            <div>
            <button
            type="button"
            id="btnDelete"
            className="btn btn-danger"
            onClick={()=>handleDeleteRestuarant(id)}
            >
            Delete
            </button>
            </div>
      ):(
         <p></p>
      )}
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default SavedMedia;
