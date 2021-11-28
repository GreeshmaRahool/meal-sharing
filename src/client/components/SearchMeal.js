import React from "react";
import { useState, useEffect } from "react";
import Displaymeal from "./Displaymeal";
import { Link } from "react-router-dom";

function SearchMeal() {
  const [mealItems, setMealItems] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchMeals = (api) => {
    fetch(api)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        setLoading(false);
        setMealItems(data);
        console.log(mealItems);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    if (search !== "") {
      fetchMeals(`/api/meals?title=${search}`);
    }
    else {
      setMealItems([]);
    }
  }, [search]);


  return (
    <div >    
      <input
        className="search-meal"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type to search a meal"
        name="search"
      />
      <br /><br />
      <div>
      <ul className="searchmeal-container">
        {mealItems.map((meal , idx) => {
          return (            
            <Link to={`/meals/${meal.id}`}>
              <li key={idx}>
                <Displaymeal meal={meal} />
              </li>
            </Link>
          );
        })}
        </ul>
        </div>
      {loading ? <div></div> : mealItems.length === 0 && search !== "" ? <div className="emptymeal">No meals found  </div>: ""}
    </div>
  );
}

export default SearchMeal;
