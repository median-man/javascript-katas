const { expect } = require('chai');
const parser = require('../lib/parser.js');

describe('Parser', () => {
  describe('parseRow()', () => {
    it('should be a function', () => {
      expect(parser.parseRow).to.be.a('function');
    });

    it('should return an array containing an element for each text item in row', () => {
      const test = (input, expected) => {
        const actual = parser.parseRow(input);
        expect(actual).to.eql(expected);
      };
      test(
        '    1. Arsenal         38    26   9   3    79  -  36    87',
        ['1.', 'Arsenal', '38', '26', '9', '3', '79', '-', '36', '87'],
      );
      test(
        '    2. Liverpool       38    24   8   6    80  -  20    80',
        ['2.', 'Liverpool', '38', '24', '8', '6', '80', '-', '20', '80'],
      );
    });
  });
});
