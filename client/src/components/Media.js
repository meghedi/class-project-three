import React from "react";
import{
  Card,
  CardImg,
  CardBody,
  CardText
} from "reactstrap";

const styles = {
  buttonStyle: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  mediaStyle: {
    position: "relative",
  },
};
function Media({ restaurant, cuisines, rating, image, link, handleSave }) {
  return (
    <>
      <div className="section">
              <Card style={{ width: "20rem" }}>
                <CardImg alt={restaurant} src={image} top></CardImg>
                <CardBody style={{ position: "relative" }}>
                  <CardText>
                    <b>{restaurant}</b>
                  </CardText>
                  <button
                    type="button"
                    id="btnSave"
                    style={styles.buttonStyle}
                    className="btn btn-default"
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
