const readFile = require('./lib/readFile.js');
const weatherParser = require('./lib/weatherParser.js');
const footballParser = require('./lib/footballParser.js');
const parser = require('./lib/parser.js');

main();

function main() {
  const weatherPipe = pipe(
    parser.parseRows.bind(parser),
    weatherParser.dayWithLowestTempSpread.bind(weatherParser),
    renderWeather,
  );
  readData('weather.dat').then(weatherPipe);

  const soccerPipe = pipe(
    footballParser.teamWithLeastForAgainstDiff.bind(footballParser),
    renderSoccer,
  );
  readData('football.dat').then(soccerPipe);

  function pipe(...fns) {
    return x => fns.reduce((y, fn) => fn(y), x);
  }

  function readData(fname) {
    return readFile(`./data/${fname}`, 'utf8');
  }

  function renderWeather(day) {
    displayMsg(`Day ${day} has the lowest temp spread.`);
  }

  function displayMsg(msg) {
    console.log(msg); // eslint-disable-line
  }

  function renderSoccer(team) {
    displayMsg(`${team} has the least difference of 'for' and 'against' goals.`);
  }
}
