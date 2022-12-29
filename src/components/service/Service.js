import React from "react";
import "./Service.css";

const Service = ( props ) => {
  const { _id, title, img, price } = props.service;
  const { handleDeleteService } = props;
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h2>{title}</h2>
      <p>Price: {price}</p>

      <div className="d-flex justify-content-center gap-2 mx-2">
        <button className="btn btn-primary">Update</button>
        <button onClick={() => handleDeleteService(_id)} className="btn btn-primary">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Service;
