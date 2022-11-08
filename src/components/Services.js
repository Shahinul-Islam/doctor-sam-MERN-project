import React, { useEffect, useState } from "react";

const Services = () => {
  //   const [loading, setLoading] = useState(true);
  const [allServices, setAllServices] = useState();
  console.log(allServices);
  useEffect(() => {
    fetch("http://localhost:5000/servicesAll")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
    // setLoading(false);
  }, []);
  return (
    <div>
      <h2 className="text-center font-bold text-3xl text-orange-500 my-4">
        Services
      </h2>
      <div>
        {allServices &&
          allServices.map((signleService) => <p>{signleService.title}</p>)}
      </div>
    </div>
  );
};

export default Services;
