import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { json, useParams } from "react-router-dom";

const UpdateService = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const handleNameChange = (e) => {
    const updatedTitle = e.target.value;
    const updatedService = {
      title: updatedTitle,
      price: service.price,
      img: service.img,
    };
    setService(updatedService);
  };
  const handlePriceChange = (e) => {
    const updatedPrice = e.target.value;
    const updatedService = {
      title: service.title,
      price: updatedPrice,
      img: service.img,
    };
    setService(updatedService);
  };
  const handleImageChange = (e) => {
    const updatedImg = e.target.value;
    const updatedService = {
      title: service.title,
      price: service.price,
      img: updatedImg,
    };
    setService(updatedService);
  };

  const handleUpdateService = (e) => {
    fetch(`http://localhost:5000/service/${serviceId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
          setService({});
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleUpdateService}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Name</Form.Label>
          <Form.Control
            type="text"
            value={service.title || ""}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Price</Form.Label>
          <Form.Control
            type="text"
            value={service.price || ""}
            onChange={handlePriceChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Image</Form.Label>
          <Form.Control
            type="text"
            value={service.img || ""}
            onChange={handleImageChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateService;