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
};
