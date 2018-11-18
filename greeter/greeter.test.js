const should = require('chai').should()
const { createGreeter } = require('./greeter')

describe('createGreeter', () => {
  it('should return an object', () => should.exist(createGreeter))
})
