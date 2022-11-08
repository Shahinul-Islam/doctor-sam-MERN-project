import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, picture, price, details } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 cursor-pointer">
        <PhotoProvider>
          <PhotoView src={picture}>
            <img src={picture} alt="treatment" className="rounded-xl" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{details.length > 100 ? details.slice(0, 100) + "..." : details}</p>
        <p className="font-bold my-2 text-center text-orange-600">$ {price}</p>
        <div className="card-actions">
          <Link to={`/services/${_id}`} state={_id}>
            <button className="btn btn-primary">Explore Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
