require('chai').should()

const { nextGrid } = require('./game-of-life')

describe('game-of-life kata', () => {
  const DEAD_CELL = '.'
  const LIVE_CELL = '*'

  describe('nextGrid', () => {
    const createGrid = (...rows) => rows.join('\n')

    describe('3 x 3 grid', () => {
      const deadRow = () => DEAD_CELL.repeat(3)
      const liveRow = () => LIVE_CELL.repeat(3)

      it('should return dead grid given all dead cells', () => {
        const allDeadCells = createGrid(
          deadRow(),
          deadRow(),
          deadRow()
        )
        nextGrid(allDeadCells).should.equal(allDeadCells)
      })

      const getCellAt = (grid, rowIndex, colIndex) => grid.split('\n')[rowIndex][colIndex]
      const middleCell = grid => getCellAt(grid, 1, 1)

      it('should return live cell when live cell has two live neighbors in its row', () => {
        const startGrid = createGrid(
          deadRow(),
          liveRow(),
          deadRow()
        )
        const result = nextGrid(startGrid)
        middleCell(result).should.equal(LIVE_CELL)
      })

      it('should return dead cell when live cell has no live neighbors', () => {
        const startGrid = createGrid(
          deadRow(),
          DEAD_CELL + LIVE_CELL + DEAD_CELL,
          deadRow()
        )
        const result = nextGrid(startGrid)
        middleCell(result).should.equal(DEAD_CELL)
      })

      it('should return dead cell when live cell has one live neighbor', () => {
        const startGrid = createGrid(
          deadRow(),
          LIVE_CELL + LIVE_CELL + DEAD_CELL,
          deadRow()
        )
        const result = nextGrid(startGrid)
        middleCell(result).should.equal(DEAD_CELL)
      })

      it('should return dead cell when live cell has > 3 live neighbors', () => {
        const startGrid = createGrid(
          liveRow(),
          liveRow(),
          deadRow()
        )
        const result = nextGrid(startGrid)
        middleCell(result).should.equal(DEAD_CELL)
      })

      it('should make dead cell alive if cell has 3 live neighbors', () => {
        const startGrid = createGrid(
          DEAD_CELL + LIVE_CELL + DEAD_CELL,
          LIVE_CELL + DEAD_CELL + LIVE_CELL,
          deadRow()
        )
        const result = nextGrid(startGrid)
        middleCell(result).should.equal(LIVE_CELL)
      })

      it('should update cells on left edge of grid', () => {
        const startGrid = createGrid(
          DEAD_CELL + DEAD_CELL + LIVE_CELL,
          LIVE_CELL + LIVE_CELL + LIVE_CELL,
          DEAD_CELL + DEAD_CELL + LIVE_CELL
        )
        const result = nextGrid(startGrid)
        const midLeftCell = getCellAt(result, 1, 0)
        midLeftCell.should.equal(DEAD_CELL)
      })

      it('should update cells on right edge of grid', () => {
        const startGrid = createGrid(
          LIVE_CELL + DEAD_CELL + LIVE_CELL,
          DEAD_CELL + LIVE_CELL + DEAD_CELL,
          LIVE_CELL + DEAD_CELL + LIVE_CELL
        )
        const result = nextGrid(startGrid)
        const midRightCell = getCellAt(result, 1, 2)
        midRightCell.should.equal(LIVE_CELL)
      })

      it('should update all cells of grid', () => {
        const startGrid = createGrid(
          DEAD_CELL + DEAD_CELL + LIVE_CELL,
          DEAD_CELL + LIVE_CELL + LIVE_CELL,
          DEAD_CELL + DEAD_CELL + LIVE_CELL
        )
        const expectedGrid = createGrid(
          DEAD_CELL + LIVE_CELL + LIVE_CELL,
          DEAD_CELL + LIVE_CELL + LIVE_CELL,
          DEAD_CELL + LIVE_CELL + LIVE_CELL
        )
        nextGrid(startGrid).should.equal(expectedGrid)
      })
    })

    describe('4 x 3 grid', () => {
      it('should calculate the next grid correctly', () => {
        const startGrid = createGrid(
          DEAD_CELL.repeat(3),
          DEAD_CELL + LIVE_CELL + LIVE_CELL,
          DEAD_CELL.repeat(3),
          LIVE_CELL.repeat(3)
        )
        const expectedGrid = createGrid(
          DEAD_CELL.repeat(3),
          DEAD_CELL.repeat(3),
          LIVE_CELL + DEAD_CELL + DEAD_CELL,
          DEAD_CELL + LIVE_CELL + DEAD_CELL
        )
        nextGrid(startGrid).should.equal(expectedGrid)
      })
    })
  })
})
