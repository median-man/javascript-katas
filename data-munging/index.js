const { readFile } = require('fs');
const weatherParser = require('./weather/weatherParser.js');
const footballParser = require('./soccer/footballParser.js');

function renderWeather() {
  return new Promise((resolve, reject) => {
    readFile('./data/weather.dat', 'utf8', (err, data) => {
      if (err) throw reject(err);
      const result = weatherParser.dayWithLowestTempSpread(data);
      console.log(`Day ${result} has the lowest temp spread.`);
      resolve();
    });
  });
}

function renderSoccer() {
  return new Promise((resolve, reject) => {
    readFile('./data/football.dat', 'utf8', (err, data) => {
      if (err) throw reject(err);
      const result = footballParser
        .parse(data)
        .findLeastDifference()
        .team;
      console.log(`${result} has the least difference of 'for' and 'against' goals.`);
      resolve();
    });
  });
}


renderWeather()
  .then(renderSoccer)
  .catch((err) => { throw err; });
