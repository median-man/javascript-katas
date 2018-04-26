const fs = require('fs');

function readFile(fname, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(fname, encoding, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
    return resolve();
  });
}
module.exports = readFile;
