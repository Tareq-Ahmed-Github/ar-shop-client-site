import React, { useEffect, useState } from "react";
import UpcomingProd from './UpcomingProd';

const UpcomingProds = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/upcomingProds")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  return (
    <div>
      <div>
        <h1 className="text-primary text-center mt-5"> Coming Soon</h1>
        <div>
          <div className="items gap-2 m-5">
            {services.slice(0, 3).map((service) => (
              <UpcomingProd
                key={service._id}
                service={service}
              ></UpcomingProd>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProds;
