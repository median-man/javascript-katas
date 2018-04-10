function makeFields(fields) {
  const lines = fields.split(/\n/g);
  throwIfInvalidFieldDimensions(lines[0]);
  throwIfNoEndOfInput(lines);
  const fieldLines = lines.filter(line => /^[.|*]+/.test(line));
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
  const getMineCount = (lineNum) => {
    const isFirstLine = lineNum === 0;
    const neighborCell = isFirstLine ? lines[lineNum + 1] : lines[lineNum - 1];
    return isMine(neighborCell) ? '1' : '0';
  };

  return lines
    .map((cell, lineNum) => (cell === '*' ? '*' : getMineCount(lineNum)))
    .join('\n');
}

function isMine(cell) {
  return cell === '*';
}

module.exports = makeFields;
