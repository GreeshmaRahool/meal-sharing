import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import Navigation from "./components/Navigation";
import Meals from "./components/Meals";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import MealWithId from "./components/MealWithId";
import Addmeal from "./components/AddMeal";


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aboutus">
          <Aboutus/>
        </Route>
        <Route exact path="/meals">
          <Meals />
        </Route>
        <Route exact path="/meals/:id">
          <MealWithId />
        </Route>
        <Route exact path="/admin">
          <Addmeal />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
