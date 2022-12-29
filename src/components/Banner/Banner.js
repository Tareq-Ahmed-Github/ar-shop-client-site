import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Banner() {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item interval={2000}>
          <Card style={{ width: "100%" }}>
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/MgVkz0W/vivo-y72-pro.png"
                />
              </Col>
              <Col className="bg-dark text-white d-flex align-items-center">
                <Card.Body>
                  <Card.Title>vivo-y72-pro</Card.Title>
                  <Card.Text>Price: 19000</Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card style={{ width: "100%" }}>
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/pwFg53v/samsung-galaxy-a04s.png"
                />
              </Col>
              <Col className="bg-dark text-white d-flex align-items-center">
                <Card.Body>
                  <Card.Title>samsung-galaxy-a04s</Card.Title>
                  <Card.Text>Price: 15500</Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card style={{ width: "100%" }}>
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/YhHTHp4/infinix-hot-3-pro.jpg"
                />
              </Col>
              <Col className="bg-dark text-white d-flex align-items-center">
                <Card.Body>
                  <Card.Title>infinix-hot-3-pro</Card.Title>
                  <Card.Text>Price: 13000</Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
