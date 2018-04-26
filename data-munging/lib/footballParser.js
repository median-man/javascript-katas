module.exports = {
  parseRow: (row) => {
    const index = {
      team: 2,
      for: 7,
      against: 9,
    };
    const values = row.split(/\s+/g);
    return {
      team: values[index.team],
      for: values[index.for],
      against: values[index.against],
    };
  },
  parse: function parseFootballData(data) {
    let [, ...rows] = data.trim().split(/\n/g);
    const isNotDivider = row => !row.includes('---');
    rows = rows.filter(isNotDivider).map(this.parseRow);
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
