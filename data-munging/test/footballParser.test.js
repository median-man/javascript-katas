const { expect } = require('chai');
const parser = require('../lib/footballParser.js');

describe('footballParser', () => {
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
        ['1.', 'Arsenal', '38', '26', '9', '3', '79', '-', '36', '87'],
        { team: 'Arsenal', for: '79', against: '36' },
      );
      test(
        ['2.', 'Liverpool', '38', '24', '8', '6', '80', '-', '20', '80'],
        { team: 'Liverpool', for: '80', against: '20' },
      );
    });
  });

  describe('parse()', () => {
    it('should return array of objects', () => {
      const input =
        '       Team            P     W    L   D    F      A     Pts\n' +
        '    1. Arsenal         38    26   9   3    79  -  36    87\n' +
        '    2. Liverpool       38    24   8   6    67  -  30    80\n';
      const expected = [
        { team: 'Arsenal', for: '79', against: '36' },
        { team: 'Liverpool', for: '67', against: '30' },
      ];
      const actual = parser.parse(input);
      expect(actual).to.eql(expected);
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
      expect(actual).to.eql(expected);
    });
  });

  describe('teamWithLeastForAgainstDiff', () => {
    it('should be a function', () => expect(parser.teamWithLeastForAgainstDiff).to.be.a('function'));

    describe('when there is only one team in the data', () => {
      it('should return a team when there is only one team', () => {
        const expected = 'Sunderland';
        const input = '       Team            P     W    L   D    F      A     Pts\n' +
        '   17. Sunderland      38    10  10  18    29  -  51    40\n';
        const actual = parser.teamWithLeastForAgainstDiff(input);
        expect(actual).to.eql(expected);
      });
    });

    describe('when there is two teams in the data', () => {
      it('should return "Liverpool"', () => {
        const expected = 'Liverpool';
        const input =
        '       Team            P     W    L   D    F      A     Pts\n' +
        '    1. Arsenal         38    26   9   3    80  -  30    87\n' +
        '    2. Liverpool       38    24   8   6    67  -  30    80\n';
        const actual = parser.teamWithLeastForAgainstDiff(input);
        expect(actual).to.eql(expected);
      });

      it('should return "', () => {
        const expected = 'Gryffindor';
        const input =
        '       Team            P     W    L   D    F      A     Pts\n' +
        '    1. Arsenal         38    26   9   3    20  -  80    87\n' +
        '    2. Gryffindor      38    24   8   6    67  -  30    80\n';
        const actual = parser.teamWithLeastForAgainstDiff(input);
        expect(actual).to.eql(expected);
      });
    });

    describe('when there are multiple teams in the data', () => {
      it('should return "Sunderland"', () => {
        const expected = 'Sunderland';
        const input =
          '       Team            P     W    L   D    F      A     Pts\n' +
          '    1. Arsenal         38    26   9   3    80  -  30    87\n' +
          '    2. Liverpool       38    24   8   6    67  -  30    80\n' +
          '   17. Sunderland      38    10  10  18    29  -  51    40\n';
        const actual = parser.teamWithLeastForAgainstDiff(input);
        expect(actual).to.eql(expected);
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
        const actual = parser.teamWithLeastForAgainstDiff(input);
        expect(actual).to.eql(expected);
      },
    );
  });
});
