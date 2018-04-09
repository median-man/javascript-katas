function makeField(fields) {
  const lines = fields.split(/\n/g);
  const dimensions = lines[0].match(/\d/g);
  if (!dimensions) {
    throw new Error('Fields must be preceded by integers for lines and columns.');
  }
  throw new Error('Lines and columns must be > 0 and <= 100');
}

module.exports = makeField;
