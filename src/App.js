import React from "react";
import BarChart from "./components/BarChart";
import ScatterChart from "./components/ScatterChart";

const App = () => {
  return (
    <div style={{ margin: "auto" }}>
      <ScatterChart />
      <hr />
      <BarChart />
    </div>
  );
};

export default App;
