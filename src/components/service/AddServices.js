import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import "./AddServices.css";
const AddService = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const imgRef = useRef();

  const handleAddService = (e) => {
    const title = nameRef.current.value;
    const price = priceRef.current.value;
    const img = imgRef.current.value;
    console.log(title, price, img);
    const newService = { title, price, img };

    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Data is Successfully added in database");
        }
      });

    e.preventDefault();
  };

  return (
    <div className="p-5 d-flex justify-content-center">
      <Form onSubmit={handleAddService} className="form-style p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Service Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={priceRef}
            type="text"
            placeholder="Enter Service Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={imgRef}
            type="text"
            placeholder="Enter Service Image Link"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddService;
