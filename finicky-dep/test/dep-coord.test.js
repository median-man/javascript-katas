const sinon = require('sinon')
require('chai').should()

const { getResourceFromDependency } = require('../src/dep-coordinator')

describe('dep-coordinator/getResourceFromDependency', () => {
  it('should return "Jane Austen"', () => {
    const expected = 'Jane Austen'
    const finickyDepMock = {
      getResource: sinon.stub().returns(expected)
    }
    getResourceFromDependency(finickyDepMock).should.equal(expected)
  })
})
