function makeFields (sourceStr) {
  throwIfNoEndOfInput(sourceStr)
  const fieldSrcArray = sourceStr.match(/\d+ \d+\n\D+/g) || ['missing dimensions']

  const fields = fieldSrcArray.map((fieldSrc, i) => {
    const [dimensions, ...fieldLines] = fieldSrc.split(/\n/g).filter(s => s)
    throwIfInvalidFieldDimensions(dimensions, fieldLines)
    const field = createField(fieldLines)
    const fieldStr = `Field #${i + 1}:\n${field}`
    return fieldStr
  })

  return fields.join('\n\n')
}

function throwIfInvalidFieldDimensions (dim, field) {
  const dimensionError = new Error('Missing field dimensions or dimensions not valid.')

  if (isMissingDimensions()) {
    throw dimensionError
  }
  const [lines, columns] = dim.match(/\d+/g).map(n => parseInt(n, 10))
  if (dimensionsOutOfRange() || linesNotValid()) {
    throw dimensionError
  }

  function isMissingDimensions () {
    return !/\d+ \d+/.test(dim)
  }

  function dimensionsOutOfRange () {
    const isLinesInvalid = lines < 1 || lines > 100
    const isColumnsInvalid = columns < 1 || columns > 100
    return isLinesInvalid || isColumnsInvalid
  }

  function linesNotValid () {
    return field.length !== lines
  }
}

function throwIfNoEndOfInput (sourceStr) {
  const noEndOfInput = !/\n0 0/.test(sourceStr)
  if (noEndOfInput) {
    throw new Error('Missing end of input. ("0 0")')
  }
}

function createField (fieldLines) {
  const fieldMatrix = fieldLines.map(line => line.split('')).filter(line => line)
  const createCells = (line, lineNum) =>
    line.map((value, column) => new Cell(value, lineNum, column))
  const cellLines = fieldMatrix.map((line, lineNum) => createCells(line, lineNum))
  return new CellGrid(cellLines).toString()
}

class Cell {
  constructor (value, line, column) {
    this.isMine = value === Cell.mine
    this.line = line
    this.column = column
    this.adjacentMines = 0
  }
  static get mine () {
    return '*'
  }
  setAdjacentMines (count) {
    this.adjacentMines = count
  }
  toString () {
    if (this.isMine) return Cell.mine
    return this.adjacentMines.toString()
  }
}

class CellGrid {
  constructor (cellLines) {
    this.lines = cellLines
    this.setAdjacentMinesForAllCells()
  }

  setAdjacentMinesForAllCells () {
    this.lines.forEach((cellLine) => {
      const nonMineCells = cellLine.filter(cell => !cell.isMine)
      nonMineCells.forEach(cell => cell.setAdjacentMines(this.getMineCount(cell)))
    })
  }

  getMineCount (cell) {
    const adjacentCells = this.getAdjacentCells(cell)
    const mineCount = adjacentCells
      .reduce((count, adjacentCell) => (adjacentCell.isMine ? count + 1 : count), 0)
    return mineCount
  }

  getAdjacentCells (cell) {
    const rightColumn = cell.column + 1
    const leftColumn = cell.column - 1
    const lineAbove = cell.line - 1
    const lineBelow = cell.line + 1

    let cells = {
      left: this.cell(cell.line, leftColumn),
      right: this.cell(cell.line, rightColumn),
      topLeft: this.cell(lineAbove, leftColumn),
      topCenter: this.cell(lineAbove, cell.column),
      topRight: this.cell(lineAbove, rightColumn),
      bottomLeft: this.cell(lineBelow, leftColumn),
      bottomCenter: this.cell(lineBelow, cell.column),
      bottomRight: this.cell(lineBelow, rightColumn)
    }
    cells = Object.values(cells).filter(cellExists => cellExists)

    return cells
  }

  cell (line, column) {
    const lineDoesNotExist = line < 0 || line >= this.lines.length
    if (lineDoesNotExist) return null
    return this.lines[line][column] || null
  }

  toString () {
    const stringifyLine = cellLine => cellLine.map(cell => cell.toString()).join('')
    return this.lines.map(cellLine => stringifyLine(cellLine)).join('\n')
  }
}

module.exports = makeFields
