import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Service from "./Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  const handleDeleteService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/service/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingServices = services.filter(
              (service) => service._id !== id
            );
            setServices(remainingServices);
          }
        });
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-primary text-center mt-5"> Our Services</h1>
        <div>
          <div className="items gap-2 m-5">
            {services.map((service) => (
              <Service
                key={service._id}
                service={service}
                handleDeleteService={handleDeleteService}
              ></Service>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link to="/addServices">
            <Button variant="outline-info mb-5 rounded-pill fw-bold">
              ADD NEW COLLECTION
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
