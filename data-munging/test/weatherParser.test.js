const { expect } = require('chai');
const weatherParser = require('../lib/weatherParser.js');

describe('weatherParser', () => {
  it('should exist', () => expect(weatherParser).to.exist);

  describe('#createObservation()', () => {
    it('should accept an observation string and return an object', () => {
      const runTest = (input, expected) => {
        const actual = weatherParser.createObservation(input);
        expect(actual, `\ninput string:\n${input}\n`).to.eql(expected);
      };

      let input = ['1', '88', '59', '74', '53.8', '0.00'];
      let expected = {
        day: 1,
        maxTemp: 88,
        minTemp: 59,
      };
      runTest(input, expected);

      input = ['2', '79', '63', '71', '46.5', '0.00'];
      expected = {
        day: 2,
        maxTemp: 79,
        minTemp: 63,
      };
      runTest(input, expected);
    });
  });

  describe('#observations()', () => {
    const testObservations = (rows, expected) => {
      const actual = weatherParser.observations(rows);
      expect(actual).to.eql(expected);
    };

    it('should return an array containing 1 weather observation', () => {
      const rows = [
        ['1', '88', '59', '74', '53.8', '0.00'],
      ];
      const expected = [
        { day: 1, maxTemp: 88, minTemp: 59 },
      ];
      testObservations(rows, expected);
    });

    it('should return an array containing 2 weather observation', () => {
      const rows = [
        ['2', '79', '63', '71', '46.5', '0.00'],
        ['1', '88', '59', '74', '53.8', '0.00'],
      ];
      const expected = [
        { day: 2, maxTemp: 79, minTemp: 63 },
        { day: 1, maxTemp: 88, minTemp: 59 },
      ];
      testObservations(rows, expected);
    });
  });

  describe('#removeHeadings()', () => {
    it('should remove headings row', () => {
      const rows = [
        ['Dy', 'MxT', 'MnT', 'AvT', 'HDDay', 'AvDP', '1HrP', 'TPcpn'],
        ['1', '88', '59', '74', '53.8', '0.00'],
        ['2', '79', '63', '71', '46.5', '0.00'],
      ];
      const expected = [
        ['1', '88', '59', '74', '53.8', '0.00'],
        ['2', '79', '63', '71', '46.5', '0.00'],
      ];
      const actual = weatherParser.removeHeadings(rows);
      expect(actual).to.be.eql(expected);
    });
  });

  describe('#dayWithLowestTempSpread()', () => {
    it(
      'should return the number for the day with the smallest difference between maxTemp and minTemp',
      () => {
        const input = [
          ['Dy', 'MxT', 'MnT', 'AvT', 'HDDay', 'AvDP', '1HrP', 'TPcpn'],
          ['1', '88', '59', '74', '53.8', '0.00'],
          ['2', '79', '63', '71', '46.5', '0.00'],
        ];
        const expected = 2;
        const actual = weatherParser.dayWithLowestTempSpread(input);
        expect(actual).to.equal(expected);
      },
    );
  });
});
