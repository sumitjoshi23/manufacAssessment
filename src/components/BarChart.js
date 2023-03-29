import ReactEcharts from "echarts-for-react";
import wineData from "../utils/Wine-Data.json";

// Bar chart component to be displayed
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

// Map to store alcohol categories and required wine data
const traveresedWineData = new Map();
const alcoholCategories = [];
const malicAcidAvg = [];

for (let i = 0; i < wineData.length; i++) {
  const currentWine = wineData[i];

  // If alcohol category of the current wine is not present in traversed wine data map,
  // add it with it's malic acid, alcohol category and assign a new count property to value 1
  if (!traveresedWineData.has(currentWine.Alcohol)) {
    const updatedAlcoholData = {
      count: 1,
      malicAcidSum: currentWine["Malic Acid"],
    };

    // Adding key as alcohol category and object having count and malic acid sum as value to the map
    traveresedWineData.set(currentWine.Alcohol, updatedAlcoholData);
  } else {
    // If the alcohol category of current wine was already present inside traversed wine data,
    // increase the count of category by 1, also update the malic acid sum.
    const { count, malicAcidSum } = traveresedWineData.get(currentWine.Alcohol);
    const sum = currentWine["Malic Acid"] + malicAcidSum;
    const updatedAlcoholData = {
      count: count + 1,
      malicAcidSum: sum,
    };

    // Adding key as alcohol category and object having count and malic acid sum as value to the map
    traveresedWineData.set(currentWine.Alcohol, updatedAlcoholData);
  }
}

traveresedWineData.forEach((value, key) => {
  alcoholCategories.push(key); // Adds all keys i.e. alcohol categories to the alcohol categories array
  malicAcidAvg.push(value.malicAcidSum / value.count); // Adds average of malic acid to the malic acid average array
});
