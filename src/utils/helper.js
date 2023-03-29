// Helper function which takes json data as parameter and returns an array having colorIntensity vs hue data ponints
export function getScatterChartData(jsonData) {
  const intensityVsHueData = jsonData.map((wine) => [
    wine["Color intensity"],
    wine["Hue"],
  ]);

  return intensityVsHueData;
}

// Helper function which takes json data as parameter and returns an object having arrrays for alcohol categories and malic acid average data
export function getBarChartData(jsonData) {
  // Map to store alcohol categories and required wine data
  const traveresedjsonData = new Map();
  const alcoholCategories = [];
  const malicAcidAvg = [];

  for (let i = 0; i < jsonData.length; i++) {
    const currentWine = jsonData[i];

    // If alcohol category of the current wine is not present in traversed wine data map,
    // add it with it's malic acid, alcohol category and assign a new count property to value 1
    if (!traveresedjsonData.has(currentWine.Alcohol)) {
      const updatedAlcoholData = {
        count: 1,
        malicAcidSum: currentWine["Malic Acid"],
      };

      // Adding key as alcohol category and object having count and malic acid sum as value to the map
      traveresedjsonData.set(currentWine.Alcohol, updatedAlcoholData);
    } else {
      // If the alcohol category of current wine was already present inside traversed wine data,
      // increase the count of category by 1, also update the malic acid sum.
      const { count, malicAcidSum } = traveresedjsonData.get(
        currentWine.Alcohol
      );
      const sum = currentWine["Malic Acid"] + malicAcidSum;
      const updatedAlcoholData = {
        count: count + 1,
        malicAcidSum: sum,
      };

      // Adding key as alcohol category and object having count and malic acid sum as value to the map
      traveresedjsonData.set(currentWine.Alcohol, updatedAlcoholData);
    }
  }

  traveresedjsonData.forEach((value, key) => {
    alcoholCategories.push(key); // Adds all the keys i.e. alcohol categories to the alcohol categories array
    malicAcidAvg.push(value.malicAcidSum / value.count); // Adds average of malic acid to the malic acid average array
  });
  return { alcoholCategories, malicAcidAvg };
}
