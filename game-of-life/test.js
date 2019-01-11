require('chai').should()

const { nextGeneration } = require('./game-of-life')

describe('game-of-life kata', () => {
  describe('nextGeneration', () => {
    const LIVE_CHAR = '*'
    const DEAD_CHAR = '.'
    const SEPARATOR = '\n'
    const createGridStr = (...rows) => rows.join(SEPARATOR)

    it('should return all dead when called with all dead', () => {
      const deadRow = DEAD_CHAR.repeat(3)
      const allDead3x3Grid = createGridStr(deadRow, deadRow, deadRow)
      nextGeneration(allDead3x3Grid).should.equal(allDead3x3Grid)
    })

    const middleCellOfGridShouldEqual = (gridStr, expectedChar) => {
      const middleCell = gridStr[5]
      middleCell.should.equal(expectedChar)
    }

    it('should return live cell when live cell has two live neighbors', () => {
      const deadRow = DEAD_CHAR.repeat(3)
      const gridString = createGridStr(deadRow, LIVE_CHAR.repeat(3), deadRow)
      const grid = nextGeneration(gridString)
      middleCellOfGridShouldEqual(grid, LIVE_CHAR)
    })

    it('should return dead cell when cell has no live neighbors', () => {
      const deadRow = DEAD_CHAR.repeat(3)
      const gridString = createGridStr(
        deadRow,
        DEAD_CHAR + LIVE_CHAR + DEAD_CHAR,
        deadRow
      )
      const grid = nextGeneration(gridString)
      middleCellOfGridShouldEqual(grid, DEAD_CHAR)
    })

    it('should return dead cell when cell has one live neighbor', () => {
      const deadRow = DEAD_CHAR.repeat(3)
      const gridString = createGridStr(
        deadRow,
        DEAD_CHAR + LIVE_CHAR + LIVE_CHAR,
        deadRow
      )
      const grid = nextGeneration(gridString)
      middleCellOfGridShouldEqual(grid, DEAD_CHAR)
    })

    it('should return dead cell when cell has four live neighbors', () => {
      const deadRow = DEAD_CHAR.repeat(3)
      const gridString = createGridStr(
        LIVE_CHAR + LIVE_CHAR + DEAD_CHAR,
        LIVE_CHAR + LIVE_CHAR + LIVE_CHAR,
        deadRow
      )
      const grid = nextGeneration(gridString)
      middleCellOfGridShouldEqual(grid, DEAD_CHAR)
    })

    it('should return live cell when dead cell has three live neighbors', () => {
      const deadRow = DEAD_CHAR.repeat(3)
      const gridString = createGridStr(
        DEAD_CHAR + LIVE_CHAR + DEAD_CHAR,
        LIVE_CHAR + DEAD_CHAR + LIVE_CHAR,
        deadRow
      )
      const grid = nextGeneration(gridString)
      middleCellOfGridShouldEqual(grid, LIVE_CHAR)
    })

    it('should update all cells in row', () => {
      const deadRow = DEAD_CHAR.repeat(3)
      const gridString = createGridStr(
        DEAD_CHAR + LIVE_CHAR + DEAD_CHAR,
        LIVE_CHAR + DEAD_CHAR + LIVE_CHAR,
        deadRow
      )
      const expectedNextGridStr = createGridStr(
        DEAD_CHAR + LIVE_CHAR + DEAD_CHAR,
        DEAD_CHAR + LIVE_CHAR + DEAD_CHAR,
        deadRow
      )

      nextGeneration(gridString).should.equal(expectedNextGridStr)
    })

    it('should update cells in top row', () => {
      const deadRow = DEAD_CHAR.repeat(3)
      const gridString = createGridStr(
        LIVE_CHAR + LIVE_CHAR + DEAD_CHAR,
        LIVE_CHAR + LIVE_CHAR + LIVE_CHAR,
        deadRow
      )
      const expectedTopRow = LIVE_CHAR + DEAD_CHAR + LIVE_CHAR
      const topRow = nextGeneration(gridString).substr(0, 3)
      topRow.should.equal(expectedTopRow)
    })

    it('should update cells in all rows of a 3x3 grid', () => {
      const deadRow = DEAD_CHAR.repeat(3)
      const gridString = createGridStr(
        LIVE_CHAR + LIVE_CHAR + DEAD_CHAR,
        LIVE_CHAR + LIVE_CHAR + LIVE_CHAR,
        deadRow
      )
      const expectedRows = [
        LIVE_CHAR + DEAD_CHAR + LIVE_CHAR,
        LIVE_CHAR + DEAD_CHAR + LIVE_CHAR,
        DEAD_CHAR + LIVE_CHAR + DEAD_CHAR
      ]
      const rows = nextGeneration(gridString).split('\n')
      rows.should.eql(expectedRows)
    })

    it.skip('should update cells in a 3 x 4 grid', () => {
      const deadRow = DEAD_CHAR.repeat(4)
      // const gridString = createGridStr(
      //   LIVE_CHAR + LIVE_CHAR + DEAD_CHAR,
      //   LIVE_CHAR + LIVE_CHAR + LIVE_CHAR,
      //   deadRow,
      //   LIVE_CHAR + DEAD_CHAR + DEAD_CHAR
      // )
      // const expectedRows = [
      //   LIVE_CHAR + DEAD_CHAR + LIVE_CHAR,
      //   LIVE_CHAR + DEAD_CHAR + LIVE_CHAR,
      //   LIVE_CHAR + DEAD_CHAR + DEAD_CHAR,
      //   DEAD_CHAR + DEAD_CHAR + DEAD_CHAR
      // ]
      // const rows = nextGeneration(gridString).split('\n')
      // rows.should.eql(expectedRows)
    })
  })
})
