require('chai').should()

const { nextGrid } = require('./game-of-life')

describe('game-of-life kata', () => {
  describe('nextGrid', () => {
    it('should return all dead cells', () => {
      const startGrid = '...\n...\n...'
      nextGrid(startGrid).should.equal(startGrid)
    })

    it('should change live cell to dead if cell has no live neighbors', () => {
      const startGrid = '...\n.*.\n...'
      const expectedGrid = '...\n...\n...'
      nextGrid(startGrid).should.equal(expectedGrid)
    })

    const getCellAt = (gridStr, row, col) => gridStr.split('\n')[row][col]

    it('should not change live cell if cell has live cells on left and right', () => {
      const startGrid = '...\n***\n...'
      const middleCell = getCellAt(nextGrid(startGrid), 1, 1)
      middleCell.should.equal('*')
    })

    it('should not change live cell if cell has live cells on left and above', () => {
      const startGrid = '.*.\n**.\n...'
      const middleCell = getCellAt(nextGrid(startGrid), 1, 1)
      middleCell.should.equal('*')
    })

    it('should change live cell to dead if cell has only one neighbor', () => {
      const startGrid = '...\n**.\n...'
      const middleCell = getCellAt(nextGrid(startGrid), 1, 1)
      middleCell.should.equal('.')
    })

    it('should not change live cell if cell has live cells on left and below', () => {
      const startGrid = '...\n**.\n.*.'
      const middleCell = getCellAt(nextGrid(startGrid), 1, 1)
      middleCell.should.equal('*')
    })

    it('should not change live cell if cell has live cells on left and above left', () => {
      const startGrid = '*..\n**.\n...'
      const middleCell = getCellAt(nextGrid(startGrid), 1, 1)
      middleCell.should.equal('*')
    })

    it('should not change live cell if cell has live cells on left and above right', () => {
      const startGrid = '..*\n**.\n...'
      const middleCell = getCellAt(nextGrid(startGrid), 1, 1)
      middleCell.should.equal('*')
    })

    it('should not change live cell if cell has live cells on left and below right', () => {
      const startGrid = '...\n**.\n..*'
      const middleCell = getCellAt(nextGrid(startGrid), 1, 1)
      middleCell.should.equal('*')
    })

    it('should change live cell to dead if cell has more than 3 live neighbor cells', () => {
      const startGrid = '...\n***\n.**'
      const middleCell = getCellAt(nextGrid(startGrid), 1, 1)
      middleCell.should.equal('.')
    })

    it('should not change dead cell to live if cell has 2 live neighbor cells', () => {
      const startGrid = '...\n*.*\n...'
      const middleCell = getCellAt(nextGrid(startGrid), 1, 1)
      middleCell.should.equal('.')
    })

    it('should update all cells in row', () => {
      const startGrid = '...\n*.*\n...'
      const gridStr = nextGrid(startGrid)
      const middleRow = gridStr.split('\n')[1]
      middleRow.should.equal('...')
    })

    it('should update all cells', () => {
      const startGrid = '.*.\n***\n.*.'
      const expectedGrid = '***\n*.*\n***'
      nextGrid(startGrid).should.equal(expectedGrid)
    })
  })
})
