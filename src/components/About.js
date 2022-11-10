import React from "react";
import useTitle from "../hooks/useTitle";

const About = () => {
  useTitle("About");
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="doctor"
          src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="max-w-md rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Doctor Sam</h1>
          <p className="my-2">Eye Specialist and Phaco Surgeon</p>
          <p className="my-4 font-semibold text-blue-600 w-1/2 mx-auto">
            MBBS, BCS (Health), FCPS (Eye), ICO (London), MRCS (Eye) UK Special
            Trained in Phaco Surgery
          </p>
          <p className="py-6 w-3/4 text-justify mx-auto">
            Dr. Sam graduated from Rajshahi Medical College in 2006. He passed
            FCPS (Eye) from Bangladesh College of Physician and Surgeons in 2018
            and International Council of Ophthalmology in 2019. And aslo MRCS
            from Royal College of Physicians and Surgeons of Glasgow, England.
            He is an experienced eye specialist and surgeon giving this service
            in Dhaka Medical College Hospital and Green Eye Hospital for 10
            years.
          </p>
          <button className="btn btn-primary">Get an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default About;
