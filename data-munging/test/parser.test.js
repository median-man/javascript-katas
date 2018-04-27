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

  describe('removeNonDataRows()', () => {
    const testExpectedResult = (input, expected) => {
      const actual = parser.removeNonDataRows(input);
      const msg = `[${expected.join().trim().substr(0, 20)}...]`;
      expect(actual).to.eql(expected, msg);
    };

    it('should remove a dashed line', () => {
      let input = [
        '    1. Arsenal         38    26   9   3    79  -  36    87',
        '   -------------------------------------------------------',
      ];
      let expected = ['    1. Arsenal         38    26   9   3    79  -  36    87'];
      testExpectedResult(input, expected);

      input = [
        '   -------------------------------------------------------',
        '    2. Liverpool       38    24   8   6    67  -  30    80',
      ];
      expected = ['    2. Liverpool       38    24   8   6    67  -  30    80'];
      testExpectedResult(input, expected);
    });

    it('should remove empty rows', () => {
      const input = [
        '    1. Arsenal         38    26   9   3    79  -  36    87',
        '                                                          ',
      ];
      const expected = ['    1. Arsenal         38    26   9   3    79  -  36    87'];
      testExpectedResult(input, expected);
    });
  });

  describe('parseRows()', () => {
    it('should be a function', () => expect(parser.parseRows).to.be.a('function'));

    it('should return an array of rows from data', () => {
      let input =
        '       Team            P     W    L   D    F      A     Pts\n' +
        '    1. Arsenal         38    26   9   3    79  -  36    87\n' +
        '    2. Liverpool       38    24   8   6    67  -  30    80\n';
      let expected = [
        ['Team', 'P', 'W', 'L', 'D', 'F', 'A', 'Pts'],
        ['1.', 'Arsenal', '38', '26', '9', '3', '79', '-', '36', '87'],
        ['2.', 'Liverpool', '38', '24', '8', '6', '67', '-', '30', '80'],
      ];
      let actual = parser.parseRows(input);
      expect(actual).to.eql(expected);

      input =
        '  Dy MxT   MnT   AvT   HDDay  AvDP 1HrP TPcpn\n' +
        '   1  88    59    74          53.8       0.00\n' +
        '   2  79    63    71          46.5       0.00\n';
      expected = [
        ['Dy', 'MxT', 'MnT', 'AvT', 'HDDay', 'AvDP', '1HrP', 'TPcpn'],
        ['1', '88', '59', '74', '53.8', '0.00'],
        ['2', '79', '63', '71', '46.5', '0.00'],
      ];
      actual = parser.parseRows(input);
      expect(actual).to.eql(expected);
    });

    it('should not include rows with white space or line breaks', () => {
      const input =
        '       Team            P     W    L   D    F      A     Pts\n' +
        '    1. Arsenal         38    26   9   3    79  -  36    87\n' +
        '   -------------------------------------------------------\n' +
        '    2. Liverpool       38    24   8   6    67  -  30    80\n';
      const expected = [
        ['Team', 'P', 'W', 'L', 'D', 'F', 'A', 'Pts'],
        ['1.', 'Arsenal', '38', '26', '9', '3', '79', '-', '36', '87'],
        ['2.', 'Liverpool', '38', '24', '8', '6', '67', '-', '30', '80'],
      ];
      const actual = parser.parseRows(input);
      expect(actual).to.eql(expected);
    });
  });
});
