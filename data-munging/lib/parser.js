module.exports = {
  parseRows: function parseRows(data) {
    const rows = data.split(/\n/g);
    return this.removeNonDataRows(rows);
  },

  parseRow(row) {
    return row.trim().split(/\s+/g);
  },

  removeNonDataRows(rows) {
    const matchDivider = /-{3,}/;
    const hasValues = row => !matchDivider.test(row);
    const hasText = row => /\S/.test(row);
    const hasData = row => hasText(row) && hasValues(row);
    return rows.filter(hasData);
  },
};
