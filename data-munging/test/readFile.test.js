const { expect } = require('chai');
const fs = require('fs');
const readFile = require('../lib/readFile.js');

describe('readFile()', () => {
  const readFileStub = (fname, encoding, callback) => callback(null, 'test');
  const readFileCopy = Object.assign({}, fs.readFile);
  const stubFsReadfile = () => { fs.readFile = readFileStub; };
  const restoreFsReadfile = () => { fs.readFile = readFileCopy; };

  beforeEach(stubFsReadfile);
  afterEach(restoreFsReadfile);

  it('it is a function', () => {
    expect(readFile).to.be.a('function');
  });

  it('should return a promise', () => {
    expect(readFile('testFile', 'utf8')).to.be.a('promise');
  });

  it('should reject if fs.readFile passes an error to callback', (done) => {
    const expected = new Error();
    fs.readFile = (fname, encoding, callback) => callback(expected);
    readFile('testFile', 'utf8')
      .then(() => done('expected readFile() to reject'))
      .catch((err) => {
        expect(err).to.equal(expected);
        done();
      });
  });

  it('should pass fname and encoding to fs.readFile()', (done) => {
    const expected = {
      fname: 'test',
      encoding: 'utf8',
    };
    let actual;
    fs.readFile = (fname, encoding, callback) => {
      actual = { fname, encoding };
      callback();
    };
    readFile(expected.fname, expected.encoding)
      .then(() => {
        expect(actual).to.eql(expected);
        return done();
      })
      .catch(done);
  });

  it('should resolve a buffer or string from file', (done) => {
    const expected = 'test string';
    fs.readFile = (fname, encoding, callback) => callback(null, expected);
    readFile(expected.fname, expected.encoding)
      .then((actual) => {
        expect(actual).to.eql(expected);
        return done();
      })
      .catch(done);
  });
});
