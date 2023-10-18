import React from "react";
import Sidebar from "./Sidebar";
import Graph from "./Graph";
import FourBox from "./FourBox";

const Main = () => {
  return (
    <div className="full-div">
      <Sidebar />

      <Graph />
    </div>
  );
};

export default Main;
