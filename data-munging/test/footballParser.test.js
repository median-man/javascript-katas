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

  describe('teams()', () => {
    it('should return an empty array', () => {
      const input = [];
      const expected = [];
      const actual = parser.teams(input);
      expect(actual).to.eql(expected, input);
    });

    it('should return array of team objects', () => {
      const input = [
        ['Team', 'P', 'W', 'L', 'D', 'F', 'A', 'Pts'],
        ['1.', 'Arsenal', '38', '26', '9', '3', '79', '-', '36', '87'],
        ['2.', 'Liverpool', '38', '24', '8', '6', '80', '-', '20', '80'],
      ];
      const expected = [
        { team: 'Arsenal', for: '79', against: '36' },
        { team: 'Liverpool', for: '80', against: '20' },
      ];
      const actual = parser.teams(input);
      expect(actual).to.eql(expected);
    });
  });

  describe('teamWithLeastForAgainstDiff()', () => {
    it('should be a function', () =>
      expect(parser.teamWithLeastForAgainstDiff).to.be.a('function'));

    describe('when there is only one team', () => {
      it('should return a team when there is only one team', () => {
        const expected = 'Sunderland';
        const input = [
          ['Team', 'P', 'W', 'L', 'D', 'F', 'A', 'Pts'],
          ['1.', 'Sunderland', '38', '26', '9', '3', '79', '-', '36', '87'],
        ];
        const actual = parser.teamWithLeastForAgainstDiff(input);
        expect(actual).to.eql(expected);
      });
    });

    describe('when there are two teams', () => {
      it('should return "Liverpool"', () => {
        const expected = 'Liverpool';
        const input = [
          ['Team', 'P', 'W', 'L', 'D', 'F', 'A', 'Pts'],
          ['1.', 'Arsenal', '38', '26', '9', '3', '80', '-', '30', '87'],
          ['2.', 'Liverpool', '38', '24', '8', '6', '67', '-', '30', '80'],
        ];
        const actual = parser.teamWithLeastForAgainstDiff(input);
        expect(actual).to.eql(expected);
      });

      it('should return "Gryffindor"', () => {
        const expected = 'Gryffindor';
        const input = [
          ['Team', 'P', 'W', 'L', 'D', 'F', 'A', 'Pts'],
          ['1.', 'Arsenal', '38', '26', '9', '3', '20', '-', '80', '87'],
          ['2.', 'Gryffindor', '38', '24', '8', '6', '67', '-', '30', '80'],
        ];
        const actual = parser.teamWithLeastForAgainstDiff(input);
        expect(actual).to.eql(expected);
      });
    });

    describe('when there are multiple teams', () => {
      it('should return "Sunderland"', () => {
        const expected = 'Sunderland';
        const input = [
          ['Team', 'P', 'W', 'L', 'D', 'F', 'A', 'Pts'],
          ['1.', 'Arsenal', '38', '26', '9', '3', '80', '-', '30', '87'],
          ['2.', 'Liverpool', '38', '24', '8', '6', '67', '-', '30', '80'],
          ['17.', 'Sunderland', '38', '10', '10', '18', '29', '-', '51', '40'],
        ];
        const actual = parser.teamWithLeastForAgainstDiff(input);
        expect(actual).to.eql(expected);
      });
    });
  });
});
