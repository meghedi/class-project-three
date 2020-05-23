import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardLink,
  CardText,
  Row,
  Col,
} from "reactstrap";

// const styles = {
//   buttonStyle: {
//     position: "absolute",
//     top: 5,
//     right: 5,
//   },
//   mediaStyle: {
//     position: "relative",
//   },
// };
function Media({ restaurant, cuisines, rating, image, link, handleSave }) {
  return (
    <>
      <div className="section">
        {/* <Card style={{ width: "40rem" }}> */}
        <Card className="mb-3" body outline color="primary">
          <CardTitle>
            <h1>{restaurant}</h1>
          </CardTitle>
          <CardImg
            alt={restaurant}
            src={image}
            className="card-img-top img-thumbnail"
            top
            // style={{ width: "320px", height: "320px" }}
          ></CardImg>

          <CardBody style={{ position: "relative" }}>
            <CardText>
              <ul class="list-group list-group-flush center">
                <li class="list-group-item">Rating:</li>
                <li class="list-group-item">Cuisines:</li>
                <li class="list-group-item">Phone:</li>
                <li class="list-group-item">Address</li>
                <a href="{link}" class="list-group-item list-group-item-action">
                  Yelp Listing
                </a>
              </ul>
              <button
              type="button"
              id="btnSave"
              // style={styles.buttonStyle}
              className="btn btn-primary btn-lg active"
              onClick={handleSave}
            >
              Save
            </button>
            </CardText>
            <CardLink href="#">{link}</CardLink>
          </CardBody>

        </Card>

      </div>
    </>
  );
}

export default Media;
