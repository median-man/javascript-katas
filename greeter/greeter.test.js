const should = require('chai').should()
const { greeter } = require('./greeter')

describe('greeter', () => {
  it('should exist', () => should.exist(greeter))
})
