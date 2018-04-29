const parser = require('./parser.js');
const { findLeast } = require('./utils.js');

module.exports = {
  createObservation: function createObservation(values) {
    const [day, maxTemp, minTemp] = values.map(value => parseFloat(value));
    return { day, maxTemp, minTemp };
  },

  observations(rows) {
    return rows.map(this.createObservation);
  },

  removeHeadings(rows) {
    const firstRowOfData = 1;
    return rows.slice(firstRowOfData);
  },

  dayWithLowestTempSpread(rows) {
    const dataRows = this.removeHeadings(rows);
    const observations = this.observations(dataRows);
    const tempSpread = ({ maxTemp, minTemp }) => maxTemp - minTemp;
    const index = findLeast(observations, tempSpread);
    return observations[index].day;
  },
};
