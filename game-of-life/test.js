require('chai').should()

const { nextGeneration } = require('./game-of-life')

describe('game-of-life kata', () => {
  describe('nextGeneration', () => {
    it('should return empty string given undefined', () => {
      nextGeneration().should.equal('')
    })

    it('should return dead cell given "."', () => {})

    it('should return all dead cells given all dead cells', () => {
      const allDead = ['...', '...', '...'].join('\n')
      nextGeneration(allDead).should.equal(allDead)
    })

    it('should return dead cell if cell has no neighbors', () => {
      nextGeneration('*').should.equal('.')
    })

    const createGridStr = (...rows) => rows.join('\n')

    it('should return dead cells for cells with no live neighbors', () => {
      const previous = createGridStr('*..', '...', '...')
      const expected = createGridStr('...', '...', '...')
      nextGeneration(previous).should.equal(expected)
    })

    it('should return live cells for cells with two live neighbors', () => {
      const previous = createGridStr('**.', '*..', '...')
      const expected = createGridStr('**.', '*..', '...')
      nextGeneration(previous).should.equal(expected)
    })
  })
})
