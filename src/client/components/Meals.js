import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Displaymeal from "./Displaymeal";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/meals")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Somethig went wrong!");
        }
      })
      .then((data) => {
        setMeals(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <ul>
        {meals.map((meal) => {
          return (
            <Link to={`/meals/${meal.id}`}>
              {console.log(meal.id)}
            <li key={meal.id}>
              <Displaymeal meal={meal}/>
            </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default Meals;
