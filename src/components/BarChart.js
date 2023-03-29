import ReactEcharts from "echarts-for-react";
import wineData from "../utils/Wine-Data.json";
import { getBarChartData } from "../utils/helper";

// Gets the alcohol categories and malic acid average arrays to be shown on map
const { alcoholCategories, malicAcidAvg } = getBarChartData(wineData);

const BarChart = () => {
  const option = {
    title: {
      text: "Wine Data Bar Chart",
      left: "center",
      top: 20,
    },

    // Added tooltip in option object to have a tooltip on chart data points
    tooltip: {},
    xAxis: {
      name: "Alcohol Category",
      type: "category",
      data: alcoholCategories,
      nameLocation: "middle",
      nameGap: 30,
    },

    yAxis: {
      type: "value",
      name: "Malic Acid Average",
      nameLocation: "middle",
      nameGap: 40,
      axisLine: {
        show: true,
      },
    },

    series: [
      {
        name: "Alcohol Category vs Malic Acid Average",
        type: "bar",
        data: malicAcidAvg,
      },
    ],
  };
  return <ReactEcharts option={option} />;
};

export default BarChart;
