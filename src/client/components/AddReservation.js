import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";

export default function AddReservation({ mealId, array }) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const initialValues = {
    contact_phonenumber: "",
    contact_name: "",
    contact_email: "",
    no_of_guests: "",
  };
  const date = new Date().toISOString().substring(0, 10);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleAddReservation = (e) => {
    const newreservation = {
      meal_id: mealId,
      contact_name: name,
      contact_phonenumber: phoneNumber,
      contact_email: email,
      no_of_guests: no_of_guests,

      created_date: date,
    };
    const response = postData("/api/reservations", newMeal);
    if (response) {
      alert("Reservati added successfully");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <label>Meal Id</label>
      <input
        type="text"
        value={mealId}
        name="mealId"
        onChange={handleInputChange}
      />
      <br />
      <label>Contact name</label>
      <input
        type="text"
        value={values.name}
        name="name"
        onChange={handleInputChange}
      />
      <br />

      <label>Phone number</label>
      <input
        type="tel"
        value={values.phoneNumber}
        name="phoneNumber"
        onChange={handleInputChange}
      />
      <br />
      <input
        type="email"
        value={values.email}
        name="email"
        onChange={handleInputChange}
      />
      <br />
      <label>No of guests</label>
      <input
        type="number"
        value={values.no_of_guests}
        name="no_of_guests"
        onChange={handleInputChange}
      />
      <br />
      <button type="submit" onClick={handleAddReservation}>
        Add meal
      </button>
    </div>
  );
}
