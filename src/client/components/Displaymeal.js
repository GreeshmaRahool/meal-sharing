import React from "react";
import LoadImage from "../LoadImage";
const Displaymeal = ({ meal }) => {
     
    return (
        <div className="load-mealImage">
            <LoadImage meal={meal}/>
            {meal.title}<br/><br/>
        </div>
         
    )
}
export default Displaymeal;