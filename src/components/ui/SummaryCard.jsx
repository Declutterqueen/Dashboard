<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function SummaryCard({ title, value, progress }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start > progress) {
        clearInterval(interval);
      } else {
        setAnimatedProgress(start);
      }
    }, 15); // speed of animation
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="summary-card">
      <div className="card-content">
        <div className="text">
          <h4>{title}</h4>
          <h2>{value}</h2>
        </div>
        <div className="circle-progress">
          <CircularProgressbar
            value={animatedProgress}
            text={`${animatedProgress}%`}
            styles={buildStyles({
              textSize: "28px",
              pathColor: "#6366f1",
              textColor: "#e2e8f0",
              trailColor: "#334155",
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
=======
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function SummaryCard({ title, value, progress }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start > progress) {
        clearInterval(interval);
      } else {
        setAnimatedProgress(start);
      }
    }, 15); // speed of animation
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="summary-card">
      <div className="card-content">
        <div className="text">
          <h4>{title}</h4>
          <h2>{value}</h2>
        </div>
        <div className="circle-progress">
          <CircularProgressbar
            value={animatedProgress}
            text={`${animatedProgress}%`}
            styles={buildStyles({
              textSize: "28px",
              pathColor: "#6366f1",
              textColor: "#e2e8f0",
              trailColor: "#334155",
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
>>>>>>> d41df5b306612acc83a1c46b7b8706d731875a34
