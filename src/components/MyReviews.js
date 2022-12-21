import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import useTitle from "../hooks/useTitle";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch("https://doctor-sam-server.vercel.app/servicesAll")
      .then((res) => res.json())
      .then((data) => setReviews(data.map((singleData) => singleData.reviews)))
      .catch((err) => console.error(err));
  }, []);

  // reviews.map((arrayCollection) =>
  //   arrayCollection.map((objCollection) => console.log(objCollection))
  // );

  return (
    <div className="bg-cyan-400 h-72">
      <h2 className="text-3xl text-center pt-12 font-bold">Cooming Soon...</h2>
    </div>
  );
};

export default MyReviews;
