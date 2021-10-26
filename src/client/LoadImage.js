import React from "react";
import salmon from "./assets/images/salmon.png";
import burger from "./assets/images/Burger.png";
import ceviche from "./assets/images/Ceviche.png";
import chilli from "./assets/images/ChilliChicken.png";
import cocktail from "./assets/images/cocktail.png";
import tartar from "./assets/images/tartar.png";
import durum from "./assets/images/durum-kebab.png";
import jelly from "./assets/images/Jelly.png";
import vegan from "./assets/images/Vegan.png";
import friedrice from "./assets/images/friedrice.png";
const lookup = [
  {
    path: salmon,
    categories: ["gravad salmon with homemade fox sauce"],
  },
  {
    path: tartar,
    categories: ["Classic tartar with accessories"],
  },
  {
    path: burger,
    categories: ["Burger", "Chicken Burger", "Beef Burger", "Cheese Burgur"],
  },
  {
    path: ceviche,
    categories: ["Ceviche"],
  },
  {
    path: chilli,
    categories: ["Chilli chicken"],
  },
  {
    path: cocktail,
    categories: ["Cocktail"],
  },
  {
    path: durum,
    categories: ["Durum"],
  },
  {
    path: jelly,
    categories: ["Grandmas jelly"],
  },
  {
    path: vegan,
    categories: ["plant based vegan dinner by Paris chef"],
  },
  {
    path: friedrice,
    categories: ["Fried rice"],
  },
];

function LoadImage({ meal }) {
  let category = lookup.find((item) => item.categories.includes(meal.title.trim()));
  console.log(category);
  if (!category) category = lookup[0];
  return (
    <div>
      <img src={category.path} alt="meal" className="meal-image" />
    </div>
  );
}

export default LoadImage;
