import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HomeService from "./HomeService";

const HomeServices = () => {
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
            {services.slice(0, 6).map((service) => (
              <HomeService
                key={service._id}
                service={service}
                handleDeleteService={handleDeleteService}
              ></HomeService>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
