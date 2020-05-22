import React from "react";
// reactstrap components
import{
  Card,
  CardImg,
  CardBody,
  CardText,
  Container,
  Row,
      Col
} from "reactstrap";
// core components

function Example(){
  return (
    <>
              <div className="section">
              <Container>
              <Row>
              <Col className="ml-auto mr-auto" md="4">
      <Card style={{ width: "20rem" }}>
        <CardImg
          alt="..."
          src={require("../assets/img/sushi.jpg")}
          top
        ></CardImg>
        <CardBody>
          <CardText>
          <b>Sushi</b> 
          </CardText>
        </CardBody>
      </Card>
      <hr/>
      <Card style={{ width: "20rem" }}>
        <CardImg
          alt="..."
          src={require("../assets/img/tacos.jpg")}
          top
        ></CardImg>
        <CardBody>
          <CardText>
          <b>Tacos</b> 
          </CardText>
        </CardBody>
      </Card>
      </Col>
      <hr/>
      <Col className="ml-auto mr-auto" md="4">
      <Card style={{ width: "20rem" }}>
        <CardImg
          alt="..."
          src={require("../assets/img/burger.jpg")}
          top
        ></CardImg>
        <CardBody>
          <CardText>
          <b>Burgers</b> 
          </CardText>
        </CardBody>
      </Card>
      <hr/>
      <Card style={{ width: "20rem" }}>
        <CardImg
          alt="..."
          src={require("../assets/img/indian.jpg")}
          top
        ></CardImg>
        <CardBody>
          <CardText>
          <b>Indian</b> 
          </CardText>
        </CardBody>
      </Card>
      <hr/>
      </Col>
      <Col className="ml-auto mr-auto" md="4">
      <Card style={{ width: "20rem" }}>
        <CardImg
          alt="..."
          src={require("../assets/img/pho.jpg")}
          top
        ></CardImg>
        <CardBody>
          <CardText>
          <b>Pho</b> 
          </CardText>
        </CardBody>
      </Card>
      <hr/>
      <Card style={{ width: "20rem" }}>
        <CardImg
          alt="..."
          src={require("../assets/img/icecream.jpg")}
          top
        ></CardImg>
        <CardBody>
          <CardText>
          <b>Ice Cream</b> 
          </CardText>
        </CardBody>
      </Card>
  
      
      </Col>
      </Row>

        </Container>
      </div>
    </>
  );
}

export default Example