/* eslint prefer-arrow-callback: off */
const { expect } = require('chai');
const nextGen = require('./game-of-life.js');

describe('nextGen', () => {
  it('is a function', () => {
    expect(nextGen).to.be.a('function');
  });

  describe('when input is a single row', () => {
    it('nextGen(".") returns "."', () => {
      const result = nextGen('.');
      expect(result).to.equal('.');
    });
    it('nextGen("..") returns ".."', () => {
      const result = nextGen('..');
      expect(result).to.equal('..');
    });
    it('nextGen(".*") returns ".."', () => {
      const result = nextGen('.*');
      expect(result).to.equal('..');
    });
    it('nextGen("**") returns ".."', () => {
      const result = nextGen('**');
      expect(result).to.equal('..');
    });
  });

  describe('when input is 2x2', () => {
    it('nextGen(".*\\n**") returns "**\\n**"', () => {
      const result = nextGen('.*\n**');
      expect(result).to.equal('**\n**');
    });
    it('nextGen("..\\n**") returns "..\\n.."', () => {
      const result = nextGen('..\n**');
      expect(result).to.equal('..\n..');
    });
    it('nextGen("*.\\n**") returns "**\\n**"', () => {
      const result = nextGen('*.\n**');
      expect(result).to.equal('**\n**');
    });
    it('nextGen("**\\n.*") returns "**\\n**"', () => {
      const result = nextGen('**\n.*');
      expect(result).to.equal('**\n**');
    });
  });

  describe('when input is 2x3', () => {
    it('nextGen("*..\\n*.*") returns "...\\n..."', () => {
      const result = nextGen('*..\n*.*');
      expect(result).to.equal('.*.\n.*.');
    });
    it('nextGen("...\\n...") returns "...\\n..."', () => {
      const result = nextGen('**.\n***');
      expect(result).to.equal('*.*\n*.*');
    });
  });

  describe('additional tests', () => {
    it('returns 4x4 grid for the next generation', () => {
      const input = [
        '..*.',
        '.**.',
        '....',
        '*...',
      ].join('\n');
      const expected = [
        '.**.',
        '.**.',
        '.*..',
        '....',
      ].join('\n');
      const actual = nextGen(input);
      expect(actual).to.equal(expected);
    });
    it('returns 4x4 grid for the next generation', () => {
      const input = [
        '..*.',
        '.**',
        '.*',
        '*.*.',
      ].join('\n');
      const expected = [
        '.**.',
        '.**',
        '*.',
        '.*..',
      ].join('\n');
      const actual = nextGen(input);
      expect(actual).to.equal(expected);
    });
  });
});
