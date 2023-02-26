import React from "react";
import { BsFillClockFill } from "react-icons/bs";
import "./App.css";

function App(props) {
  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();
  const currentHours = date.getHours();
  const currentMinutes = date.getMinutes();
  const currentSeconds = date.getSeconds();
  const timeIcon = BsFillClockFill();

  return (
    <div className="App">
      <h1>
        {timeIcon} The Current Day & Time {timeIcon}
      </h1>
      <h1>
        {currentHours}:{currentMinutes}:{currentSeconds}
      </h1>
      <h1>
        {currentMonth}/{currentDay}/{currentYear}
      </h1>
    </div>
  );
}

export default App;
