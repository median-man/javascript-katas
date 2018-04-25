const { expect } = require('chai');
const { weather: weatherModule } = require('../index.js');
const fs = require('fs');

describe('weather', () => {
  const getWeather = () => Object.assign({}, weatherModule);
  const mockParser = returns => ({ dayWithLowestTempSpread: () => returns });
  it('should exist', () => {
    const weather = getWeather();
    return expect(weather).to.exist;
  });

  it('has a result property initially set to -1', () => {
    const weather = getWeather();
    expect(weather.result).to.equal(-1);
  });

  it('has a fileName that defaults to "./data/weather.dat"', () => {
    const weather = getWeather();
    expect(weather.fileName).to.equal('./data/weather.dat');
  });

  it('has an econding that defaults to "utf8"', () => {
    const weather = getWeather();
    expect(weather.encoding).to.equal('utf8');
  });

  it('has a fileReader that defaults to fs.readFile', () => {
    const weather = getWeather();
    expect(weather.fileReader).to.equal(fs.readFile, 'expected fs.readFile');
  });

  describe('#parse', () => {
    it('is a function', () => {
      const weather = getWeather();
      expect(weather.parse).to.be.a('function');
    });

    it('should throw if err parameter exists', () => {
      const weather = getWeather();
      const err = new Error();
      const shouldThrow = () => weather.parse(err);
      expect(shouldThrow, 'weather.render(err)').to.throw(err);
    });

    it('should assign weather.result the integer for the day with the lowest temp spread', () => {
      const weather = getWeather();
      const expected = 5;
      const err = false;
      const data = 'test data';
      weather.parser = mockParser(expected);
      weather.parse(err, data);
      expect(weather.result).to.equal(expected);
    });
  });

  describe('#run', () => {
    let weather;
    const setupWeather = () => {
      weather = getWeather();
      weather.parse = () => {};
    };
    beforeEach(setupWeather);

    it('should pass result to render callback argument', (done) => {
      const expected = 2;
      weather.result = expected;
      weather.fileReader = (fname, encoding, cb) => cb();
      let actual;
      const render = (result) => {
        actual = result;
        expect(actual).to.equal(expected);
        done();
      };
      weather.run(render);
    });

    it('should call fileReader with fileName, encoding, and a callback', (done) => {
      const expected = {
        fileName: 'test',
        encoding: 'utf8',
        cb: () => {},
      };
      Object.assign(weather, expected);
      weather.fileReader = (fileName, encoding, cb) => {
        expect(fileName).to.equal(expected.fileName);
        expect(encoding).to.equal(expected.encoding);
        expect(cb).to.be.a('function');
        done();
      };
      weather.run(() => {});
    });

    it('should pass the data from reading the file to parse', (done) => {
      const expected = 'test data';
      weather.fileReader = (fileName, encoding, cb) => {
        const err = undefined;
        cb(err, expected);
      };
      weather.parse = (err, data) => {
        expect(data).to.equal(expected);
        done();
      };
      weather.run(() => {});
    });
  });
});
