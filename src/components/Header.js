import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";

const Header = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div
        className="hero h-96"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Doctor Sam</h1>
            <p className="mb-5">Eye Specialist & Phaco Surgeon</p>
            <button className="btn btn-secondary">Get an Appointment</button>
          </div>
        </div>
      </div>
      <div>
        {services.map((service) => (
          <p key={service._id}>{service.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Header;
