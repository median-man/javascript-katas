const parser = require('./parser.js');

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
    return new TeamData(rows);
  },
};

class TeamData {
  constructor(rows) {
    this.rows = rows;
  }
  findLeastDifference() {
    const diff = row => Math.abs(parseFloat(row.for) - parseFloat(row.against));
    const hasLowerDiff = (a, b) => diff(a) < diff(b);
    const compareRows = (a, b) => (hasLowerDiff(a, b) ? a : b);
    return this.rows.reduce(compareRows, this.rows[0]);
  }
}
