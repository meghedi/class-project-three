import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardDeck,
  CardImgOverlay,
  CardBody,
} from "reactstrap";

import "../assets/css/styles.css";

function Media({
  restaurant,
  cuisines,
  rating,
  image,
  link,
  address,
  phone,
  displayPhone,
  handleSave,
}) {
  return (
    <>
      <CardDeck>
        <Card className="mb-3" body outline color="danger">
          <CardImg
            // className="photo"
            alt={restaurant}
            src={image}
            height="300px"
          ></CardImg>
          <CardImgOverlay>
            <CardTitle 
            className="photo"
            style={{ backgroundColor: '#FFD746', borderColor: '#333' }}>
              <h2>{restaurant}</h2>
            </CardTitle>
          </CardImgOverlay>

          <CardBody className="pr-1">
            <ul className="list-group list-group-flush left">
              <li className="list-group-item">Rating: {rating}</li>
              <li className="list-group-item">
                Cuisines:
                {cuisines.map((category) => (
                  <span key={category.alias}>{category.title}, </span>
                ))}
              </li>
              <li className="list-group-item">
                Phone: <a href={`tel:${phone}`}>{displayPhone}</a>
              </li>
              <li className="list-group-item">Address : {address}</li>
              <a
                href={link}
                className="list-group-item list-group-item-action text-danger fab fa-yelp"
              >
                Yelp Listing
              </a>
            </ul>
            <button
              type="button"
              id="btnSave"
              className="btn btn-danger btn-lg active"
              onClick={handleSave}
            >
              Save
            </button>
          </CardBody>
        </Card>
      </CardDeck>
    </>
  );
}

export default Media;
