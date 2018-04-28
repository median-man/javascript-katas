const readFile = require('./lib/readFile.js');
const weatherParser = require('./lib/weatherParser.js');
const footballParser = require('./lib/footballParser.js');

main();

function main() {
  renderWeather()
    .then(renderSoccer)
    .catch((err) => { throw err; });

  function renderWeather() {
    return readData('weather.dat')
      .then(data => weatherParser.dayWithLowestTempSpread(data))
      .then(result => displayMsg(`Day ${result} has the lowest temp spread.`));
  }

  function readData(fname) {
    return readFile(`./data/${fname}`, 'utf8');
  }

  function displayMsg(msg) {
    console.log(msg); // eslint-disable-line
  }

  function renderSoccer() {
    readData('football.dat')
      .then(data => footballParser.teamWithLeastForAgainstDiff(data))
      .then(team => displayMsg(`${team} has the least difference of 'for' and 'against' goals.`));
  }
}
