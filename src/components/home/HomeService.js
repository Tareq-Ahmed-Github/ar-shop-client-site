import React from "react";
import { Link } from "react-router-dom";

const HomeService = (props) => {
  const { _id, title, img, price } = props.service;
  const { handleDeleteService } = props;
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h2>{title}</h2>
      <p>Price: {price}</p>

      <div className="d-flex justify-content-center gap-2 mx-2">
        <Link to="/updateService">
          <button className="btn btn-info rounded-pill">Update</button>
        </Link>
        <button
          onClick={() => handleDeleteService(_id)}
          className="btn btn-info rounded-pill"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default HomeService;
