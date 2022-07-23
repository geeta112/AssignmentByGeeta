import React from "react";
import "./App.css";
import Card from "./components/Card";
import { steps, workout, nutrition } from "./images";
import data from "./components/user.json";

const App = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="menu">
          <div className="menu__option">
            <img src={steps} alt="steps" />
            <h3 className="option1">Steps</h3>
          </div>
          <div className="menu__option">
            <img src={workout} alt="workout" />
            <h3 className="option2">Workout</h3>
          </div>
          <div className="menu__option">
            <img src={nutrition} alt="nutrition" />
            <h3 className="option3">Nutriton</h3>
          </div>
        </div>
        <div className="cards" id="cards">
          {data.map((user) => (
            <Card user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
