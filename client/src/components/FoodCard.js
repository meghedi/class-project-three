import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";

function FoodCard(props) {
  const searchItem = [
    { term: "sushi", location: "91206", rating: "5", limit: 5 },
    { term: "tacos", location: "91206", rating: "5", limit: 5 },
    { term: "burger", location: "91206", rating: "5", limit: 5 },
    { term: "indian", location: "91206", rating: "5", limit: 5 },
    { term: "pho", location: "91206", rating: "5", limit: 5 },
    { term: "ice cream", location: "91206", rating: "5", limit: 5 },
  ];
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="4">
              {searchItem.slice(0, 2).map((item) => (
                <Card style={{ width: "20rem" }}>
                  <CardImg
                    alt="..."
                    src={require("../assets/img/sushi.jpg")}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      <button
                        onClick={() => props.handleSelect(item)}
                        style={{ cursor: "pointer" }}
                      >
                        <b>{item.term}</b>
                      </button>
                    </CardText>
                  </CardBody>
                </Card>
              ))}
            </Col>
            <hr />
            <Col className="ml-auto mr-auto" md="4">
              {searchItem.slice(2, 4).map((item) => (
                <>
                  <Card style={{ width: "20rem" }}>
                    <CardImg
                      alt="..."
                      src={require("../assets/img/pho.jpg")}
                      top
                    ></CardImg>
                    <CardBody>
                      <CardText>
                        <button
                          onClick={() => props.handleSelect(item)}
                          style={{ cursor: "pointer" }}
                        >
                          <b>{item.term}</b>
                        </button>
                      </CardText>
                    </CardBody>
                  </Card>
                  <hr />
                </>
              ))}
            </Col>
            <hr />
            <Col className="ml-auto mr-auto" md="4">
              {searchItem.slice(4, 6).map((item) => (
                <>
                  <Card style={{ width: "20rem" }}>
                    <CardImg
                      alt="..."
                      src={require("../assets/img/sushi.jpg")}
                      top
                    ></CardImg>
                    <CardBody>
                      <CardText>
                        <button
                          onClick={() => props.handleSelect(item)}
                          style={{ cursor: "pointer" }}
                        >
                          <b>{item.term}</b>
                        </button>
                      </CardText>
                    </CardBody>
                  </Card>
                  <hr />
                </>
              ))}
            </Col>
            <hr />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FoodCard;
