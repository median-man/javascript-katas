const { expect } = require('chai');
const { readFile } = require('fs');
const path = require('path');
const weatherParser = require('../weather/weatherParser.js');

describe('weatherParser', () => {
  it('should exist', () => expect(weatherParser).to.exist);

  describe('#createObservation()', () => {
    it('should accept an observation string and return an object', () => {
      const runTest = (input, expected) => {
        const actual = weatherParser.createObservation(input);
        expect(actual, `\ninput string:\n${input}\n`).to.eql(expected);
      };

      let input = '   1  88    59    74          53.8       0.00 F       280  9.6 270  17  1.6  93 23 1004.5';
      let expected = {
        day: 1,
        maxTemp: 88,
        minTemp: 59,
      };
      runTest(input, expected);

      input = '   3  82    71    74          53.8       0.00 F       280  9.6 270  17  1.6  93 23 1004.5';
      expected = {
        day: 3,
        maxTemp: 82,
        minTemp: 71,
      };
      runTest(input, expected);
    });
  });

  describe('#parseData', () => {
    it('should contain an array of weather observations', () => {
      const input = 'Dy MxT   MnT   AvT   HDDay  AvDP 1HrP TPcpn WxType PDir AvSp Dir MxS SkyC MxR MnR AvSLP\n\n' +
        '1  88    59    74          53.8       0.00 F       280  9.6 270  17  1.6  93 23 1004.5\n' +
        '2  79    63    71          46.5       0.00         330  8.7 340  23  3.3  70 28 1004.5\n';
      const expected = [
        { day: 1, maxTemp: 88, minTemp: 59 },
        { day: 2, maxTemp: 79, minTemp: 63 },
      ];
      const actual = weatherParser.parseData(input);
      expect(actual).to.eql(expected);
    });
  });

  describe('#dayWithLowestTempSpread()', () => {
    it(
      'should return the number for the day with the smallest difference between maxTemp and minTemp',
      () => {
        const input = 'Dy MxT   MnT   AvT   HDDay  AvDP 1HrP TPcpn WxType PDir AvSp Dir MxS SkyC MxR MnR AvSLP\n\n' +
        '1  88    59    74          53.8       0.00 F       280  9.6 270  17  1.6  93 23 1004.5\n' +
        '2  79    63    71          46.5       0.00         330  8.7 340  23  3.3  70 28 1004.5\n';
        const expected = 2;
        const actual = weatherParser.dayWithLowestTempSpread(input);
        expect(actual).to.equal(expected);
      },
    );
  });

  describe('Read data from file and find the day with the lowest temp spread', () => {
    it('should return an integer for the day', (done) => {
      const weatherDataPath = path.join(__dirname, '../data/weather.dat');
      readFile(weatherDataPath, 'utf8', (err, data) => {
        if (err) done(err);
        const result = weatherParser.dayWithLowestTempSpread(data);
        expect(result, `typeof result = ${typeof result}`).to.be.a('number');
        done();
      });
    });
  });
});
