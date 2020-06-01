import React from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardDeck,
  CardImgOverlay,
  CardBody,
} from "reactstrap";

import "../assets/css/styles.css";


function Media({
  id,
  restaurant,
  cuisines,
  rating,
  image,
  link,
  address,
  phone,
  displayPhone,
  handleSave,
  handleDeleteRestuarant,
}) {
  return (
    <>
      {/* <CardDeck> */}
        <Card className="mb-3" body outline color="danger" style={{padding:"0px"}}>
        <Row className="no-gutters">
        <Col md="4">
          <CardImg 
          alt={restaurant} 
          src={image} 
          className="photo"
          ></CardImg>
          </Col>
          <Col md="8">
          <CardBody>
          <CardTitle            >
              <h1>{restaurant}</h1>
            </CardTitle>
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
              <li className="list-group-item">
                Address : <a href={'https://www.google.com/maps/place/' + address} target="_blank">{address}</a>
                </li>
              <a
                href={link}
                className="list-group-item list-group-item-action text-danger fab fa-yelp"
              >
                Yelp Listing
              </a>
            </ul>
            {window.location.pathname === "/saved" ? (
              <button
                type="button"
                id="btnDelete"
                className="btn btn-danger"
                onClick={() => handleDeleteRestuarant(id)}
              >
                Delete
              </button>
            ) : (
              <button
                type="button"
                id="btnSave"
                className="btn btn-danger btn-lg active"
                onClick={handleSave}
              >
                Save
              </button>
            )}
          </CardBody>
          </Col>
          </Row>
        </Card>

      {/* </CardDeck> */}
    </>
  );
}

export default Media;
