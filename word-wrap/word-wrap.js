function wordWrap(text, columns) {
  const noColumns = !columns;
  if (noColumns) return '';

  const textLengthIsOk = (text.length <= columns);
  if (textLengthIsOk) return text;

  const firstLine = text.substr(0, columns);
  const remainingLines = wordWrap(text.substr(columns), columns);
  return `${firstLine}\n${remainingLines}`;
}

module.exports = wordWrap;
