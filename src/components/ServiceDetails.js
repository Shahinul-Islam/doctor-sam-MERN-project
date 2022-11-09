import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ServiceDetails = () => {
  const location = useLocation();
  const id = location.state;
  const [service, setService] = useState([]);
  console.log(service);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  return (
    <div>
      <h2 className="text-center font-bold text-3xl text-orange-500 my-4">
        Service Details
      </h2>
      {service && (
        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl p-20">
            <figure>
              <img src={service.picture} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>
              <p>{service.details}</p>
              <p className="font-bold text-orange-500">
                Price: $ {service.price}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Own This Service</button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-3xl text-orange-500 my-8">
              Reviews
            </h2>
            <div>
              <p>
                {service.reviews &&
                  service.reviews.map((review) => (
                    <div>
                      <div className="overflow-x-auto w-4/5 mx-auto my-8">
                        <table className="table w-4/5">
                          <tbody>
                            <tr>
                              <td>
                                <div className="flex items-center space-x-3">
                                  <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                      <img src={review.image} alt="reviewer" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-bold">
                                      {review.name}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="w-4/5 overflow-x-scroll">
                                Review: {review.body}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
              </p>
            </div>
            <div className="text-center">
              <Link className="btn btn-accent my-4">Add Review</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
