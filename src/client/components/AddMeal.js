import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import postData from "./postData";

export default function AddMeal() {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [location, setLocation] = useState("");
 
  // const [maxReservation, setmaxReservation] = useState("");
  // const [price, setPrice] = useState("");
  const [createdDate, setCreatedDate] = useState();
  const date = new Date().toISOString().substring(0, 10);
  const [when, setWhen] = useState(new Date());

  const initialValues = {
    title: "",
    description: "",
    location: "",
    maxReservation: "",
    price: "",
  };
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleAddMeal = (e) => {
    const newMeal = {
      title: values.title,
      description: values.description,
      location: values.location,
      when: when.toISOString().substring(0, 10),
      max_reservations: values.maxReservation,
      price: values.price,
      created_Date: date,
    };
    //const url = "/api/meals";
    if (newMeal === {}) {
      alert("Please fill all fields");
    }
   console.log(newMeal)
      const response = postData("/api/meals", newMeal);
   
  
    console.log(response)
    if (response) {
      alert('Meal added successfully')
      setValues(initialValues);
      setWhen("");
    }
    else {
      alert('Something went wrong!')
}
  };
  

  return (
    <div className="addmealcontainer">
      <h1>Add a meal</h1>
      <label className="lbl-addmeal">Title</label>
      <input
        className="input"
        type="text"
        value={values.title}
        name="title"
        onChange={handleInputChange}
      />
      <br />

      <label className="lbl-addmeal">Description</label>
      <input
        className="input"
        type="text"
        value={values.description}
        name="description"
        onChange={handleInputChange}
      />
      <br />

      <label className="lbl-addmeal">Location</label>
      <input
        className="input"
        type="text"
        value={values.location}
        name="location"
        onChange={handleInputChange}
      />
      <br />
      <label className="lbl-addmeal">maximum reservations</label>
      <input
        className="input"
        type="number"
        value={values.maxReservation}
        name="maxReservation"
        onChange={handleInputChange}
      />
      <br />

      <label className="lbl-addmeal">Price</label>
      <input
        className="input"
        type="number"
        value={values.price}
        name="price"
        onChange={handleInputChange}
      />
      <br />
      <label className="lbl-addmeal">When</label>
      <DatePicker
        className="date-picker"
        dateFormat="yyyy-MM-dd"
        selected={when}
        onChange={(date) => setWhen(date)}
        minDate={new Date()}
      /><br /><br />
      
        <button className="submitbutton" type="submit" onClick={handleAddMeal}>Add meal</button>
      
    </div>
  );
}
