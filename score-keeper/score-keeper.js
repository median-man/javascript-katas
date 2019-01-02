const addLeadingZeros = (size, points) => {
  const value = points.toString()
  const leadingZeros = '0'.repeat(size - value.length)
  return leadingZeros + value
}

function printScore (pointsA, pointsB) {
  const scoreSize = 3
  return [pointsA, pointsB]
    .map(points => addLeadingZeros(scoreSize, points))
    .join(':')
}

function addOneForTeamA ([pointsA, pointsB]) {
  return [pointsA + 1, pointsB]
}

module.exports = { printScore, addOneForTeamA }
