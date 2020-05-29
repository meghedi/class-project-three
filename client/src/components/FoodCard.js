import React,{useContext} from "react";

import {
  Card,
  CardImg,
  CardBody,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";

const buttonStyle = {
  button: {
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
  },
};

function FoodCard(props) {

  const searchItem = [
    {
      term: "sushi",
      location: "Los Angeles, CA",
      rating: "5",
      limit: 5,
      id: "F1",
    },
    {
      term: "tacos",
      location: "Los Angeles, CA",
      rating: "5",
      limit: 5,
      id: "F",
    },
    {
      term: "burger",
      location: "Los Angeles, CA",
      rating: "5",
      limit: 5,
      id: "F3",
    },
    {
      term: "indian",
      location: "Los Angeles, CA",
      rating: "5",
      limit: 5,
      id: "F4",
    },
    {
      term: "pho",
      location: "Los Angeles, CA",
      rating: "5",
      limit: 5,
      id: "F5",
    },
    {
      term: "icecream",
      location: "Los Angeles, CA",
      rating: "5",
      limit: 5,
      id: "F6",
    },
  ];
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="4">
              {searchItem.slice(0, 2).map((item) => (
                <Card
                  style={{ width: "20rem", marginBottom: "10px" }}
                  key={item.id}
                >
                  <CardImg
                    alt="..."
                    src={require(`../assets/img/${item.term}.jpg`)}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      <button
                        onClick={() => props.handleSelect(item)}
                        style={buttonStyle.button}
                      >
                        <b>{item.term.toUpperCase()}</b>
                      </button>
                    </CardText>
                  </CardBody>
                </Card>
              ))}
            </Col>
            <hr />
            <Col className="ml-auto mr-auto" md="4">
              {searchItem.slice(2, 4).map((item) => (
                <Card
                  style={{ width: "20rem", marginBottom: "10px" }}
                  key={item.id}
                >
                  <CardImg
                    alt="..."
                    src={require(`../assets/img/${item.term}.jpg`)}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      <button
                        onClick={() => {
                          /*if (!user) {
                            loginWithRedirect({});
                          } else {
                            props.handleSelect(item);
                          }*/
                          props.handleSelect(item)
                        }}
                        style={buttonStyle.button}
                      >
                        <b>{item.term.toUpperCase()}</b>
                      </button>
                    </CardText>
                  </CardBody>
                </Card>
              ))}
            </Col>
            <hr />
            <Col className="ml-auto mr-auto" md="4">
              {searchItem.slice(4, 6).map((item) => (
                <Card
                  style={{ width: "20rem", marginBottom: "10px" }}
                  key={item.id}
                >
                  <CardImg
                    alt="..."
                    src={require(`../assets/img/${item.term}.jpg`)}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      <button
                        onClick={() => props.handleSelect(item)}
                        style={buttonStyle.button}
                      >
                        <b>{item.term.toUpperCase()}</b>
                      </button>
                    </CardText>
                  </CardBody>
                </Card>
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
