import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import ConsultingHour from "./ConsultingHour";
import ServiceCard from "./ServiceCard";
// import Navbar from "./Navbar";

const Header = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://doctor-sam-server.vercel.app/services/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mx-auto text-center">
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
        <p className="text-center text-3xl text-orange-500 font-bold py-6">
          About
        </p>
      </div>
      <About></About>
      <div>
        <p className="text-center text-3xl text-orange-500 font-bold pt-6">
          Services
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mx-auto my-20 justify-items-center shadow-slate-500">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <Link className="" to="/services">
        <button className="my-4 btn mx-auto btn-small">View All</button>
      </Link>
      <ConsultingHour></ConsultingHour>
    </div>
  );
};

export default Header;
