function wordWrap(text = '', columns = 0) {
  const result = `${text}`;
  return result.substr(0, columns);
}

module.exports = wordWrap;
