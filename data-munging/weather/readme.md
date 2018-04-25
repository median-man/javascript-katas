# parseWeather.js
Parses weather data from file. Creates an array of weather observations for each day in the data.

### Example Usage
```javascript
const { dayWithLowestTempSpread } = require('parseWeather');
const { readFile } = require('fs');

readFile('weather.dat', 'utf8', (err, data) => {
  if (err) throw err;
  const result = weatherParser.dayWithLowestTempSpread(data);
  console.log(result); // 14
});
```
