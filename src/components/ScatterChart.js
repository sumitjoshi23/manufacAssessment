import ReactEcharts from "echarts-for-react";
import wineData from "../utils/Wine-Data.json";

// Scatter chart component to be displayed
const ScatterChart = () => {
  const option = {
    title: {
      text: "Wine Data Scatter Chart",
      left: "center",
      top: 20,
    },

    // Added tooltip in option object to have a tooltip on chart data points
    tooltip: {},
    xAxis: {
      name: "Color intensity",
      data: colorIntensity,
      nameGap: 30,
      nameLocation: "middle",
    },
    yAxis: {
      type: "value",
      name: "Hue",
      nameLocation: "middle",
      nameGap: 40,
    },
    series: [
      {
        name: "Color Intensity vs Hue",
        type: "scatter",
        data: hue,
      },
    ],
  };
  return <ReactEcharts option={option} />;
};

export default ScatterChart;

// Getting the array of color intensities of the wines and sorting them in ascending order
const colorIntensity = wineData
  .map((wine) => wine["Color intensity"])
  .sort((a, b) => a - b);

// Gets the array of hue of wines
const hue = wineData.map((wine) => wine["Hue"]);
