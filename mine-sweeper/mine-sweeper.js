function makeFields(fields) {
  const lines = fields.split(/\n/g);

  throwIfInvalidFieldDimensions(lines[0]);
  throwIfNoEndOfInput(lines);

  const fieldLines = lines
    .filter(line => /^[.|*]+/.test(line))
    .map(line => line.split(''));
  const field = createField(fieldLines);
  return `Field #1:\n${field}`;
}

function throwIfInvalidFieldDimensions(str) {
  const dimensions = str.match(/\d+/g);
  if (!dimensions) {
    throw new Error('Missing field dimensions.');
  }
  const [lines, columns] = dimensions.map(s => parseInt(s, 10));
  const isLinesInvalid = lines < 1 || lines > 100;
  const isColumnsInvalid = columns < 1 || columns > 100;
  if (isLinesInvalid || isColumnsInvalid) {
    throw new Error('Lines and columns must be > 0 and <= 100');
  }
}

function throwIfNoEndOfInput(lines) {
  const endOfInput = lines.some(line => /^0 0/m.test(line));
  if (!endOfInput) {
    throw new Error('Missing end of input. ("0 0")');
  }
}

function createField(lines) {
  const parseLine = (line, lineNum) =>
    line.map((value, column) => new Cell(value, lineNum, column));
  const cellLines = lines.map((line, lineNum) => parseLine(line, lineNum));
  return new CellGrid(cellLines).toString();
}

class Cell {
  constructor(value, line, column) {
    this.isMine = value === Cell.mine;
    this.line = line;
    this.column = column;
    this.adjacentMines = 0;
  }
  static get mine() {
    return '*';
  }
  setAdjacentMines(count) {
    this.adjacentMines = count;
  }
  toString() {
    if (this.isMine) return Cell.mine;
    return this.adjacentMines.toString();
  }
}

class CellGrid {
  constructor(cellLines) {
    this.lines = cellLines;
    this.setAdjacentMinesForAllCells();
  }

  setAdjacentMinesForAllCells() {
    this.lines.forEach((cellLine) => {
      const nonMineCells = cellLine.filter(cell => !cell.isMine);
      nonMineCells.forEach(cell => cell.setAdjacentMines(this.getMineCount(cell)));
    });
  }

  getMineCount(cell) {
    const adjacentCells = this.getAdjacentCells(cell);
    const mineCount = adjacentCells
      .reduce((count, adjacentCell) => (adjacentCell.isMine ? count + 1 : count), 0);
    return mineCount;
  }

  getAdjacentCells(cell) {
    const rightColumn = cell.column + 1;
    const leftColumn = cell.column - 1;
    const lineAbove = cell.line - 1;
    const lineBelow = cell.line + 1;

    let cells = {
      left: this.cell(cell.line, leftColumn),
      right: this.cell(cell.line, rightColumn),
      topLeft: this.cell(lineAbove, leftColumn),
      topCenter: this.cell(lineAbove, cell.column),
      topRight: this.cell(lineAbove, rightColumn),
      bottomLeft: this.cell(lineBelow, leftColumn),
      bottomCenter: this.cell(lineBelow, cell.column),
      bottomRight: this.cell(lineBelow, rightColumn),
    };
    cells = Object.values(cells).filter(cellExists => cellExists);

    return cells;
  }

  cell(line, column) {
    const lineDoesNotExist = line < 0 || line >= this.lines.length;
    if (lineDoesNotExist) return null;
    return this.lines[line][column] || null;
  }

  toString() {
    const stringifyLine = cellLine => cellLine.map(cell => cell.toString()).join('');
    return this.lines.map(cellLine => stringifyLine(cellLine)).join('\n');
  }
}

module.exports = makeFields;
