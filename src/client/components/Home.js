import React from "react";
import SearchMeal from "./SearchMeal";
import bgImage from "../assets/images/BG2.png";

const Home = () => {
  return (
    // <div
    //   className="bg-cover  text-fontcolor"
    //   style={{
    //     backgroundImage: `url('https://wallpaperaccess.com/full/3014609.jpg')`,
    //   }}
    // >
    <div
      className="bg-cover  text-fontcolor"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="header">
        <h1>Unforgettable, immersive culinary experiences</h1>
      </div>
      <div className="search-container">
        <SearchMeal />
      </div>
      <div >
        <footer className="footer">
          <p className="para-footer">The gift of an unforgettable experience</p>
          <p className="createdby">Share The Meal @2021</p>
        </footer>
      </div>
    </div>
  );
};
export default Home;
