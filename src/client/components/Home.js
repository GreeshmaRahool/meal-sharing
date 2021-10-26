import React from "react";
import SearchMeal from "./SearchMeal";
import bgImage from "../assets/images/BG2.png";
const Home = () => {
  return (
    <div
      className="bg-cover  text-fontcolor"
      style={{ backgroundImage: `url('${bgImage}')`}} 
    >
      <div className="header">
        <h1>Unforgettable, immersive culinary experiences</h1>
      </div>

      <div className="search-container">
        <SearchMeal />
        <h3>
          From home or abroad, join intimate culinary
          <br />
          experiences led by passionate hosts and
          <br />
          chefs that will take your breath away.
        </h3>
      </div>

      <footer className="footer">
        <p className="para-footer">The gift of an unforgettable experience</p>
        <p className="createdby">Share The Meal @2021</p>
      </footer>
    </div>
  );
};
export default Home;
