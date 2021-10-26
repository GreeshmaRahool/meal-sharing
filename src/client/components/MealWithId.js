import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import AddReservation from "./AddReservation";
import AddReview from "./AddReview";
import LoadImage from "../LoadImage";
import Displaymeal from "./Displaymeal";

const MealWithId = () => {
  const [mealWithId, setMealWithId] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reservationForm, setReservationForm] = useState(false);
  const [reviewForm, setReviewForm] = useState(false);
  const [reservation, setReservation] = useState([]);

  const paramMealId = useParams();
 
  useEffect(() => {
    fetch(`/api/meals?availableReservations=true`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong!");
        }
      })
      .then((data) => {
        setReservation(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`/api/meals/${paramMealId.id}`)
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

  let getReservationWithId = reservation.filter(
    (item) => item.id == paramMealId.id
  );
  let availableSeats = getReservationWithId.map(item => {
 return (Number(item.max_reservations)- Number(item.total_reservations))
  })
  console.log(getReservationWithId)
 console.log(availableSeats)

  const handleButtonState = () => {
    if (getReservationWithId.length !== 0) {
      return false;
    }
  };

  const handleAddReservation = () => {
    setReservationForm(true);
    setReviewForm(false);
  };
  const handleAddReview = () => {
    setReviewForm(true);
    setReservationForm(false);
  };
  return (
    <div className="mealwithid-container">
      {mealWithId.title ? (
        <LoadImage meal={mealWithId} className="meal-image" />
      ) : (
        console.log("UNDEFINED")
      )}
      <p>{mealWithId.title}</p>
      {mealWithId.description} <br />
      Location : {mealWithId.location} <br />
      Price : {mealWithId.price} DKK <br /><br />
      Available seats : {availableSeats[0]}<br/>
      <div className="button-container">
        <button
          className="button-reservtn"
          type="submit"
          disable="{handleButtonState}"
          onClick={handleAddReservation}
        >
          Book your seat
        </button>
        {reservationForm ? (
          <AddReservation id={getReservationWithId[0].id} />
        ) : (
          ""
        )}
        <button
          className="button-review"
          type="submit"
          onClick={handleAddReview}
        >
          Add riews
        </button>
        {reviewForm ? <AddReview id={paramMealId.id} /> : ""}
      </div>
    </div>
  );
};
export default MealWithId;
