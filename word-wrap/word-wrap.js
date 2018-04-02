function wordWrap(text, columns) {
  const noColumns = !columns;
  if (noColumns) return '';

  const textLengthIsOk = (text.length <= columns);
  if (textLengthIsOk) return text;

  const lastSpace = text.lastIndexOf(' ', columns);
  const wrapAt = (lastSpace === -1 ? columns : lastSpace);

  const firstLine = text.substr(0, wrapAt);
  const remainingLines = wordWrap(text.substr(wrapAt).trim(), columns);
  return `${firstLine}\n${remainingLines}`;
}

module.exports = wordWrap;
