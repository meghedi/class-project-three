import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardLink} from "reactstrap";


function Media({ restaurant, cuisines, rating, image, link, handleSave }) {
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
            style={{ width: "80%", margin: "auto" }}
            top
          ></CardImg>

          <CardBody style={{ position: "relative" }}>

              <ul className="list-group list-group-flush center">
                <li className="list-group-item">Rating:</li>
                <li className="list-group-item">Cuisines:</li>
                <li className="list-group-item">Phone:</li>
                <li className="list-group-item">Address</li>
                <a href="{link}" className="list-group-item list-group-item-action">
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

            <CardLink href="#">{link}</CardLink>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Media;
