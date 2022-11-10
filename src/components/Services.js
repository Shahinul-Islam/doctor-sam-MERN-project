import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

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
      <div className="grid md:grid-cols-3 gap-8 mx-auto my-20 justify-items-center shadow-slate-500">
        {allServices &&
          allServices.map((signleService) => (
            <div
              key={signleService._id}
              className="card w-96 bg-base-100 shadow-xl h-4/5"
            >
              <figure className="px-10 pt-10 cursor-pointer">
                <PhotoProvider>
                  <PhotoView src={signleService.picture}>
                    <img
                      src={signleService.picture}
                      alt="treatment"
                      className="rounded-xl"
                    />
                  </PhotoView>
                </PhotoProvider>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title p-0">{signleService.title}</h2>
                <p>
                  {signleService?.details?.length > 100
                    ? signleService.details.slice(0, 100) + "..."
                    : signleService.details}
                </p>
                <p className="font-bold my-2 text-center text-orange-600">
                  $ {signleService.price}
                </p>
                <div className="card-actions">
                  <Link
                    to={`/services/${signleService._id}`}
                    state={signleService._id}
                  >
                    <button className="btn btn-primary">Explore Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
