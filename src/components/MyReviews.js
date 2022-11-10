import React, { useEffect, useState } from "react";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  // console.log(reviews);
  /* useEffect(() => {
    fetch("http://localhost:5000/servicesAll")
      .then((res) => res.json())
      .then((data) => setReviews(data.map((singleData) => singleData.reviews)))
      .catch((err) => console.error(err));
  }, []);

  reviews.map((arrayCollection) =>
    arrayCollection.map((objCollection) => console.log(objCollection))
  );
 */
  return (
    <div>
      <h2>This is my review page</h2>
    </div>
  );
};

export default MyReviews;
