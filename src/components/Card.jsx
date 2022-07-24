import React, { useEffect, useState } from "react";
import {
  bell,
  calender,
  charvie,
  checked,
  exclaim,
  minus,
  plus,
  rightarrow,
} from "../images";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import "react-circular-progressbar/dist/styles.css";
import ReactTooltip from "react-tooltip";
import { Line } from "rc-progress";

import moment from "moment";
import "./Card.css";

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

const Card = ({ user }) => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const [calories, setCalories] = useState(user.calorieTarget);

  const [steps, setSteps] = useState(user.stepsTarget);

  const handleWindowResize = () => {
    if (window.innerWidth > 992) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="card" id={user.id}>
      <div className="card__container">
        {/* profile start */}
        <div className="profile">
          <img src={charvie} alt="" />
          <div className="profile__text">
            <h3 className="username">{user.name}</h3>
            <h6>{user.email}</h6>
          </div>
          <button
            className={"button__mobileView"}
            onClick={() => setVisible(!visible)}
          >
            <img
              src={rightarrow}
              className={visible === true ? "rightarrow__rotate" : "rightarrow"}
              alt="user information"
            />
          </button>
        </div>
        {/* profile end */}

        {(visible === true || window.innerWidth > 992) && (
          <div className="mobile__div">
            {/* Steps start */}
            <div className="steps__target">
              <div className="progressbar_steps">
                <CircularProgressbarWithChildren
                  minValue={0}
                  maxValue={steps}
                  value={user.stepsWalked}
                  styles={buildStyles({
                    rotation: `0.5 + (1 - ${user.stepsWalked} / 100) / 2`,
                    strokeLinecap: "butt",
                    pathColor: `rgba(127, 209, 140, 1), ${
                      user.stepsWalked / 100
                    })`,
                  })}
                >
                  <div
                    style={{ fontSize: 12, marginTop: -5, textAlign: "center" }}
                  >
                    <strong>{user.stepsWalked}</strong> <br />
                    <h6>Walked</h6>
                  </div>
                </CircularProgressbarWithChildren>
              </div>

              <div className="textSteps__target">
                <button
                  onClick={() => setSteps(steps + 500)}
                  className="button__setTarget"
                >
                  <img src={plus} alt="increment" />
                </button>
                <h3>{kFormatter(steps)}</h3>
                <h6>Target</h6>
                <button
                  onClick={() => setSteps(steps - 500)}
                  className="button__setTarget"
                >
                  <img src={minus} alt="decrement" />
                </button>
              </div>
            </div>
            {/* Steps end*/}

            {/* workout dates start*/}
            <div className="dates">
              <div className="dates__container">
                <div className="date__performed">
                  <img src={checked} alt="performed" />
                  <h4 className="dates__text">{user.performedDate}</h4>
                </div>
                {user.scheduledDate === moment().format("DD MMM") ? (
                  <div
                    style={{
                      background: "rgba(204, 56, 56, 1)",
                      borderRadius: 4,
                    }}
                    className="date__scheduled"
                  >
                    <img src={calender} alt="scheduled" />
                    <h4 className="dates__text">{user.scheduledDate}</h4>
                  </div>
                ) : (
                  <div className="date__scheduled">
                    <img src={calender} alt="scheduled" />
                    <h4 className="dates__text">{user.scheduledDate}</h4>
                  </div>
                )}
              </div>
              <div className="button__dates">
                {user.feedback === true ? (
                  <button
                    style={{ background: "rgba(204, 56, 56, 1)" }}
                    onClick={() => navigate("/userId/workout")}
                  >
                    <img src={exclaim} alt="button" />
                  </button>
                ) : (
                  <button onClick={() => navigate("/userId/workout")}>
                    <img src={rightarrow} alt="button" />
                  </button>
                )}
              </div>
            </div>
            {/* workout dates end*/}

            {/* nutrition start*/}
            <div className="nutrition">
              <a href="/" data-tip="" data-for="overridePosition">
                <div className="nutrition__pieChart">
                  <PieChart
                    key={user.userId}
                    label={(obj) => (
                      <svg>
                        <text
                          dominantBaseline="central"
                          x="50"
                          y="40"
                          dx="0"
                          dy="0"
                          fill="white"
                          fontSize={15}
                          stroke="white"
                          textAnchor="middle"
                        >
                          {user.calorieIntake}
                        </text>
                        <text
                          dominantBaseline="central"
                          x="50"
                          y="60"
                          dx="0"
                          dy="0"
                          fill="
                    rgba(189, 188, 190, 1)"
                          fontSize={12}
                          fontWeight={100}
                          stroke="
                    rgba(189, 188, 190, 1)"
                          textAnchor="middle"
                        >
                          Calories
                        </text>
                      </svg>
                    )}
                    labelPosition={20}
                    lineWidth={30}
                    data={[
                      {
                        title: "PROTEIN",
                        value: 10,
                        color: "#03C7FC",
                      },
                      {
                        title: "FATS",
                        value: 15,
                        color: "#F5C90F",
                      },
                      {
                        title: "CARBS",
                        value: 20,
                        color: "#F45C84",
                      },
                    ]}
                  ></PieChart>
                </div>
              </a>
              <ReactTooltip
                id="overridePosition"
                aria-haspopup="true"
                place="bottom"
                backgroundColor="rgba(51, 59, 68, 1)"
              >
                <div
                  style={{
                    width: 180,
                    height: 165,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    // background: "rgba(51, 59, 68, 1)",
                  }}
                >
                  <div
                    style={{
                      width: 196,
                      height: 44,
                      padding: 7,
                      borderRadius: 5,
                      background: "rgba(27, 34, 42, 1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 5,
                      }}
                    >
                      <h5>Protein</h5>
                      <h5>70g</h5>
                    </div>
                    <Line
                      percent={(user.proteinConsumed / 70) * 100}
                      strokeWidth={5}
                      trailWidth={5}
                      trailColor="rgba(16, 19, 23, 1)"
                      strokeColor="rgba(244, 92, 132, 1)"
                    />
                  </div>
                  <div
                    style={{
                      background: "rgba(27, 34, 42, 1)",
                      marginTop: 15,
                      marginBottom: 15,
                      width: 196,
                      height: 44,
                      padding: 7,
                      borderRadius: 5,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 5,
                      }}
                    >
                      <h5>Fats</h5>
                      <h5>70g</h5>
                    </div>

                    <Line
                      percent={(user.fatConsumed / 70) * 100}
                      strokeWidth="5"
                      strokeColor="rgba(3, 198, 250, 1)"
                      trailWidth="5"
                      trailColor="rgba(16, 19, 23, 1)"
                    />
                  </div>

                  <div
                    style={{
                      background: "rgba(27, 34, 42, 1)",
                      width: 196,
                      height: 44,
                      padding: 7,
                      borderRadius: 5,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 5,
                      }}
                    >
                      <h5>Carbs</h5>
                      <h5>70g</h5>
                    </div>
                    <Line
                      percent={(user.carbConsumed / 70) * 100}
                      strokeWidth="5"
                      strokeColor="rgba(240, 197, 15, 1)"
                      trailWidth="5"
                      trailColor="rgba(16, 19, 23, 1)"
                    />
                  </div>
                </div>
              </ReactTooltip>
              <div className="nutrition__target">
                <button
                  onClick={() => setCalories(calories + 100)}
                  className="button__setTarget"
                >
                  <img src={plus} alt="increment" />
                </button>
                <h3>{kFormatter(calories)}</h3>
                <h6>Target</h6>
                <button
                  onClick={() => setCalories(calories - 100)}
                  className="button__setTarget"
                >
                  <img src={minus} alt="decrement" />
                </button>
              </div>
              <div className="button__nutrition">
                <button onClick={() => navigate("/userId/nutrition")}>
                  <img src={rightarrow} alt="button" />
                </button>
              </div>
            </div>
            {/* nutrition end*/}

            {/* notification bell start*/}
            <div className="bell">
              <div className="notification__bell">
                <img src={bell} alt="notification" />
              </div>
              {/* notification bell end*/}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
