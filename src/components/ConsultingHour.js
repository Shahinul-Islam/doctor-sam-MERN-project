import React from "react";

const ConsultingHour = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-3xl text-orange-500 my-4">
        Consulting Hour
      </h2>
      <div className="grid md:grid-cols-2 bg-slate-600 p-5 text-white items-center">
        <div>
          <h2 className="font-bold text-4xl my-4">
            Dhaka Medical College Hospital
          </h2>
          <p>Rupayan Khan Plaza, Road: #7</p>
        </div>
        <div>
          <p>Saturday: 4pm to 6pm</p>
          <p>Monday: 4pm to 6pm</p>
          <p>Wednesday: 4pm to 6pm</p>
        </div>
      </div>
    </div>
  );
};

export default ConsultingHour;
