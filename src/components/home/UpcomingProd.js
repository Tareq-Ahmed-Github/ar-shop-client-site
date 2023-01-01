import React from 'react';

const UpcomingProd = (props) => {
      const { title, img, price } = props.service;

    return (
      <div className="service">
        <img className="w-100" src={img} alt="" />
        <h2>{title}</h2>
        <p>Price: {price}</p>

        <div className="d-flex justify-content-center gap-2 mx-2">
            <button className="btn btn-info rounded-pill">Pre-order</button>
        </div>
      </div>
    );
};

export default UpcomingProd;