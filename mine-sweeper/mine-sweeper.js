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
  const cellLines = lines.map(createLineOfCells);
  setAdjacentMines(cellLines);
  const createLineString = cellLine => cellLine.map(cell => cell.toString()).join('');
  const mineFieldString = cellLines.map(cellLine => createLineString(cellLine)).join('\n');
  return mineFieldString;
}

function createLineOfCells(line, lineNum) {
  return line.map((value, column) => new Cell(value, lineNum, column));
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

function setAdjacentMines(cellLines) {
  cellLines.forEach((cellLine) => {
    const nonMineCells = cellLine.filter(cell => !cell.isMine);
    nonMineCells.forEach(cell => cell.setAdjacentMines(countAdjacentMines(cell, cellLines)));
  });
}

function countAdjacentMines(cell, cellLines) {
  return getMineCount(adjacentCells(cell, cellLines));
}

function adjacentCells(cell, cellLines) {
  const cells = [];
  const lineNum = cell.line;

  const isFirstLine = lineNum === 0;
  if (!isFirstLine) {
    const lineAbove = lineNum - 1;
    const cellAbove = cellLines[lineAbove][0];
    cells.push(cellAbove);
  }

  const isLastLine = lineNum === cellLines.length - 1;
  if (!isLastLine) {
    const lineBelow = lineNum + 1;
    const cellBelow = cellLines[lineBelow][0];
    cells.push(cellBelow);
  }
  return cells;
}

function getMineCount(cells) {
  const mineCount = cells
    .reduce((count, cell) => (cell.isMine ? count + 1 : count), 0);
  return mineCount;
}

module.exports = makeFields;
