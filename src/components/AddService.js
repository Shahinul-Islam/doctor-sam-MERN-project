import React from "react";
import { Link } from "react-router-dom";

const AddService = () => {
  return (
    <div>
      <p className="text-center text-3xl text-orange-500 font-bold pt-6 my-8">
        Add Service
      </p>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="title"
            className="input input-bordered"
            name="title"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">image link</span>
          </label>
          <input
            type="text"
            placeholder="image link"
            className="input input-bordered"
            name="imageUrl"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input
            type="text"
            placeholder="service price"
            className="input input-bordered"
            name="price"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input
            type="text"
            placeholder="service details"
            className="input input-bordered"
            name="details"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
