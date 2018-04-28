const parser = require('./parser.js');
const { findLeast } = require('./utils.js');

module.exports = {
  parser,

  createTeam(row) {
    const values = (typeof row === 'string' ? this.parser.parseRow(row) : row);
    const index = {
      team: 1,
      for: 6,
      against: 8,
    };
    return {
      team: values[index.team],
      for: values[index.for],
      against: values[index.against],
    };
  },

  parse(data) {
    const [, ...rows] = this.parser
      .parseRows(data)
      .map(this.createTeam.bind(this));
    return rows;
  },

  teamWithLeastForAgainstDiff(data) {
    const teams = this.parse(data);
    const forAgainstDifference = team => Math.abs(team.for - team.against);
    const index = findLeast(teams, forAgainstDifference);
    return teams[index].team;
  },
};
