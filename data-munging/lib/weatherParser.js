const parser = require('./parser.js');
const { findLeast } = require('./utils.js');

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
    const tempSpread = ({ maxTemp, minTemp }) => maxTemp - minTemp;
    const index = findLeast(observations, tempSpread);
    return observations[index].day;
  },
};
