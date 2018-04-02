function wordWrap(text, columns = 0) {
  if (!text || columns <= 0) return '';
  if (text.length <= columns) return text;

  let wrapAt = text.lastIndexOf(' ', columns);
  if (wrapAt === -1) wrapAt = columns;

  const firstLine = text.substr(0, wrapAt);
  const remaining = wordWrap(text.substr(wrapAt).trim(), columns);
  return `${firstLine}\n${remaining}`;
}

module.exports = wordWrap;
