function printTeamScore (points) {
  const SCORE_LEN = 3
  const pointsStr = points.toString()
  const leadingZeros = '0'.repeat(SCORE_LEN - pointsStr.length)
  return leadingZeros + pointsStr
}

function printScore (scoreA, scoreB) {
  const SCORE_SEPARATOR = ':'
  return [scoreA, scoreB].map(printTeamScore).join(SCORE_SEPARATOR)
}

function createScoreMethod ([pointsA, pointsB]) {
  return ([scoreA, scoreB]) => [scoreA + pointsA, scoreB + pointsB]
}

function createScoreKeeper (config) {
  return config.reduce((scoreKeeper, { name, points }) => {
    scoreKeeper[name + 'ForTeamA'] = createScoreMethod([points, 0])
    scoreKeeper[name + 'ForTeamB'] = createScoreMethod([0, points])
    return scoreKeeper
  }, {})
}

module.exports = { printScore, createScoreKeeper }
