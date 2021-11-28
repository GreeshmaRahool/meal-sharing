import React from "react";
import { useState, useEffect } from "react";
import postData from "./postData";

function AddReview(mealId) {
  const initialValues = {
    title: "",
    description: "",
    stars: "",
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
  const handleAddReview = (e) => {
    const newReview = {
      title: values.title,
      description: values.description,
      meal_id: mealId.id,
      stars: values.stars,
      created_date: date,
    };
    const response = postData("/api/reviews", newReview);
    if (response) {
      alert("Review added successfully");
      setValues(initialValues);
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container">
      <h4 className="heading-formbtn">Add review</h4>
      <label>Title</label>
      <input
        className="forminputs"
        type="text"
        value={values.title}
        name="title"
        onChange={handleInputChange}
      />
      <br />
      <label>Description</label>
      <input
        className="forminputs"
        type="text"
        value={values.description}
        name="description"
        onChange={handleInputChange}
      />
      <br />
      <label>Rating</label>
      <input
        className="forminputs"
        type="Number"
        value={values.stars}
        name="stars"
        onChange={handleInputChange}
      />
      <br />
      <button className="submitbutton" type="submit" onClick={handleAddReview}>
        Add review
      </button>
    </div>
  );
}

export default AddReview;
