import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Workout from "./components/Workout";
import Nutrition from "./components/Nutrition";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="userId/workout" element={<Workout />} />
      <Route path="/userId/nutrition" element={<Nutrition />} />
    </Routes>
  </Router>
);

reportWebVitals();
