import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <>
      <div className="pole"></div>
      <div className="trafficLight">
        <div
          onClick={() => setSelectedColor("red")}
          className={
            "light red" + (selectedColor === "red" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setSelectedColor("yellow")}
          className={
            "light yellow" + (selectedColor === "yellow" ? " glow" : "")
          }
        ></div>
        <div
          onClick={() => setSelectedColor("green")}
          className={
            "light green" + (selectedColor === "green" ? " glow" : "")}
        ></div>
      </div>
    </>
  );
};

export default Home;
