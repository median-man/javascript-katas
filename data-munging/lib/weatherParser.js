const parser = require('./parser.js');

module.exports = {
  parser,

  createObservation: function createObservation(values) {
    const [day, maxTemp, minTemp] = values.map(value => parseFloat(value));
    return { day, maxTemp, minTemp };
  },

  parse: function parseData(weatherData) {
    const firstRowOfValues = 1;
    return this.parser
      .parseRows(weatherData)
      .slice(firstRowOfValues)
      .map(this.createObservation.bind(this));
  },

  dayWithLowestTempSpread: function dayWithLowestTempSpread(weatherData) {
    const observations = this.parse(weatherData);
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
  },
};
