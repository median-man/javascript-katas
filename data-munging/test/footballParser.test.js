const { expect } = require('chai');
const parser = require('../soccer/footballParser.js');

describe('footballParser', () => {
  describe('parseRow()', () => {
    it('should be a function', () => {
      expect(parser.parseRow).to.be.a('function');
    });

    it('should return { team: "Arsenal", for: "79", against: "36" }', () => {
      const test = (input, expected) => {
        const actual = parser.parseRow(input);
        expect(actual).to.eql(expected, JSON.stringify(expected));
      };
      test(
        '    1. Arsenal         38    26   9   3    79  -  36    87',
        { team: 'Arsenal', for: '79', against: '36' },
      );
      test(
        '    2. Liverpool       38    24   8   6    80  -  20    80',
        { team: 'Liverpool', for: '80', against: '20' },
      );
    });
  });
});
