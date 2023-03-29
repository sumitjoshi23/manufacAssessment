import ReactEcharts from "echarts-for-react";
import wineData from "../utils/Wine-Data.json";
import { getScatterChartData } from "../utils/helper";

// Gets the  array having colorIntensity vs hue points to be shown on map
const intensityVsHueData = getScatterChartData(wineData);

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
      nameGap: 30,
      nameLocation: "middle",
      type: "value",
    },
    yAxis: {
      name: "Hue",
      nameGap: 40,
      nameLocation: "middle",
      type: "value",
    },
    series: [
      {
        name: "Color Intensity vs Hue",
        type: "scatter",
        data: intensityVsHueData,
      },
    ],
  };
  return <ReactEcharts option={option} />;
};

export default ScatterChart;
