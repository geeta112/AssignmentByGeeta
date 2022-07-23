import React from "react";
import { workout } from "../images/index";

import "../App.css";

const Workout = (user) => {
  return (
    <div>
      <div className="dashboard">
        <div className="container">
          <div className="menu">
            <div className="menu__option">
              <img src={workout} alt="workout" />
              <h3 className="option2">Workout Section</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workout;
