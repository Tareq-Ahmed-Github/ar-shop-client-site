import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Banner.css";

function HBanner() {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item interval={2000}>
          <Card style={{ width: "100%" }}>
            <Row>
              <Col className="bg-dark text-white d-flex align-items-center">
                <Card.Body>
                  <Card.Title>vivo-y72-pro</Card.Title>
                  <Card.Text>Price: 19000</Card.Text>
                  <Button variant="info rounded-pill">Buy Now</Button>
                </Card.Body>
              </Col>
              <Col>
                <Card.Img
                  className="d-block w-100"
                  variant="top"
                  src="https://i.ibb.co/MgVkz0W/vivo-y72-pro.png"
                  height="569px"
                />
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card style={{ width: "100%" }}>
            <Row>
              <Col className="bg-dark text-white d-flex align-items-center">
                <Card.Body>
                  <Card.Title>vivo-y72-pro</Card.Title>
                  <Card.Text>Price: 19000</Card.Text>
                  <Button variant="info rounded-pill">Buy Now</Button>
                </Card.Body>
              </Col>
              <Col>
                <Card.Img
                  className="d-block w-100"
                  variant="top"
                  src="https://i.ibb.co/MgVkz0W/vivo-y72-pro.png"
                  height="569px"
                />
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card style={{ width: "100%" }}>
            <Row>
              <Col className="bg-dark text-white d-flex align-items-center">
                <Card.Body>
                  <Card.Title>vivo-y72-pro</Card.Title>
                  <Card.Text>Price: 19000</Card.Text>
                  <Button variant="info rounded-pill">Buy Now</Button>
                </Card.Body>
              </Col>
              <Col>
                <Card.Img
                  className="d-block w-100"
                  variant="top"
                  src="https://i.ibb.co/MgVkz0W/vivo-y72-pro.png"
                  height="569px"
                />
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HBanner;
