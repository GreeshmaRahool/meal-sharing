import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import postData from "./postData";
import Meals from "./Meals";

export default function AddReservation(reservationId) {
  const mealId = Object.values(reservationId)[0];
  const initialValues = {
    contact_phonenumber: "",
    contact_name: "",
    contact_email: "",
    no_of_guests: "",
  };
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const date = new Date().toISOString().substring(0, 10);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleAddReservation = (e) => {
    const newReservation = {
      meal_id: mealId,
      contact_name: values.contact_name,
      contact_phonenumber: values.phoneNumber,
      contact_email: values.email,
      no_of_guests: values.no_of_guests,
      created_date: date,
    };

    const response = postData("/api/reservations", newReservation);

    if (response) {
      alert("Reservation added successfully");
      setValues(initialValues);
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container">
      <h4 className="heading-formbtn">Book your seat</h4>
      <label>Contact name</label>
      <input
        className="forminputs"
        type="text"
        value={values.contact_name}
        name="contact_name"
        onChange={handleInputChange}
      />
      <br />
      <label>Phone number</label>
      <input
        className="forminputs"
        type="tel"
        value={values.phoneNumber}
        name="phoneNumber"
        onChange={handleInputChange}
      />
      <br />
      <label>Email</label>
      <input
        className="forminputs"
        type="email"
        value={values.email}
        name="email"
        onChange={handleInputChange}
      />
      <br />
      <label>No of guests</label>
      <input
        className="forminputs"
        type="number"
        value={values.no_of_guests}
        name="no_of_guests"
        onChange={handleInputChange}
      />
      <br />
      <button
        className="submitbutton"
        type="submit"
        onClick={handleAddReservation}
      >
        Submit
      </button>
    </div>
  );
}
