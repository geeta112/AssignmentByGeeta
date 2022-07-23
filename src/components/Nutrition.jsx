import React from "react";
import { nutrition } from "../images/index";
import "../App.css";

const Nutrition = () => {
  return (
    <div>
      <div className="dashboard">
        <div className="container">
          <div className="menu">
            <div className="menu__option">
              <img src={nutrition} alt="nutrition" />
              <h3 className="option3">Nutriton Section</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
