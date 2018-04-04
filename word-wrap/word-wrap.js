function wordWrap(text = '', columns = 0) {
  const stringified = `${text}`;
  const firstLine = stringified.substr(0, columns);
  const remaining = stringified.substr(columns);
  if (firstLine && remaining) {
    return `${firstLine}\n${wordWrap(remaining, columns)}`;
  }
  return firstLine;
}

module.exports = wordWrap;
