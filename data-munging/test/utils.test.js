const { expect } = require('chai');
const utils = require('../lib/utils.js');

describe('findLeast', () => {
  const { findLeast } = utils;
  it('should be a function', () => expect(findLeast).to.be.a('function'));

  it('should return an integer', () => {
    const arr = [1];
    const actual = findLeast(arr);
    expect(actual).to.equal(0);
  });

  it('should return -1', () => {
    const arr = [];
    const actual = findLeast(arr);
    expect(actual).to.equal(-1);
  });

  it('should return 1', () => {
    const arr = [
      { day: 1, maxTemp: 88, minTemp: 59 },
      { day: 3, maxTemp: 90, minTemp: 59 },
      { day: 2, maxTemp: 79, minTemp: 63 },
      { day: 2, maxTemp: 79, minTemp: 63 },
    ];
    const compare = value => value.maxTemp - value.minTemp;
    const actual = findLeast(arr, compare);
    expect(actual).to.equal(2);
  });
});
