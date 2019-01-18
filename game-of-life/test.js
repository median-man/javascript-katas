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

    it('should update all cells in row', () => {
      nextGeneration('.*').should.equal('..')
    })

    const createGridString = (...rows) => rows.join('\n')

    it('should return dead cells for cells with no live neighbors', () => {
      const previous = createGridString('*..', '...', '...')
      const expected = createGridString('...', '...', '...')
      nextGeneration(previous).should.equal(expected)
    })

    it.skip('should return live cell when cell has three live neighbors', () => {
      const previous = createGridString('.*.', '**.', '...')
      const expected = createGridString('**.', '**.', '...')
      nextGeneration(previous).should.equal(expected)
    })

    it.skip('should update cells in all rows', () => {
      const previous = createGridString('.', '*', '*')
      const expected = createGridString('.', '.', '.')
      nextGeneration(previous).should.equal(expected)
    })
  })
})
