const { readFile } = require('fs');
const weatherParser = require('./weather/weatherParser.js');

const weather = {
  parser: weatherParser,
  result: -1,
  fileName: './data/weather.dat',
  encoding: 'utf8',
  fileReader: readFile,
  parse: function parseData(err, data) {
    if (err) throw err;
    this.result = this.parser.dayWithLowestTempSpread(data);
  },
  run: function runWeather(render) {
    this.fileReader(this.fileName, this.encoding, (err, data) => {
      this.parse(err, data);
      render(this.result);
    });
  },
};

weather.run((result) => {
  console.log(`Day ${result} has the lowest temp spread.`);
});
module.exports = { weather };
