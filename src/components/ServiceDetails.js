import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import useTitle from "../hooks/useTitle";

const ServiceDetails = () => {
  useTitle("Service Details");
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const id = location.state;
  const [service, setService] = useState([]);
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/servicesAll/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  //handle add reviews
  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const body = form.userReview.value;
    const name = user.displayName;
    const email = user.email;
    const image = user.photoURL;
    const id = user.uid;
    const serviceId = location.state;
    console.log(body, name, email, image, id, serviceId);
    const userReviewData = { id, name, email, image, body, serviceId };
    fetch(`http://localhost:5000/servicesAll/${serviceId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReviewData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    form.reset();
  };
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
                    <div key={review.id}>
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
            {user && user ? (
              <>
                <form onSubmit={handleAddReview} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Comment</span>
                    </label>
                    <input
                      type="text"
                      placeholder="comment"
                      className="input input-bordered"
                      name="userReview"
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      comment
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center my-4">
                <Link className="btn btn-accent" to="/login">
                  Please Login to Add Review
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
