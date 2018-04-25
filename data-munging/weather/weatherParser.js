function createObservation(obsStr) {
  const allNonWhiteSpace = /\S+/g;
  const numbers = obsStr.match(allNonWhiteSpace).map(num => parseFloat(num));
  const [day, maxTemp, minTemp] = numbers;
  return { day, maxTemp, minTemp };
}

function parseData(weatherData) {
  const headerRowCount = 2; // headers and 1 blank line
  const observationStrings =
    weatherData
      .trim()
      .split(/\n/g)
      .slice(headerRowCount);
  return observationStrings.map(createObservation);
}

function dayWithLowestTempSpread(weatherData) {
  const observations = parseData(weatherData);
  const tempSpread = obs => obs.maxTemp - obs.minTemp;
  const getObsWithLowerSpread = (obs1, obs2) => {
    const spread1 = tempSpread(obs1);
    const spread2 = tempSpread(obs2);
    return (spread1 > spread2) ? obs2 : obs1;
  };
  let resultObs = observations[0];
  observations.forEach((obs) => {
    resultObs = getObsWithLowerSpread(resultObs, obs);
  });
  return resultObs.day;
}
module.exports = { createObservation, parseData, dayWithLowestTempSpread };
