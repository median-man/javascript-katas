module.exports = {
  parseRow: row => row.trim().split(/\s+/g),
  createTeam: (row) => {
    const index = {
      team: 1,
      for: 6,
      against: 8,
    };
    const values = module.exports.parseRow(row);
    return {
      team: values[index.team],
      for: values[index.for],
      against: values[index.against],
    };
  },
  removeNonDataRows: (rows) => {
    const matchDivider = /-{3,}/;
    const hasValues = row => !matchDivider.test(row);
    const hasText = row => /\S/.test(row);
    const hasData = row => hasText(row) && hasValues(row);
    return rows.filter(hasData);
  },
  dressData: function dressData(data) {
    const rows = data.split(/\n/g);
    return this.removeNonDataRows(rows);
  },
  parse: function parseFootballData(data) {
    const [, ...rows] = this.dressData(data).map(this.createTeam);
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
