const { findLeast } = require('./utils.js');

module.exports = {
  createTeam(values) {
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

  teams(rows) {
    const firstDataRow = 1;
    return rows.slice(firstDataRow).map(this.createTeam);
  },

  teamWithLeastForAgainstDiff(rows) {
    const teams = this.teams(rows);
    const forAgainstDifference = team => Math.abs(team.for - team.against);
    const index = findLeast(teams, forAgainstDifference);
    return teams[index].team;
  },
};
