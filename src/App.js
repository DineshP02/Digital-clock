import React from "react";

import "./App.css";
import { useState } from "react";
function App() {
  const [CurrentTime, setcurrentTime] = useState();
  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setcurrentTime(time);
  };
  setInterval(updateTime, 1000);

  return (
    <div>
      <h1 style={{ color: "red" }}> Digital Clock</h1>
      <h1 className="time">{CurrentTime}</h1>
    </div>
  );
}

export default App;
