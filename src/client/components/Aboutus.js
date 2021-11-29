import React from "react";
import bgImageAbout from "../assets/images/BG1.png";
const Aboutus = () => {
  return (
    <div>
      <section>
        <h4>We are absolute food experts </h4>
        <p>
          Our mission is to connect the best local chefs and connoisseurs around
          the world with other curious food lovers.
        </p>
      </section>
      <div>
      <img src={bgImageAbout} alt="about-image" className = "image-about" />;
    </div>
      <section>
        <h4>We are the leaders in social dining</h4>
        <p>
          The best way to make new friends and learn the local culture firsthand
          when traveling.
        </p>
      </section>
      <section>
        <h4>We offer unique food experiences</h4>
        <p>
          Try one of our immersive dinners, lunches, brunches, tastings, food
          tours and cooking classes with local hosts.
        </p>
      </section>
      <footer className="footer">
        <p className="para-footer">The gift of an unforgettable experience</p>
        <p className="createdby">Share The Meal @2021</p>
      </footer>
    </div>
  );
};

export default Aboutus;
