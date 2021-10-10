import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const MealWithId = () => {
  const [mealWithId, setMealWithId] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const meal_id = useParams();

  useEffect(() => {
    fetch(`/api/meals/${meal_id.id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong!");
        }
      })
      .then((data) => {
        setMealWithId(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  // const handleReservation = () => {
  //   setReviewForm(false);
  //   setForm(true);
  //   setReviews(false);
  //   if (present.length === 0) {
  //     setReserveStatus(false);
  //   }
  // };
  return (
    <div>
      {mealWithId.title}
      <br /> {mealWithId.id} <br /> {mealWithId.description} <br />{" "}
      {mealWithId.price}
      <button type="submit">Make Reservation</button>
    </div>
   
  );
};
export default MealWithId;
