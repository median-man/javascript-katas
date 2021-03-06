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

    it('should update cells in each row', () => {
      const previous = createGridString('.', '*')
      const expected = createGridString('.', '.')
      nextGeneration(previous).should.equal(expected)
    })

    it('should return dead cells for cells with no live neighbors', () => {
      const previous = createGridString('*..', '...', '...')
      const expected = createGridString('...', '...', '...')
      nextGeneration(previous).should.equal(expected)
    })

    it('should return a live cell when live cell has two neighbors', () => {
      nextGeneration('***').should.equal('.*.')
    })

    it('should return live cell when cell has three live neighbors', () => {
      const previous = createGridString('...', '*.*', '..*')
      const middleCell = nextGeneration(previous)[5]
      middleCell.should.equal('*')
    })

    it('should return dead cell when cell has four neighbors', () => {
      const previous = createGridString('*.*', '.*.', '*.*')
      const middleCell = nextGeneration(previous)[5]
      middleCell.should.equal('.')
    })

    it('should return 5 x 7 grid', () => {
      const previous = createGridString(
        '.......',
        '...*...',
        '.......',
        '..**...',
        '..*....'
      )
      const expected = createGridString(
        '.......',
        '.......',
        '..**...',
        '..**...',
        '..**...'
      )
      nextGeneration(previous).should.equal(expected)
    })
  })
})
