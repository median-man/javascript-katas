const { expect } = require('chai');
const parser = require('../lib/footballParser.js');

describe('footballParser', () => {
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

  describe('dressData()', () => {
    it('should be a function', () => expect(parser.dressData).to.be.a('function'));

    it('should return an array of rows from data', () => {
      let input =
        '       Team            P     W    L   D    F      A     Pts\n' +
        '    1. Arsenal         38    26   9   3    79  -  36    87\n' +
        '    2. Liverpool       38    24   8   6    67  -  30    80\n';
      let expected = [
        '       Team            P     W    L   D    F      A     Pts',
        '    1. Arsenal         38    26   9   3    79  -  36    87',
        '    2. Liverpool       38    24   8   6    67  -  30    80',
      ];
      let actual = parser.dressData(input);
      expect(actual).to.eql(expected);

      input =
        '  Dy MxT   MnT   AvT   HDDay  AvDP 1HrP TPcpn\n' +
        '   1  88    59    74          53.8       0.00\n' +
        '   2  79    63    71          46.5       0.00\n';
      expected = [
        '  Dy MxT   MnT   AvT   HDDay  AvDP 1HrP TPcpn',
        '   1  88    59    74          53.8       0.00',
        '   2  79    63    71          46.5       0.00',
      ];
      actual = parser.dressData(input);
      expect(actual).to.eql(expected);
    });

    it.skip('should not include rows with white space or line breaks', () => {
      const input =
        '       Team            P     W    L   D    F      A     Pts\n' +
        '    1. Arsenal         38    26   9   3    79  -  36    87\n' +
        '   -------------------------------------------------------\n' +
        '    2. Liverpool       38    24   8   6    67  -  30    80\n';
      const expected = [
        '       Team            P     W    L   D    F      A     Pts',
        '    1. Arsenal         38    26   9   3    79  -  36    87',
        '    2. Liverpool       38    24   8   6    67  -  30    80',
      ];
      const actual = parser.dressData(input);
      expect(actual).to.eql(expected);
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

  describe('createTeam()', () => {
    it('should be a function', () => {
      expect(parser.createTeam).to.be.a('function');
    });

    it('should return { team: "Arsenal", for: "79", against: "36" }', () => {
      const test = (input, expected) => {
        const actual = parser.createTeam(input);
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

  describe('parse()', () => {
    it('should return teamData object with the rows property set', () => {
      const input =
        '       Team            P     W    L   D    F      A     Pts\n' +
        '    1. Arsenal         38    26   9   3    79  -  36    87\n' +
        '    2. Liverpool       38    24   8   6    67  -  30    80\n';
      const expected = [
        { team: 'Arsenal', for: '79', against: '36' },
        { team: 'Liverpool', for: '67', against: '30' },
      ];
      const actual = parser.parse(input);
      expect(actual.rows).to.eql(expected);
    });

    it('should handle input with a line break', () => {
      const input =
        '       Team            P     W    L   D    F      A     Pts\n' +
        '   17. Sunderland      38    10  10  18    29  -  51    40\n' +
        '   -------------------------------------------------------\n' +
        '   18. Ipswich         38     9   9  20    41  -  64    36\n';
      const expected = [
        { team: 'Sunderland', for: '29', against: '51' },
        { team: 'Ipswich', for: '41', against: '64' },
      ];
      const actual = parser.parse(input);
      expect(actual.rows).to.eql(expected);
    });
  });

  describe('teamData', () => {
    describe('findLeastDifference()', () => {
      describe('when there is only one team in the data', () => {
        it('should return a team when there is only one team', () => {
          const expected = { team: 'Sunderland', for: '29', against: '51' };
          const input = '       Team            P     W    L   D    F      A     Pts\n' +
          '   17. Sunderland      38    10  10  18    29  -  51    40\n';
          const actual = parser.parse(input).findLeastDifference();
          expect(actual).to.eql(expected);
        });
      });

      describe('when there is two teams in the data', () => {
        it('should return the team where the difference of for and against is the smallest', () => {
          const expected = { team: 'Liverpool', for: '67', against: '30' };
          const input =
          '       Team            P     W    L   D    F      A     Pts\n' +
          '    1. Arsenal         38    26   9   3    80  -  30    87\n' +
          '    2. Liverpool       38    24   8   6    67  -  30    80\n';
          const actual = parser.parse(input).findLeastDifference();
          expect(actual).to.eql(expected);
        });

        it('should return compare using absolute values for the difference', () => {
          const expected = { team: 'Liverpool', for: '67', against: '30' };
          const input =
          '       Team            P     W    L   D    F      A     Pts\n' +
          '    1. Arsenal         38    26   9   3    20  -  80    87\n' +
          '    2. Liverpool       38    24   8   6    67  -  30    80\n';
          const actual = parser.parse(input).findLeastDifference();
          expect(actual).to.eql(expected);
        });
      });

      describe('when there are multiple teams in the data', () => {
        it('should return the team with the least absolute difference of for and against', () => {
          const expected = { team: 'Sunderland', for: '29', against: '51' };
          const input =
            '       Team            P     W    L   D    F      A     Pts\n' +
            '    1. Arsenal         38    26   9   3    80  -  30    87\n' +
            '    2. Liverpool       38    24   8   6    67  -  30    80\n' +
            '   17. Sunderland      38    10  10  18    29  -  51    40\n';
          const actual = parser.parse(input).findLeastDifference();
          expect(actual).to.eql(expected);
        });
      });
    });
  });

  describe('acceptance test', () => {
    it(
      'should return the name of the team with the least difference between for and against',
      () => {
        const expected = 'Sunderland';
        const input =
            '       Team            P     W    L   D    F      A     Pts\n' +
            '    1. Arsenal         38    26   9   3    80  -  30    87\n' +
            '   -------------------------------------------------------\n' +
            '    2. Liverpool       38    24   8   6    67  -  30    80\n' +
            '   17. Sunderland      38    10  10  18    29  -  51    40\n';
        const actual = parser
          .parse(input)
          .findLeastDifference()
          .team;
        expect(actual).to.eql(expected);
      },
    );
  });
});
