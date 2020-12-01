import React from "react";
import Carausel from "./Carausel";
import CountDown from "./CountDown";
const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carausel />
      <div className="artist_name">
        <div className="wrapper">Front End App</div>
      </div>
      <CountDown />
    </div>
  );
};

export default Featured;
