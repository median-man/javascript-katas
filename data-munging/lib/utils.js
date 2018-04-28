module.exports = {
  findLeast: function findLeast(arr, compare = (val => val)) {
    const compareResults = arr.map(value => compare(value));
    const minValue = Math.min(...compareResults);
    const indexOfMin = compareResults.indexOf(minValue);
    return indexOfMin;
  },
};
