import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody} from "reactstrap";

function Media({ restaurant, cuisines, rating, image, link, address, phone, displayPhone, handleSave }) {
  return (
    <>
      <div className="section">
        <Card className="mb-3" body outline color="primary">
          <CardTitle>
            <h1>{restaurant}</h1>
          </CardTitle>
          <CardImg
            alt={restaurant}
            src={image}
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
                <li className="list-group-item">Phone: <a href={`tel:${phone}`}>{displayPhone}</a></li>
                <li className="list-group-item">Address : {address}</li>
                <a href={link} className="list-group-item list-group-item-action">
                  Yelp Listing
                </a>
              </ul>
              <button
                type="button"
                id="btnSave"
                className="btn btn-primary btn-lg active"
                onClick={handleSave}
              >
                Save
              </button>

          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Media;