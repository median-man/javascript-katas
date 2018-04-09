/* eslint func-names: off, prefer-arrow-callback: off */
const { expect } = require('chai');
const makeField = require('./mine-sweeper.js');

describe('makeField', () => {
  it('is a function', () => {
    expect(makeField).to.be.a('function');
  });

  function formatInput(str) {
    const firstLine = /\n */;
    const leftPaddingOfAllLines = /^ +/gm;
    return str.replace(firstLine, '').replace(leftPaddingOfAllLines, '');
  }

  describe('valid input', () => {
    it('throws when first row does not contain two integers', () => {
      const input = formatInput(`
        *..
        ...
        0 0`);
      const shouldThrow = () => makeField(input);
      const expectedMsg = 'Fields must be preceded by integers for lines and columns.';
      expect(shouldThrow).throws(expectedMsg);
    });

    it('throws when lines for field is less than 1', () => {
      const input = formatInput(`
        0 3
        *..
        ...
        0 0`);
      throwsForInvalidLinesColumns(() => makeField(input));
    });

    function throwsForInvalidLinesColumns(shouldThrow) {
      const expectedMsg = 'Lines and columns must be > 0 and <= 100';
      expect(shouldThrow).throws(expectedMsg);
    }

    it('throws when missing end of input line "0 0"', () => {
      const input = formatInput(`
        *..
        ...
        0 0`);
      const shouldThrow = () => makeField(input);
      const expectedMsg = 'Missing end of input. ("0 0")';
      expect(shouldThrow).throws(expectedMsg);
    });
  });
});
