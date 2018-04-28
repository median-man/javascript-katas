const readFile = require('./lib/readFile.js');
const weatherParser = require('./lib/weatherParser.js');
const footballParser = require('./lib/footballParser.js');

function renderWeather() {
  return readFile('./data/weather.dat', 'utf8')
    .then((data) => {
      const result = weatherParser.dayWithLowestTempSpread(data);
      return console.log(`Day ${result} has the lowest temp spread.`);
    });
}

function renderSoccer() {
  readFile('./data/football.dat', 'utf8')
    .then(data => footballParser.teamWithLeastForAgainstDiff(data))
    .then(team => console.log(`${team} has the least difference of 'for' and 'against' goals.`));
}

renderWeather()
  .then(renderSoccer)
  .catch((err) => { throw err; });
