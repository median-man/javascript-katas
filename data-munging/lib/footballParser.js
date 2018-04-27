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
  dressData: data => data.trimRight().split(/\n/g),
  parse: function parseFootballData(data) {
    let [, ...rows] = data.trim().split(/\n/g);
    const isNotDivider = row => !row.includes('---');
    rows = rows.filter(isNotDivider).map(this.createTeam);
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
