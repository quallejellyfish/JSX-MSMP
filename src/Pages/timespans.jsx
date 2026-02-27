import React from "react";
import day1img from "../Assets/day1img.png";
import day1vid from "../Assets/wolfi_learning_reactJSX_part_1-makingsolcialmediaapp.mp4";
import "../Styles/timestamps.css";

const Timestamps = () => {
  return (
    <div className="wrapper">
      <div className="day-wrapper">
        <div className="head">
          Day 1 -{" "}
          <span style={{ fontStyle: "italic" }}>23.11.2024 | 13:00-23:00</span>
        </div>
        <div className="info-text">
          added left, middle, right, content<br></br>
          added posts logic to create posts<br></br>
          added the ability to post/upload images<br></br>
          added icons<br></br>
          added a Todolist<br></br>
        </div>
        <img src={day1img} alt="time it took" />
        <video src={day1vid} controls></video>
      </div>
      <div className="day-wrapper">
        <div className="head">
          Day 2 -{" "}
          <span style={{ fontStyle: "italic" }}>7.12, 17.12.2024 | ~6 hours</span>
        </div>
        <div className="info-text">
          relearned PHP and MySQL<br></br>
          added a Register and Login page<br></br>
          added logic to Register and Login<br></br>
          added a Database (MySQL) i used PDO<br></br>
        </div>
      </div>
    </div>
  );
};

export default Timestamps;
